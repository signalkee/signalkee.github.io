---
layout: page
title: Spacecraft Proximity Operations in Elliptic Orbits
description: Vehicle Optimization, Dynamics, Control and Autonomy Lab (01.2024-ing), University of Michigan, MI, USA
img: assets/img/VODCA_SciTech2025/Sci_title.gif
importance: 99
category: Graduate research projects
giscus_comments: False
---

#### **<a href='https://vodca.engin.umich.edu/'>Vehicle Optimization, Dynamics, Control and Autonomy Lab</a>**
#### University of Michigan, MI, USA

**PI**: Professor Anouck Girard and Professor Ilya Kolmanovsky

#### **Achievement**: 

(1) Taehyeun Kim*, **Robin Inho Kee** * (*: Equal contribution), Ilya Kolmanovsky, Anouck Girard, “Constrained Control for Autonomous Spacecraft Rendezvous: Learning-Accelerated Time Shift Governor”, AIAA SCITECH 2025 Forum, To be presented at SciTech 2025

#### **Project**: **Constrained Control for Autonomous Spacecraft Rendezvous: Learning-Accelerated Time Shift Governor**

#### **What I did**:

(1) Developed an constraint-guided Learning-basted Time Shift Governor (L-TSG) for spacecraft rendezvous and docking in the Low Earth orbit and the elliptical orbit. 

(2) Implemented a phase-adaptive sliding window and a constraint-specific loss function to optimize handling of dynamic input sizes, ensuring precise time shift predictions and adherence to stringent space mission constraints.



**Abstract**: 

Our work develops a Time Shift Governor (TSG)-based control scheme to enforce constraints during rendezvous and docking (RD) missions in the setting of the Two-Body problem. As an add-on scheme to the nominal closed-loop system, the TSG generates a time-shifted Chief spacecraft trajectory as a target reference for the Deputy spacecraft. This modification of the commanded reference trajectory ensures that constraints are enforced while the time shift is reduced to zero to effect the rendezvous. Our approach to TSG implementation integrates an LSTM neural network which approximates the time shift parameter as a function of a sequence of past Deputy and Chief spacecraft states. This LSTM neural network is trained offline from simulation data. We report simulation results for RD missions in the Low Earth Orbit (LEO) and on the Molniya orbit to demonstrate the effectiveness of the proposed control scheme. The proposed scheme reduces the time to compute the time shift parameter in most of the scenarios and successfully completes rendezvous missions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VODCA_SciTech2025/Diagram_closed_loop.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Diagram of the control system architecture incorporating learning-based predictive model with TSG and DTLQ controller.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VODCA_SciTech2025/Sci_title.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Trajectories displayed in the local VNB frame: the deputy spacecraft’s path (blue line) closely follows the virtual target’s trajectory (magenta asterisk).
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VODCA_SciTech2025/Time_his.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Time histories of relative (a) position; (b) velocity to the Chief spacecraft; (c) position; (d) velocity to the virtual target.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VODCA_SciTech2025/Time_const.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Time histories of (a) LoS cone angle constraint ℎ1; (b) thrust constraint ℎ2; (c) approach velocity constraint ℎ3.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/VODCA_SciTech2025/Time_TS.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Time history of time shift throughout the mission.
</div> 






