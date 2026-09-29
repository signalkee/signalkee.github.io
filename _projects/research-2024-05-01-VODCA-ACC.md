---
layout: page
title: "Time Shift Governor-Guided MPC-CBF for Safe Adaptive Cruise Control"
description: "Reference adaptation, MPC, and relaxed Collision Cone CBFs for adaptive cruise control with rapidly changing lead-vehicle behavior and moving obstacles."
cover_label: SAFE ACC
importance: 98
category: Graduate research projects
kicker: CCTA 2025 · SAFE CONTROL
year: "2025"
venue: "IEEE CCTA 2025"
role: "Co-first author"
---

## The problem

Adaptive cruise control becomes difficult when the lead vehicle changes speed or direction abruptly while other obstacles are also moving. A nominal MPC-CBF controller can react too late, lose recursive feasibility, or become overly conservative when the safety constraints change quickly.

## Control architecture

<div class="ccta-architecture"><div class="ccta-flow">
<div><strong>Lead vehicle</strong><p>Predict the lead trajectory and observe rapidly changing behavior.</p></div>
<div><strong>Time Shift Governor</strong><p>Shift the lead-vehicle reference backward in time through the scalar parameter τ<sub>shift</sub>.</p></div>
<div><strong>MPC + CBF</strong><p>Track the adapted reference while enforcing following-distance, input, and obstacle constraints.</p></div>
<div><strong>Relaxed C3BF</strong><p>Use a penalized slack variable to improve feasibility around moving obstacles.</p></div>
</div></div>

The key idea is to **adapt the reference rather than redesign the nominal controller**. The Time Shift Governor generates a virtual lead-vehicle target from a time-shifted trajectory. This gives the ego vehicle additional room to respond when the lead vehicle suddenly reverses or deviates from its expected path.

For dynamic obstacle avoidance, we relax the Collision Cone Control Barrier Function with a non-negative slack variable. The MPC penalizes this slack, balancing safety-constraint enforcement with feasibility in highly dynamic interactions.

## Simulation study

We evaluated the controller on a circular road with a fluctuating-speed lead vehicle and multiple moving obstacles. The lead vehicle includes sudden reversals and off-track deviations for obstacle avoidance, while moving obstacles emulate pedestrians, cyclists, or other vehicles.

<div class="project-highlight-grid">
<div><strong>Baseline MPC-CBF</strong><p>Can avoid many moving obstacles, but may react too late to sudden lead-vehicle reversals or crossing obstacles.</p></div>
<div><strong>TSG-guided MPC-CBF</strong><p>Adjusts τ<sub>shift</sub> online so the ego vehicle responds to the changing interaction before the nominal reference becomes unsafe.</p></div>
<div><strong>Relaxed C3BF</strong><p>Softens the collision-cone constraint when strict enforcement would otherwise make the optimization infeasible.</p></div>
</div>

## Results

In **50 randomized simulations**, the baseline MPC-CBF failed in **9 trials**: six collisions with the lead vehicle and three collisions with dynamic obstacles. The TSG-guided MPC-CBF completed **all 50 trials without collision**.

<div class="project-stat-grid"><div class="project-stat"><strong>50</strong><span>randomized trials</span></div><div class="project-stat"><strong>9</strong><span>baseline failures</span></div><div class="project-stat"><strong>0</strong><span>TSG-guided failures</span></div><div class="project-stat"><strong>100%</strong><span>TSG-guided success rate</span></div></div>

## Why it matters

The study shows how a lightweight reference-governor layer can complement MPC-CBF control when the environment changes faster than a fixed reference can safely accommodate. The TSG adds only a scalar time-shift decision while helping the controller preserve safety and feasibility through abrupt lead-vehicle behavior and moving obstacles.

## My contribution

I co-developed the formulation and implementation, and contributed to the simulation study and paper as a co-first author.
