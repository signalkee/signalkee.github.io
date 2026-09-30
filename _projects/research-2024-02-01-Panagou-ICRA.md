---
layout: page
title: "Online Adaptive Input-Constrained Control Barrier Functions"
description: "Uncertainty-aware online adaptation of ICCBF parameters for safe, input-constrained robot navigation."
img: assets/img/icra-2025/ICRA_overview.webp
importance: 97
category: Graduate research projects
kicker: ICRA 2025 · SAFE LEARNING & CONTROL
year: "2025"
sort_date: "2025-05-01"
venue: "IEEE ICRA 2025"
role: "Co-author"
arxiv: https://arxiv.org/abs/2409.14616
paper: /assets/pdf/icra-2025-iccbf.pdf
code: https://github.com/tkkim-robot/online_adaptive_cbf
project_url: https://www.taekyung.me/online-adaptive-cbf
---

## Motivation

Control Barrier Functions can enforce safety, but their class-K parameters strongly affect controller behavior under input constraints. A parameter that is too conservative can produce deadlock or slow progress; a parameter that is too aggressive can make the safety filter infeasible and lead to a collision.

A single fixed parameter choice therefore does not work equally well across all robot states and nearby environments.

## Online Adaptive ICCBF

We developed an online adaptation framework that evaluates candidate ICCBF parameters from the current robot state and local environment. Instead of committing to one parameter setting offline, the controller repeatedly asks which candidates are both reliable and useful **now**.

<div class="row"><div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/icra-2025/ICRA_overview.webp" title="Online Adaptive ICCBF overview" class="img-fluid rounded z-depth-1" %}</div></div>
<div class="caption">Predict candidate performance and risk, verify uncertainty, then adapt the safety-controller parameters online.</div>

<div class="project-motion-wrap">
  <video class="project-motion" autoplay muted loop playsinline poster="/assets/media/icra-2025/overview.webp">
    <source src="/assets/media/icra-2025/overview.mp4" type="video/mp4">
  </video>
  <p class="caption">Online parameter adaptation with uncertainty-aware prediction and verification.</p>
</div>

The method uses a **Probabilistic Ensemble Neural Network (PENN)** to predict performance and risk metrics for candidate parameters while representing both epistemic and aleatoric uncertainty.

## Two-step uncertainty verification

<div class="project-highlight-grid">
<div><strong>1 · Epistemic uncertainty</strong><p>Jensen-Rényi Divergence identifies candidate predictions with high disagreement across the probabilistic ensemble.</p></div>
<div><strong>2 · Aleatoric risk</strong><p>Distributionally robust CVaR screens the remaining candidates against predicted risk.</p></div>
<div><strong>3 · Online refinement</strong><p>The controller selects a verified parameter using the current state and nearby environment, then updates the ICCBF-based controller.</p></div>
</div>

<div class="row">
<div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/icra-2025/ICRA_prediction.webp" title="Predicted risk" class="img-fluid rounded z-depth-1" %}</div>
<div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/icra-2025/ICRA_cvar.webp" title="DR-CVaR verification" class="img-fluid rounded z-depth-1" %}</div>
</div>

## Experiments

<div class="project-motion-grid">
<div class="project-motion-wrap">
  <video class="project-motion" autoplay muted loop playsinline poster="/assets/media/icra-2025/realtime-1.webp">
    <source src="/assets/media/icra-2025/realtime-1.mp4" type="video/mp4">
  </video>
  <p class="caption">Online adaptation in a representative navigation trial.</p>
</div>
<div class="project-motion-wrap">
  <video class="project-motion" autoplay muted loop playsinline poster="/assets/media/icra-2025/realtime-2.webp">
    <source src="/assets/media/icra-2025/realtime-2.mp4" type="video/mp4">
  </video>
  <p class="caption">A second real-time adaptation example.</p>
</div>
</div>

We evaluated the method in robot-navigation scenarios against fixed-parameter and existing adaptive approaches. The experiments test the tradeoff the method is designed around: maintaining feasibility and safety near obstacles without forcing the robot to remain unnecessarily conservative when more aggressive parameters are locally appropriate.

## Takeaway

The project turns CBF parameter selection from a one-time tuning problem into an **online, uncertainty-aware decision**. The controller adapts its safety parameters to the current state and environment while restricting updates to candidates that pass the verification pipeline.

## My contribution

I developed and implemented the probabilistic ensemble model for real-time ICCBF adaptation, integrated the uncertainty-verification pipeline, and contributed to the simulation and robot-navigation experiments.
