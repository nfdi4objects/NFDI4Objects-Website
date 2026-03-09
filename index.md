---
layout: n4o-base
title: Startseite
lang: de
translation_key: home
permalink: /
---
{% include sections/hero.html lang="de" %}
<main id="main-content" class="home">

{% assign services = site.data.de.teaser-services %}
{% include sections/teaser-grid.html
    title=services.title
    subtitle=services.subtitle
    bg=services.bg
    focus=services.focus
    columns=services.columns
    items=services.items
    section_button=services.section_button
%}



{% include sections/news-dynamic.html
    lang="de"
    limit=3
    bg="bg-sand"
    title="News"
    all_url="/news/"
%}

</main>