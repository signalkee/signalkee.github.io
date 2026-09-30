---
layout: page
title: Research
eyebrow: RESEARCH
permalink: /Researches & Projects/
description: Multi-robot autonomy across selective communication, mission-aware reasoning, prediction-guided execution, and safe learning-enabled control.
nav: true
nav_order: 2
---

<div class="research-intro-v2">
  <div class="research-principle-v2">
    <p class="v2-card-meta">CURRENT DIRECTION</p>
    <h2>How should robot teams understand what matters, share it selectively, and act using predicted consequences?</h2>
    <p>
      My research connects communication, reasoning, and prediction so robot teams can coordinate useful information and make better downstream
      decisions under realistic system constraints.
    </p>
  </div>
  <div class="research-tags-v2" aria-label="Research areas">
    <span>Multi-Robot Autonomy</span><span>Selective Communication</span><span>Mission-Aware Reasoning</span><span>Prediction-Guided Execution</span><span>Safe Autonomy</span><span>Learning & Control</span>
  </div>
</div>

<div class="projects projects-v2">
  <section class="research-section-v2">
    <div class="research-section-v2-head">
      <p class="v2-eyebrow">CURRENT RESEARCH</p>
      <h2>Selective communication for scalable multi-robot coordination</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-2">
      {% assign sorted_projects = site.projects | sort: 'sort_date' | reverse %}
      {% for project in sorted_projects %}
        {% if project.category == 'Current research' %}{% include projects.liquid %}{% endif %}
      {% endfor %}
    </div>
  </section>

  <section class="research-section-v2">
    <div class="research-section-v2-head">
      <p class="v2-eyebrow">SELECTED RESEARCH</p>
      <h2>Safe control, learning, and real robotic systems</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-2">
      {% assign sorted_projects = site.projects | sort: 'sort_date' | reverse %}
      {% for project in sorted_projects %}
        {% if project.category == 'Graduate research projects' or project.category == 'Work experience' %}
          {% include projects.liquid %}
        {% endif %}
      {% endfor %}
    </div>
  </section>

  <details class="research-archive-v2">
    <summary>
      <span><strong>Earlier research & robotics projects</strong><small>Yonsei · SNU · undergraduate work</small></span>
      <span class="archive-toggle">Show archive ↓</span>
    </summary>
    <div class="row row-cols-1 row-cols-md-2 mt-4">
      {% assign sorted_projects = site.projects | sort: 'sort_date' | reverse %}
      {% for project in sorted_projects %}
        {% if project.category == 'Undergraduate research projects' or project.category == 'Undergraduate projects' %}
          {% include projects.liquid %}
        {% endif %}
      {% endfor %}
    </div>
  </details>
</div>
