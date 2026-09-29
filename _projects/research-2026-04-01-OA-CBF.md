---
layout: page
title: "Online Adaptive Control Barrier Functions"
description: "Runtime CBF parameter adaptation under epistemic and aleatoric uncertainty, with local finite-horizon validation and task-progress-aware selection."
img: assets/img/OACBF/overview.webp
importance: 99
category: Graduate research projects
kicker: PREPRINT · SAFE LEARNING & CONTROL
year: "2026"
venue: "Preprint"
role: "Co-author"
arxiv: https://arxiv.org/abs/2504.03038
paper: https://arxiv.org/pdf/2504.03038
project_url: https://www.taekyung.me/oa-cbf
---

## Motivation

Control Barrier Functions provide a tractable safety layer, but their practical behavior depends strongly on the class-K parameters. Under input constraints, conservative parameters can preserve feasibility while slowing the robot down; aggressive parameters can improve nominal progress but become infeasible or unsafe near obstacles.

OA-CBF asks how those parameters can be **adapted at runtime without treating one learned prediction as automatically trustworthy**.

## OA-CBF

<div class="project-v2-body-bleed project-main-figure">
  <img src="/assets/img/OACBF/overview.webp" alt="OA-CBF method overview">
</div>

<div class="oa-cbf-visual"><div class="oa-cbf-flow">
<div><strong>1 · Query candidates</strong><p>Sample candidate CBF parameters for the current robot state and environment.</p></div>
<div><strong>2 · Predict</strong><p>A probabilistic ensemble evaluates each queried parameter using a graph-attention representation of the robot, goal, and obstacles.</p></div>
<div><strong>3 · Validate</strong><p>Reject unreliable candidates using epistemic and aleatoric uncertainty and local finite-horizon validity.</p></div>
<div><strong>4 · Adapt</strong><p>Select the verified candidate with the best predicted task progress and update the CBF-based controller.</p></div>
</div></div>

A key change from our ICRA 2025 work is the formulation around **locally validated CBF parameters**. Rather than only screening predicted performance and risk, OA-CBF evaluates candidate parameters over a finite prediction horizon and adapts the controller through repeatedly validated updates.

## Why query candidates instead of predicting one parameter?

The learned model does not directly output a single “best” CBF parameter. It evaluates **queried candidates**. This makes uncertainty part of the decision process: candidates can be rejected when the model is not sufficiently confident or when the predicted safety behavior is not locally valid.

<div class="project-highlight-grid">
<div><strong>Epistemic uncertainty</strong><p>Captures uncertainty associated with the learned model and unfamiliar inputs.</p></div>
<div><strong>Aleatoric uncertainty</strong><p>Represents variability in the predicted outcome and is considered during candidate verification.</p></div>
<div><strong>Task progress</strong><p>Among validated candidates, prefer the parameter predicted to make the best mission progress.</p></div>
</div>

## VTOL quadplane case study

We apply OA-CBF to a **VTOL quadplane transition and landing scenario**, including the first CBF application reported by the project to this VTOL quadplane control task. Fixed low CBF parameters can produce a large altitude detour, while fixed high parameters can become infeasible and eventually collide.

OA-CBF adapts the parameters with the aircraft state. At high speed it keeps lower parameters, encouraging the elevator to pitch up and generate additional drag; as the aircraft slows, the parameters increase to improve performance.

## Beyond distance-based CBFs

The project also evaluates OA-CBF with a **Dynamic Parabolic CBF (DPCBF)** for a kinematic bicycle in dynamic-obstacle environments. This benchmark uses a relative-velocity-based safety condition, showing that the adaptation framework is not restricted to distance-based barriers.

## Relationship to our ICRA 2025 work

The ICRA 2025 Online Adaptive ICCBF project established uncertainty-aware online parameter adaptation under input constraints using a probabilistic ensemble plus JRD and distributionally robust CVaR verification. OA-CBF extends this research direction with a more general candidate-querying framework, local finite-horizon validation, graph-attention environment encoding, and additional robotic systems.

## Status

This project is currently presented as a **2026 preprint**. The project page intentionally does not list an archival journal venue until that publication status is public.
