---
layout: page
title: "AC-DC: Adaptive Communication for Scalable Dynamic Average Consensus"
description: "Adaptive peer-to-peer communication for multi-robot ergodic search under finite range, finite rate, and receiver-side interference."
importance: 120
category: Current research
kicker: MULTI-ROBOT SYSTEMS · 2026
year: "2026"
sort_date: "2026-09-21"
venue: "ICRA 2027 submission · arXiv preprint"
role: "Lead author"
arxiv: https://arxiv.org/abs/2609.24702
paper: https://arxiv.org/pdf/2609.24702
img: assets/img/ACDC/summary.webp
---

<div class="project-v2-body-bleed project-main-figure">
  <img src="/assets/img/ACDC/summary.webp" alt="AC-DC summary: search objective, communication layer, and results">
</div>
<div class="caption">AC-DC connects a dynamic search objective to local What / When / Who communication decisions and evaluates the resulting uncertainty–traffic tradeoff.</div>

## Why communication is part of the search problem

We study robot teams that gather information while they move. The mission priority specifies **where reducing uncertainty matters most**, while team visitation describes **where the robots actually search**. Coordinated ergodic search therefore depends on shared information about both where the team has searched and what the team has sensed.

The network is not an unlimited background service: communication has finite range and data rate, and nearby transmissions can interfere. We keep the receding-horizon ergodic controller fixed and instead adapt the communication policy that supplies its distributed information.

## Two moving team quantities

Each robot tracks two dynamic team averages:

<div class="project-highlight-grid">
<div><strong>Trajectory statistics</strong><p>Summarize where the team has searched and provide the team-visitation estimate used by the ergodic controller.</p></div>
<div><strong>Sensing information</strong><p>Aggregates regional sensing information used to update uncertainty and construct the current search target together with mission priority.</p></div>
<div><strong>Local execution</strong><p>Each robot controls its motion using local estimates of these two team averages rather than exact centralized team information.</p></div>
</div>

AC-DC initializes each consensus state from the corresponding local input. On first successful contact for a stream, a robot pair initializes neighbor memory by exchanging the complete stream. Later communication decisions use local input changes, stored neighbor blocks, and compact drift summaries; a summary helps score an exchange but does not itself update the consensus state.

## What AC-DC adapts

Before receiving a neighbor's current block, each robot decides:

<div class="project-highlight-grid">
  <div><strong>What</strong><p>Select the consensus-state block whose exchange is predicted to be most useful.</p></div>
  <div><strong>When</strong><p>Request communication when the exchange score is high enough, with an age-based refresh fallback when no score-qualified neighbor exists.</p></div>
  <div><strong>Who</strong><p>Among qualified neighbors, request the neighbor with the largest score for the selected block.</p></div>
</div>

The selected exchange still has to be schedulable and successfully delivered under the radio model. When both directions of an ordinary pairwise exchange succeed, the robots average the exchanged block and refresh their stored neighbor information.

## Dynamic-priority search

The mission priority changes at **100 s**, so the regions that matter most also change during the run.

<div class="project-v2-body-bleed project-main-figure">
  <img src="/assets/img/ACDC/dynamic-priority-setup.webp" alt="Dynamic-priority maps used in the AC-DC experiment">
</div>
<div class="caption">Dynamic-priority task: the mission priority switches at 100 s, changing which regions should receive search effort.</div>

We evaluate closed-loop search using the normalized priority-weighted remaining covariance-trace ratio (W(t)). Lower values indicate less mission-relevant uncertainty. Each trajectory is summarized by the time-averaged area under this curve (AUC), so lower AUC is better.

The main study covers **12 map-size / density settings**, with **20 paired trials per setting** and teams up to **80 robots**.

<div class="project-v2-body-bleed project-main-figure">
  <img src="/assets/img/ACDC/representative-results.webp" alt="Representative AC-DC remaining-uncertainty curves across four settings">
</div>
<div class="caption">Representative remaining-uncertainty curves. The dashed vertical line marks the priority switch at 100 s; shaded bands show sample standard deviation.</div>

## Results

Across all twelve settings, AC-DC had the lowest mean AUC and attempted modeled payload among the compared decentralized methods. The paired aggregate reductions were **29.5% versus ADMM-DAC** and **24.5% versus PP-ACDC**. Those baselines used **5.8×** and **11.5×** AC-DC's modeled traffic, respectively.

<div class="project-stat-grid"><div class="project-stat"><strong>29.5%</strong><span>lower paired AUC vs ADMM-DAC</span></div><div class="project-stat"><strong>24.5%</strong><span>lower paired AUC vs PP-ACDC</span></div><div class="project-stat"><strong>5.8×</strong><span>ADMM-DAC / AC-DC traffic</span></div><div class="project-stat"><strong>11.5×</strong><span>PP-ACDC / AC-DC traffic</span></div></div>

## Communication scaling

In the fixed **600 × 600 m** scaling study with selected-block communication, AC-DC used **19.3 MB** at **120 robots**, compared with **19.2 MB** for the ideal centralized reference.

This is a communication-scaling comparison, not a claim of centralized-level search performance. At the same team size, the corresponding AUCs were **0.129** for AC-DC and **0.041** for the ideal centralized reference, which operates outside the constrained robot mesh with exact team information.

## Takeaway

AC-DC treats communication as a decision inside the autonomy stack. Rather than asking every robot to exchange every state whenever possible, each robot adapts **What, When, and Who** using information it can maintain locally.
