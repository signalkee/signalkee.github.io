---
layout: page
title: Research
eyebrow: RESEARCH
permalink: /Researches & Projects/
description: Multi-robot autonomy across selective communication, mission-aware reasoning, predictive decision-making, and real-robot deployment.
nav: true
nav_order: 2
---

<div class="research-intro-v2">
  <div class="research-principle-v2">
    <p class="v2-card-meta">CURRENT DIRECTION</p>
    <h2>How should robot teams understand what matters, share it selectively, and act using predicted consequences?</h2>
    <p>
      My Ph.D. roadmap starts from selective communication, adds guarantees and mission-conditioned reasoning, then moves toward real-robot deployment
      and world-model prediction. Communication remains the foundation, but the goal is a broader practical autonomy stack.
    </p>
  </div>
  <div class="research-tags-v2" aria-label="Research areas">
    <span>Multi-Robot Autonomy</span><span>Adaptive Communication</span><span>Reasoning AI</span><span>World Models</span><span>Safe Autonomy</span><span>Real-Robot Deployment</span>
  </div>
</div>

<section class="research-roadmap-v2">
  <div class="research-section-v2-head">
    <p class="v2-eyebrow">CURRENT ROADMAP</p>
    <h2>Communication foundation → reasoning → prediction → real robots</h2>
  </div>

  <div class="v2-roadmap research-roadmap-strip">
    <div class="v2-roadmap-step foundation">
      <p class="v2-card-meta">FOUNDATION</p>
      <strong>AC-DC</strong>
      <span>Move useful information selectively through the robot team.</span>
    </div>
    <div class="v2-roadmap-arrow" aria-hidden="true">→</div>
    <div class="v2-roadmap-step current">
      <p class="v2-card-meta">NOW</p>
      <strong>Theory + VLM</strong>
      <span>Finish tracking guarantees while developing grounded mission updates.</span>
    </div>
    <div class="v2-roadmap-arrow" aria-hidden="true">→</div>
    <div class="v2-roadmap-step hardware">
      <p class="v2-card-meta">SUMMER 2027</p>
      <strong>Draper hardware</strong>
      <span>Deploy the VLM in the mission workflow on ground robots.</span>
    </div>
    <div class="v2-roadmap-arrow" aria-hidden="true">→</div>
    <div class="v2-roadmap-step next">
      <p class="v2-card-meta">NEXT PILLAR</p>
      <strong>World model</strong>
      <span>Predict future team outcomes, then compare actions.</span>
    </div>
  </div>
</section>

<section class="research-program-v2">
  <div class="research-section-v2-head">
    <p class="v2-eyebrow">ACTIVE PROGRAM</p>
    <h2>What I am working on now—and what comes next</h2>
  </div>

  <div class="research-program-grid">
    <article>
      <p class="v2-card-meta">NOW · THEORY</p>
      <h3>Guarantees for selective communication</h3>
      <p>
        Prove agreement and dynamic tracking under explicit successful-communication assumptions, completing the guarantee story behind AC-DC.
      </p>
    </article>
    <article>
      <p class="v2-card-meta">NOW · REASONING AI</p>
      <h3>Mission-conditioned VLM reasoning</h3>
      <p>
        Map mission + observation + context to grounded evidence and a proposed mission update, while keeping the existing mission-manager architecture
        and guarding updates with rules or operator approval.
      </p>
    </article>
    <article class="next">
      <p class="v2-card-meta">NEXT · WORLD MODEL</p>
      <h3>Predict before acting</h3>
      <p>
        Given the current team state and a candidate action, predict future contact, communication, exposure, agent-loss risk, and task progress before
        choosing what the team should do.
      </p>
    </article>
  </div>
</section>

<div class="projects projects-v2">
  <section class="research-section-v2">
    <div class="research-section-v2-head">
      <p class="v2-eyebrow">FOUNDATION / SUBMITTED WORK</p>
      <h2>Selective communication for scalable multi-robot coordination</h2>
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
