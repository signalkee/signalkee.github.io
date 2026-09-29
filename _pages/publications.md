---
layout: page
permalink: /Publications/
title: Publications
eyebrow: PUBLICATIONS
description: Peer-reviewed papers, preprints, and manuscripts in robotics, control, and machine learning.
nav: true
nav_order: 3
---

<div class="publications-v2">
  <section class="publications-v2-section">
    <div class="publications-v2-heading"><p class="v2-eyebrow">PREPRINTS & UNDER REVIEW</p><h2>Current manuscripts</h2></div>
    {% for pub in site.data.publications.under_review %}{% include publication-row-v2.liquid pub=pub label='Preprint / Under review' %}{% endfor %}
  </section>
  <section class="publications-v2-section">
    <div class="publications-v2-heading"><p class="v2-eyebrow">CONFERENCES</p><h2>Conference papers</h2></div>
    {% for pub in site.data.publications.conferences %}{% include publication-row-v2.liquid pub=pub label='Conference' %}{% endfor %}
  </section>
  <section class="publications-v2-section">
    <div class="publications-v2-heading"><p class="v2-eyebrow">JOURNALS</p><h2>Journal papers</h2></div>
    {% for pub in site.data.publications.journals %}{% include publication-row-v2.liquid pub=pub label='Journal' %}{% endfor %}
  </section>
</div>
