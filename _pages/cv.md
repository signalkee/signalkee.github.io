---
layout: page
permalink: /CV/
title: Curriculum Vitae
eyebrow: CV
description: Education, research, publications, and professional experience.
nav: true
nav_order: 4
cv_pdf: Robin_Inho_Kee_CV_slim.pdf
---

<div class="cv-v2">
  <div class="cv-v2-meta">
    <span>Robotics Ph.D. · University of Michigan</span>
    <span>Draper Scholar</span>
    <span>Multi-Robot Systems</span>
  </div>
  <div class="cv-v2-toolbar">
    <p>The PDF below is the canonical version of my CV.</p>
    <a class="v2-btn v2-btn-primary" href="{{ page.cv_pdf | prepend: '/assets/pdf/' | relative_url }}" target="_blank" rel="noopener">Open CV PDF ↗</a>
  </div>
  <div class="cv-v2-frame">
    <iframe src="{{ page.cv_pdf | prepend: '/assets/pdf/' | relative_url }}" title="Robin Inho Kee CV"></iframe>
  </div>
</div>
