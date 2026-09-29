---
layout: page
title: "AC-DC: Adaptive Communication for Scalable Multi-Robot Coordination"
description: "Adaptive communication for dynamic average consensus in multi-robot ergodic search under limited range, rate, and interference."
importance: 120
category: Current research
kicker: MULTI-ROBOT SYSTEMS · 2026
year: "2026"
venue: "ICRA 2027 submission · arXiv preprint"
role: "Lead author"
arxiv: https://arxiv.org/abs/2609.24702
paper: https://arxiv.org/pdf/2609.24702
---

## The problem

Large robot teams cannot continuously broadcast every piece of coordination state. Communication range is finite, links compete for airtime, and the amount of information that could be exchanged grows with the team and the task.

**AC-DC asks a direct question:** if a robot cannot communicate everything, how should it decide **Who** to communicate with, **When** to communicate, and **What** part of its distributed state to send?

## Approach

We develop an adaptive peer-to-peer communication policy for dynamic average consensus and apply it to dynamic-priority multi-robot ergodic search. Each robot maintains distributed coordination information while AC-DC selectively schedules communication across neighbors and state blocks.

The search problem requires robots to coordinate two changing information streams:

- **trajectory / visitation information**, which describes where the team has searched, and
- **sensing information**, which changes regional search priorities as observations arrive.

Rather than treating communication as an always-available service, AC-DC makes communication decisions part of the distributed coordination process.

<div class="project-stat-grid">
  <div class="project-stat"><strong>12</strong><span>simulated settings</span></div>
  <div class="project-stat"><strong>80</strong><span>robots in the main study</span></div>
  <div class="project-stat"><strong>20</strong><span>paired trials per setting</span></div>
  <div class="project-stat"><strong>120</strong><span>robots in fixed-area scaling</span></div>
</div>

## Results

Across the evaluated decentralized methods, AC-DC achieved the lowest mean normalized covariance-trace AUC and the lowest attempted modeled communication payload. Relative to ADMM-DAC and PP-ACDC, it reduced mean paired AUC by **29.5%** and **24.5%**, respectively, while those baselines used **5.8×** and **11.5×** more modeled payload.

In a fixed-area scaling experiment with **120 robots**, AC-DC used **19.3 MB** of modeled payload, close to the **19.2 MB** centralized reference, while retaining decentralized peer-to-peer operation.

## Why this matters

The broader goal is not simply to make consensus cheaper. It is to make communication **adaptive to the task and the network**, so that larger robot teams can coordinate useful information without assuming unlimited connectivity or bandwidth.
