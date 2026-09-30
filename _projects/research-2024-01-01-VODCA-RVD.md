---
layout: page
title: "Learning-Accelerated Time Shift Governor for Spacecraft Rendezvous"
description: "Constraint-aware spacecraft rendezvous and docking using a learning-accelerated Time Shift Governor."
img: assets/img/scitech-2025/Diagram_closed_loop.png
importance: 99
category: Graduate research projects
kicker: AIAA SCITECH 2025 · SAFE CONTROL
year: "2025"
sort_date: "2025-01-01"
venue: "AIAA SCITECH 2025 Forum"
role: "Co-first author"
paper: /assets/pdf/scitech-2025-ltsg.pdf
---

## Problem

Spacecraft rendezvous and docking must satisfy line-of-sight, thrust, and approach constraints while still converging efficiently to the target. A Time Shift Governor (TSG) can enforce these constraints by modifying the commanded reference trajectory, but repeatedly computing the appropriate time shift can be expensive.

## Approach

We developed a **learning-accelerated Time Shift Governor** for rendezvous and docking in both low-Earth and elliptical orbits. An LSTM predicts the time-shift parameter from recent Chief and Deputy spacecraft states, while the TSG remains responsible for constraint enforcement.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/scitech-2025/Diagram_closed_loop.png" title="Closed-loop architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Learning-assisted TSG architecture used to modify the reference while respecting mission constraints.</div>

<div class="project-motion-wrap">
  <video class="project-motion" autoplay muted loop playsinline poster="/assets/media/scitech-2025/overview.webp">
    <source src="/assets/media/scitech-2025/overview.mp4" type="video/mp4">
  </video>
  <p class="caption">Learning-assisted Time Shift Governor for constrained spacecraft rendezvous.</p>
</div>

## Results

The learned predictor reduced the time required to obtain the time-shift parameter in most evaluated scenarios while the closed-loop system completed rendezvous missions under the imposed constraints.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/scitech-2025/Time_const.png" title="Constraint histories" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/scitech-2025/Time_TS.png" title="Time shift history" class="img-fluid rounded z-depth-1" %}</div>
</div>

## My contribution

I co-developed the learning-based TSG formulation, including a phase-adaptive sliding window and a constraint-specific training objective, and contributed to the simulation study for rendezvous missions in LEO and elliptical orbit.
