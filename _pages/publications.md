---
layout: page
permalink: /Publications/
title: Publications
eyebrow: PUBLICATIONS
description: Peer-reviewed papers, preprints, and manuscripts in multi-robot autonomy, safe control, and learning-enabled robotics.
nav: true
nav_order: 3
---

<p class="publication-note-v2">* Equal contribution</p>

<div class="publications-v2">
  <section class="publications-v2-section">
    <div class="publications-v2-heading">
      <p class="v2-eyebrow">MANUSCRIPTS</p>
      <h2>Under review & preprints</h2>
    </div>
    {% for pub in site.data.publications.under_review %}
      {% include publication-row-v2.liquid pub=pub %}
    {% endfor %}
  </section>

  <section class="publications-v2-section">
    <div class="publications-v2-heading">
      <p class="v2-eyebrow">JOURNALS</p>
      <h2>Journal papers</h2>
    </div>
    {% for pub in site.data.publications.journals %}
      {% include publication-row-v2.liquid pub=pub %}
    {% endfor %}
  </section>

  <section class="publications-v2-section">
    <div class="publications-v2-heading">
      <p class="v2-eyebrow">CONFERENCES</p>
      <h2>Conference papers</h2>
    </div>
    {% for pub in site.data.publications.conferences %}
      {% include publication-row-v2.liquid pub=pub %}
    {% endfor %}
  </section>
</div>