---
layout: page
title: "Time Shift Governor-Guided MPC-CBF for Safe Adaptive Cruise Control"
description: "Reference adaptation, MPC, and relaxed Collision Cone CBFs for adaptive cruise control with rapidly changing lead-vehicle behavior and moving obstacles."
img: assets/img/ccta-2025/control-architecture.webp
importance: 98
category: Graduate research projects
kicker: CCTA 2025 · SAFE CONTROL
year: "2025"
sort_date: "2025-08-01"
venue: "IEEE CCTA 2025"
role: "Co-first author"
paper: https://ieeexplore.ieee.org/abstract/document/11151321/
---

## The problem

Adaptive cruise control becomes difficult when the lead vehicle changes speed or direction abruptly while other obstacles are also moving. We study safe curved-road tracking with a potentially non-cooperative lead vehicle and dynamic obstacles, while jointly optimizing control inputs and a time-shifted reference.

## Control architecture

<div class="project-v2-body-bleed project-main-figure">
  <img src="/assets/img/ccta-2025/control-architecture.webp" alt="TSG-guided MPC-CBF control architecture">
</div>
<div class="caption">TSG-guided MPC-CBF architecture. The Time Shift Governor generates a virtual lead-vehicle target, while MPC enforces ACC and relaxed collision-cone safety constraints.</div>

The **Time Shift Governor (TSG)** adapts the reference rather than replacing the nominal controller. It shifts the observed lead-vehicle trajectory backward in time, projects that shifted trajectory onto the road reference, and exposes the time shift as an additional optimization variable. The resulting virtual target gives the ego vehicle room to respond before a rapidly changing reference makes the short-horizon MPC-CBF problem infeasible.

For safety, the controller combines a CBF for adaptive cruise control with a **relaxed Collision Cone CBF (C3BF)** for moving obstacles. The relaxation uses a non-negative slack variable that is penalized in the MPC cost, improving feasibility when strict collision-cone enforcement would otherwise become too restrictive.

<div class="project-highlight-grid">
<div><strong>Reference adaptation</strong><p>TSG changes the virtual lead-vehicle target online without extending the prediction horizon.</p></div>
<div><strong>Safe following</strong><p>An ACC CBF constrains the ego vehicle relative to the virtual target, with a separate hard geometric separation from the actual lead vehicle.</p></div>
<div><strong>Dynamic obstacles</strong><p>A relaxed C3BF uses relative motion while allowing tightly penalized slack when strict enforcement would become infeasible.</p></div>
</div>

## Simulation study

We evaluate the controller on a circular road with a fluctuating-speed lead vehicle and **2–5 moving obstacles**. The lead vehicle exhibits sinusoidal speed changes, sudden reversals, and off-track deviations, while the obstacles move along randomized radial trajectories.

The representative cases show two failure modes of the baseline. In one case, the baseline reacts too late to a lead-vehicle reversal and produces a rear-end collision. In another, it reacts too late to a crossing obstacle. The TSG-guided controller adjusts the virtual target through the time-shift variable and maintains safety in both cases.

## Results

<div class="ccta-paper-table-wrap" role="group" aria-label="Performance comparison over 50 randomized trials">
  <table class="ccta-paper-table">
    <thead><tr><th>Controller</th><th>Success rate</th><th>Collision rate</th></tr></thead>
    <tbody>
      <tr><td>Baseline MPC-CBF</td><td>82%</td><td>18%</td></tr>
      <tr><td><strong>TSG-guided MPC-CBF</strong></td><td><strong>100%</strong></td><td>0%</td></tr>
    </tbody>
  </table>
</div>
<div class="caption">Performance comparison over 50 randomized trials reported in the paper.</div>

Across **50 randomized simulations**, the baseline MPC-CBF failed in **9 trials**: six collisions with the lead vehicle and three collisions with dynamic obstacles. The TSG-guided MPC-CBF completed **all 50 trials without collision**.

<div class="project-stat-grid"><div class="project-stat"><strong>50</strong><span>randomized trials</span></div><div class="project-stat"><strong>9</strong><span>baseline failures</span></div><div class="project-stat"><strong>0</strong><span>TSG-guided failures</span></div><div class="project-stat"><strong>100%</strong><span>TSG-guided success rate</span></div></div>

## Takeaway

The study shows how a lightweight reference-governor layer can complement MPC-CBF control when the environment changes faster than a fixed reference can safely accommodate. TSG adds a scalar time-shift decision, while the relaxed C3BF helps preserve feasibility around moving obstacles.

## My contribution

I co-developed the formulation and implementation, and contributed to the simulation study and paper as a co-first author.
