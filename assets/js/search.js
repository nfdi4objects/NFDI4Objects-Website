/**
 * NFDI4Objects – Lunr-basierte Volltextsuche
 * Funktioniert für klassische Suchseite UND Overlay-Suche
 */
function initSearch(indexPath, lang, selectors = {}) {
  // Dynamisch die richtigen Felder erkennen
  const input =
    document.querySelector(selectors.inputSelector || "#search-input") ||
    document.querySelector("#overlay-search-input");
  const resultsList =
    document.querySelector(selectors.resultsSelector || "#search-results") ||
    document.querySelector("#overlay-search-results");
 /*  const filtersWrap = document.querySelector(".search-filters");
  const filterButtons = document.querySelectorAll(".search-filters button"); */

  if (!input || !resultsList) {
    console.warn("[search] Kein gültiges Suchfeld gefunden – initSearch übersprungen.");
    return;
  }

  console.info(`[search] Initialisiere Suche mit Index: ${indexPath}`);
  let currentFilter = "all";

  // „Ladezustand“-Helper
  const setLoading = (on) => resultsList.classList.toggle("loading", !!on);


  // Filter-Handling 
/* if (filtersWrap && filterButtons.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter || "all";
      performSearch(input.value.trim());
    });
  });
} */


  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const highlightTerm = (text, term) => {
    if (!text || !term) return text || "";
    const safe = escapeRegExp(term);
    const pattern = new RegExp(`(?!<[^>]*?)(${safe})(?![^<]*?>)`, "gi");
    return text.replace(pattern, "<mark>$1</mark>");
  };

  // Index laden
  setLoading(true);
  fetch(indexPath, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      if (!Array.isArray(data)) throw new Error("search.json ist ungültig");
      if (typeof lunr === "undefined") throw new Error("lunr.js fehlt");

      const idx = lunr(function () {
        this.ref("url");
        this.field("title", { boost: 10 });
        this.field("content", { boost: 2 });
        this.field("tags", { boost: 5 });
        data.forEach((doc) => this.add(doc));
      });

      const debounce = (fn, delay) => {
        let t;
        return (...args) => {
          clearTimeout(t);
          t = setTimeout(() => fn.apply(this, args), delay);
        };
      };

      // Sucheingabe verbinden
      input.addEventListener(
        "input",
        debounce(() => performSearch(input.value.trim()), 300)
      );

      // URL-Parameter ?q= übernehmen (falls vorhanden)
      const qParam = new URLSearchParams(window.location.search).get("q");
      if (qParam) {
        input.value = qParam;
        performSearch(qParam);
      } else {
        setLoading(false);
      }

      // Suchfunktion
      function performSearch(query) {
        resultsList.innerHTML = "";
        if (!query || query.length < 2) {
          setLoading(false);
          return;
        }

        setLoading(true);
        let results = [];
        try {
          results = idx.search(query);
        } catch (e) {
          console.warn("[search] Lunr-Fehler:", e);
          setLoading(false);
          return;
        }

        if (!results.length) {
          resultsList.innerHTML = `<li class="no-results">${
            lang === "en" ? "No results found." : "Keine Ergebnisse gefunden."
          }</li>`;
          setLoading(false);
          return;
        }

        for (const r of results) {
          const item = data.find((d) => d.url === r.ref);
          if (!item) continue;
          /* if (currentFilter !== "all" && item.type !== currentFilter) continue; */

          const tagsHtml =
            Array.isArray(item.tags) && item.tags.length
              ? `<div class="search-tags">${item.tags
                  .map((t) => {
                    const slug = String(t).toLowerCase().replace(/\s+/g, "-");
                    const base = lang === "en" ? "/en/tags/#" : "/tags/#";
                    return `<a class="tag-link" href="${base}${slug}">${t}</a>`;
                  })
                  .join("")}</div>`
              : "";

          let typeLabel = "";
          if (item.type === "person") typeLabel = lang === "en" ? "Person" : "Person";
          else if (item.type === "area") typeLabel = lang === "en" ? "Area" : "Bereich";
          else if (item.type === "news") typeLabel = lang === "en" ? "News" : "Nachricht";

          const titleHTML = highlightTerm(item.title || "", query);
          const excerptHTML = highlightTerm(item.content || "", query);

          resultsList.insertAdjacentHTML(
            "beforeend",
            `
            <li class="search-item ${item.type || ""}">
              ${typeLabel ? `<span class="type-label">${typeLabel}</span>` : ""}
              <a href="${item.url}" class="title">${titleHTML}</a>
              ${excerptHTML ? `<p class="excerpt">${excerptHTML}</p>` : ""}
              ${tagsHtml}
            </li>
          `
          );
        }

        setLoading(false);
      }
    })
    .catch((err) => {
      console.error("[search] Fehler beim Initialisieren:", err);
      resultsList.innerHTML = `<li class="no-results">Index konnte nicht geladen werden.</li>`;
      setLoading(false);
    });
}
