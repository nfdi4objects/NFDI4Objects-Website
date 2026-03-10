---
layout: n4o-base
title: Home
lang: en
translation_key: home
permalink: /en/
---
{% include sections/hero.html lang="en" %}
<main id="main-content" class="home">

{% assign services = site.data.en.teaser-services %}
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
    lang="en"
    limit=3
    bg="bg-sand"
    title="News"
    all_url="/en/news/"
%}
</main>
