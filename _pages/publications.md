---
layout: page
permalink: /Publications/
title: Publications
description: Peer-reviewed papers, preprints, and manuscripts in multi-robot autonomy, safe control, and learning-enabled robotics.
nav: true
nav_order: 3
---

<p class="publication-note-v2">* Equal contribution</p>

<div class="publications-v2">
  <section class="publications-v2-section">
    <div class="publications-v2-heading">
      <h2>Under Review & Preprints</h2>
    </div>
    {% for pub in site.data.publications.under_review %}
      {% include publication-row.liquid pub=pub %}
    {% endfor %}
  </section>

  <section class="publications-v2-section">
    <div class="publications-v2-heading">
      <h2>Journals</h2>
    </div>
    {% for pub in site.data.publications.journals %}
      {% include publication-row.liquid pub=pub %}
    {% endfor %}
  </section>

  <section class="publications-v2-section">
    <div class="publications-v2-heading">
      <h2>Conferences</h2>
    </div>
    {% for pub in site.data.publications.conferences %}
      {% include publication-row.liquid pub=pub %}
    {% endfor %}
  </section>
</div>
