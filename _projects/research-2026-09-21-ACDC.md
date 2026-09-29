---
layout: page
title: "AC-DC: Adaptive Communication for Scalable Dynamic Average Consensus"
description: "Adaptive peer-to-peer communication for multi-robot ergodic search under finite range, finite rate, and receiver-side interference."
importance: 120
category: Current research
kicker: MULTI-ROBOT SYSTEMS · 2026
year: "2026"
venue: "ICRA 2027 submission · arXiv preprint"
role: "Lead author"
arxiv: https://arxiv.org/abs/2609.24702
paper: https://arxiv.org/pdf/2609.24702
img: assets/img/ACDC/summary.webp
---

<div class="project-v2-body-bleed project-main-figure">
  <img src="{{ 'assets/img/ACDC/summary.webp' | relative_url }}" alt="AC-DC summary: search objective, communication layer, and results">
</div>
<div class="caption">AC-DC overview: dynamic-priority search, local What/When/Who communication decisions, and the resulting search-quality / traffic tradeoff.</div>

## Why communication is part of the search problem

We study robot teams that gather information while they move. The mission priority specifies where reducing uncertainty matters most, while team visitation describes where the robots actually search. Coordinated ergodic search therefore needs shared information about both **where the team has searched** and **what the team has sensed**.

The network is not an unlimited background service: communication has finite range and data rate, and nearby transmissions can interfere. We keep the receding-horizon ergodic controller fixed and instead adapt the communication policy that supplies its distributed information.

## What AC-DC adapts

Each robot tracks two moving team averages: trajectory statistics for team visitation and regional sensing information used to update the search target. AC-DC uses local inputs, successfully received neighbor information, and stored neighbor blocks to decide:

<div class="project-highlight-grid">
  <div><strong>What</strong><p>Select the state block whose exchange is predicted to be most useful.</p></div>
  <div><strong>When</strong><p>Request communication when the exchange score is high enough, with an age-based refresh fallback.</p></div>
  <div><strong>Who</strong><p>Among qualified neighbors, request the neighbor with the largest score for the selected block.</p></div>
</div>

The exchange decision is made **before receiving the neighbor's current block**. Robots use stored neighbor blocks and compact drift summaries as a scoring proxy. When both directions of an ordinary exchange succeed, the pair averages the exchanged block and refreshes its neighbor memory.

## Dynamic-priority search experiment

The mission priority changes at **100 s**, so the regions that matter most also change during the run. We evaluate closed-loop search using the normalized priority-weighted remaining covariance-trace ratio and summarize each 250 s trajectory by its time-averaged AUC. Lower AUC means less remaining mission-relevant uncertainty.

<div class="project-stat-grid"><div class="project-stat"><strong>12</strong><span>map-size / density settings</span></div><div class="project-stat"><strong>20</strong><span>paired trials per setting</span></div><div class="project-stat"><strong>80</strong><span>robots in the main study</span></div><div class="project-stat"><strong>120</strong><span>robots in fixed-area scaling</span></div></div>

## Results

Across all twelve settings, AC-DC had the lowest mean AUC and attempted modeled payload among the compared decentralized methods. The paired aggregate reductions were **29.5% versus ADMM-DAC** and **24.5% versus PP-ACDC**. Those baselines used **5.8×** and **11.5×** AC-DC's modeled traffic, respectively.

In the fixed-area scaling study, selected-block AC-DC used **19.3 MB** at 120 robots versus **19.2 MB** for the ideal centralized reference. This is a communication-scaling comparison, not a claim of centralized-level search performance: the corresponding AUCs were 0.129 and 0.041.

## Takeaway

AC-DC treats communication as a decision inside the autonomy stack. Rather than asking every robot to exchange every state whenever possible, each robot adapts **What, When, and Who** using information it can maintain locally.
