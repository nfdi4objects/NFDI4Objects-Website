// Ticket form submission logic (helpdesk + comment forms)
// Shared by pages with `#helpdeskform` and/or `#commentform`.

const token = window.ENV.MY_SECRET_TOKEN;

const texts = {
  de: {
    confirm: ["Support Ticket mit Nummer #", " wurde erfolgreich angelegt!"],
    error: "Support Ticket konnte nicht angelegt werden!"
  },
  en: {
    confirm: ["Support Ticket with number #", " has been created successfully!"],
    error: "Support Ticket could not be created!"
  }
};

// Get the current language from the HTML lang attribute
const hlang = document.documentElement.lang || "de";

// Per-form configuration
const FORMS = {
  helpdeskform: {
    getTags: () => document.getElementById("qcat").value
  },
  commentform: {
    // No category field on this form — always tag as "comment"
    getTags: () => "comment"
  }
};

document.addEventListener("DOMContentLoaded", function() {
  Object.keys(FORMS).forEach(function(formId) {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        sendFormContents(formId);
      });
    }
  });

  // Close modal when clicking the backdrop
  const dialog = document.getElementById("sentdialog");
  if (dialog) {
    dialog.addEventListener("click", function(e) {
      if (e.target === this) {
        this.close();
      }
    });
  }
});

function sendFormContents(formId) {
  const config = FORMS[formId];
  const dialog = document.getElementById("sentdialog");
  const dialogMessage = document.getElementById("dialogmessage");

  const email = document.getElementById("email").value;
  const name = document.getElementById("name");
  const gname = document.getElementById("gname");
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // name/gname exist on the helpdesk form; the comment form omits them
  const firstName = gname ? gname.value.trim() : "";
  const lastName = name ? name.value.trim() : "";
  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const from = fullName ? fullName + " <" + email + ">" : email;

  // Simple client-side validation
  if (!email || !subject || !message) {
    dialogMessage.textContent = texts[hlang].error;
    dialog.showModal();
    return;
  }

  $.ajax({
    type: "POST",
    dataType: "json",
    url: "https://ticket.nfdi4objects.net/api/v1/tickets",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    data: {
      title: subject,
      group: config.getTags(),
      customer_id: "guess:" + email,
      article: {
        from: from,
        subject: subject,
        body: message,
        sender: "Customer",
        type: "email",
        internal: false
      }
    },
    success: function(result) {
      document.getElementById(formId).reset();
      dialogMessage.innerHTML =
        texts[hlang].confirm[0] + result.number + texts[hlang].confirm[1];
      dialog.showModal();
    },
    error: function(xhr) {
      dialogMessage.innerHTML =
        texts[hlang].error + "<br>" + xhr.status + ": " + xhr.statusText;
      dialog.showModal();
    }
  });
}