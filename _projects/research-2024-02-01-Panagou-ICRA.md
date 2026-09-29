---
layout: page
title: "Online Adaptive Input-Constrained Control Barrier Functions"
description: "Uncertainty-aware online adaptation of ICCBF parameters for safe, input-constrained robot navigation."
img: assets/img/DASC_ICRA2025/ICRA_overview.webp
importance: 97
category: Graduate research projects
kicker: ICRA 2025 · SAFE LEARNING & CONTROL
year: "2025"
venue: "IEEE ICRA 2025"
role: "Co-author"
arxiv: https://arxiv.org/abs/2409.14616
paper: /assets/pdf/ICRA2025_ICCBF.pdf
code: https://github.com/tkkim-robot/online_adaptive_cbf
project_url: https://www.taekyung.me/online-adaptive-cbf
---

## Problem

Control Barrier Functions can provide safety guarantees, but their performance can be highly sensitive to fixed class-​K parameters. Under input constraints, poor parameter choices may produce overly conservative behavior, deadlock, or controller infeasibility.

## Approach

We developed an **Online Adaptive ICCBF** method that selects parameters online from the robot state and local environment. A Probabilistic Ensemble Neural Network predicts performance and risk, while a two-stage verification pipeline filters candidate parameters using epistemic uncertainty and distributionally robust risk.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/DASC_ICRA2025/ICRA_overview.webp" title="Online Adaptive ICCBF overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Overview of the online adaptation pipeline integrated with the MPC-CBF controller.</div>

## Uncertainty-aware verification

We use Jensen-Rényi Divergence to identify predictions with high ensemble disagreement and distributionally robust CVaR to screen candidate ICCBF parameters against risk.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/DASC_ICRA2025/ICRA_prediction.webp" title="Predicted risk" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/DASC_ICRA2025/ICRA_cvar.webp" title="DR-CVaR verification" class="img-fluid rounded z-depth-1" %}</div>
</div>

## Results

The method adapts the safety-controller parameters online rather than committing to one conservative setting ahead of time, improving navigation performance while preserving the ICCBF safety conditions used in the controller.

## My contribution

I developed and implemented the probabilistic ensemble model for real-time ICCBF adaptation, integrated the uncertainty-verification pipeline, and contributed to the simulation and robot-navigation experiments.
