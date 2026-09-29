---
layout: page
title: Research
eyebrow: RESEARCH
permalink: /Researches & Projects/
description: Communication-aware multi-robot autonomy, safe learning-enabled control, and selected earlier robotics work.
nav: true
nav_order: 2
---

<div class="research-intro-v2">
  <div class="research-principle-v2">
    <p class="v2-card-meta">CURRENT DIRECTION</p>
    <h2>How should robot teams share information when communication itself is a scarce resource?</h2>
    <p>My current work treats communication as part of the autonomy stack rather than an unlimited background service. The goal is to connect what robots communicate to what the team actually needs to accomplish the mission.</p>
  </div>
  <div class="research-tags-v2" aria-label="Research areas">
    <span>Multi-Robot Systems</span><span>Adaptive Communication</span><span>Distributed Coordination</span><span>Safe Autonomy</span><span>Learning & Control</span>
  </div>
</div>

<div class="projects projects-v2">
  <section class="research-section-v2">
    <div class="research-section-v2-head">
      <p class="v2-eyebrow">CURRENT PHD RESEARCH</p>
      <h2>Multi-robot coordination under communication constraints</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-2">
      {% assign sorted_projects = site.projects | sort: 'importance' | reverse %}
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
      {% assign sorted_projects = site.projects | sort: 'importance' | reverse %}
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
      {% assign sorted_projects = site.projects | sort: 'importance' | reverse %}
      {% for project in sorted_projects %}
        {% if project.category == 'Undergraduate research projects' or project.category == 'Undergraduate projects' %}
          {% include projects.liquid %}
        {% endif %}
      {% endfor %}
    </div>
  </details>
</div>
