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
cover_label: AC-DC
---

<div class="project-v2-body-bleed">
  <div class="acdc-summary-figure">
    <section class="acdc-summary-panel">
      <h3>1 · Where should robots search?</h3>
      <p>Search target: where information matters</p>
      <div class="acdc-map"><span class="acdc-peak" style="left:29%;top:62%;--s:92px"></span><span class="acdc-peak" style="left:70%;top:30%;--s:70px"></span><span class="acdc-peak" style="left:75%;top:76%;--s:48px"></span></div>
      <div class="acdc-arrow">↓</div>
      <p style="color:#249966">Team visitation: where robots actually search</p>
      <div class="acdc-map"><span class="acdc-visit" style="left:31%;top:64%;--s:86px;--c:#0877bd"></span><span class="acdc-visit" style="left:68%;top:31%;--s:70px;--c:#0b345b"></span><span class="acdc-visit" style="left:75%;top:76%;--s:48px;--c:#249966"></span></div>
      <div class="acdc-pill-note">More important regions should receive more team search effort.</div>
    </section>
    <section class="acdc-summary-panel">
      <h3>2 · AC-DC communication layer</h3>
      <p>Robots choose <em>what, when, and with whom</em></p>
      <div class="acdc-layer-top"><div class="acdc-layer-box blue">Where I<br>have searched</div><div class="acdc-layer-box green">What I<br>have sensed</div></div>
      <div class="acdc-pill-note">Last information from nearby robots</div>
      <div class="acdc-layer-core">AC-DC</div>
      <div class="acdc-question-row"><strong style="background:#00a5a5">WHAT</strong><span>Which information is most useful?</span></div>
      <div class="acdc-question-row"><strong style="background:#ed7d0b">WHEN</strong><span>Is it worth communicating now?</span></div>
      <div class="acdc-question-row"><strong style="background:#0877bd">WHO</strong><span>Which neighbor is best to contact?</span></div>
      <div class="acdc-pill-note" style="margin-top:14px">Output: better shared estimates of team coverage and sensing information</div>
    </section>
    <section class="acdc-summary-panel">
      <h3>3 · What improves?</h3>
      <p>Lower uncertainty with less modeled traffic</p>
      <div class="acdc-map" style="height:155px"><svg viewBox="0 0 320 150" width="100%" height="100%"><line x1="26" y1="12" x2="26" y2="132" stroke="#98a2b3"/><line x1="26" y1="132" x2="305" y2="132" stroke="#98a2b3"/><line x1="138" y1="12" x2="138" y2="132" stroke="#98a2b3" stroke-dasharray="5 4"/><path d="M26 18 C58 55 72 85 110 106 S175 130 305 130" fill="none" stroke="#0877bd" stroke-width="5"/><path d="M26 18 C55 48 72 65 110 78 S175 112 305 123" fill="none" stroke="#e66a00" stroke-width="4" stroke-dasharray="12 7"/><path d="M26 18 C56 50 76 67 110 72 S185 83 305 91" fill="none" stroke="#07966b" stroke-width="4" stroke-dasharray="14 5 3 5"/><path d="M26 25 C44 70 60 105 90 121 S150 130 305 131" fill="none" stroke="#222" stroke-width="4" stroke-dasharray="3 5"/></svg></div>
      <div class="acdc-metric-grid"><div class="acdc-metric-card"><strong>29.5%</strong><span>lower paired AUC vs ADMM-DAC</span></div><div class="acdc-metric-card"><strong>24.5%</strong><span>lower paired AUC vs PP-ACDC</span></div><div class="acdc-metric-card"><strong>5.8×</strong><span>ADMM-DAC / AC-DC traffic</span></div><div class="acdc-metric-card"><strong>11.5×</strong><span>PP-ACDC / AC-DC traffic</span></div></div>
      <div class="acdc-pill-note" style="margin-top:14px;color:#0877bd">120 robots: 19.3 MB vs 19.2 MB<br><small>AC-DC vs ideal centralized reference</small></div>
    </section>
  </div>
</div>

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
