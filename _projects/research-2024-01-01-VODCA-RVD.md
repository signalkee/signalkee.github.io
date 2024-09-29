---
layout: page
title: Spacecraft Proximity Operations in Elliptic Orbits
description: Vehicle Optimization, Dynamics, Control and Autonomy Lab (01.2024-ing), University of Michigan, MI, USA
img: assets/img/VODCA_SciTech2025/Sci_title.png
importance: 99
category: Graduate research projects
giscus_comments: False
---

#### **<a href='https://vodca.engin.umich.edu/'>Vehicle Optimization, Dynamics, Control and Autonomy Lab</a>**, University of Michigan, MI, USA

**PI**: Professor Anouck Girard and Professor Ilya Kolmanovsky

#### **Achievement**: 

(1) Taehyeun Kim*, **Robin Inho Kee** * (*: Equal contribution), Ilya Kolmanovsky, Anouck Girard, “Deep Learning-accelerated Time Shift Governor for Spacecraft Proximity Operations in Elliptic Orbits”, AIAA SCITECH 2025 Forum, To be presented at SciTech 2025

#### **Project**: **Deep Learning-accelerated Time Shift Governor for Spacecraft Proximity Operations in Elliptic Orbits**


**Abstract**: 

TBD

<!-- Our work develops a time shift governor (TSG)-based control scheme, accelerated
by a deep learning model, to enforce constraints during rendezvous and docking (RD)
missions in the setting of the Two-Body problem. As an add-on scheme to the nominal
closed-loop system, the TSG generates a time-shifted Chief spacecraft trajectory as a
target reference for the Deputy spacecraft. The target reference gradually converges to
the Chief spacecraft trajectory as the time shift decreases to zero. This modification of
the commanded reference trajectory ensures that constraints are enforced while the
time shift is reduced to zero to effect the rendezvous. The proposed Deep Learning
model is trained using the imitation learning approach to compute the time shift
parameter as a function of current and past Deputy and Chief spacecraft states. This
time shift parameter value is verified through forward-in-time online simulations; if this
verification step fails, the conventional TSG strategy based on bisections is triggered.
We provide simulation results for RD missions based on Crew-3 docking mission data
to demonstrate the effectiveness of the proposed control scheme. The proposed scheme
reduces the time to compute the time shift parameter in most of the scenarios, and
successfully completes rendezvous missions.

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
        {% include figure.liquid loading="eager" path="assets/img/VODCA_SciTech2025/Traj_VNB.png" title="intro image" class="img-fluid rounded z-depth-1" %}
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
</div> -->


#### **What I did**:

TBD

<!-- (1) Developed an LSTM-accelerated Time Shift Governor (DL-TSG) for spacecraft rendezvous and docking in elliptical orbits

(2) Implemented a phase-adaptive sliding window and a mission-specific loss function to optimize handling of dynamic input sizes, ensuring precise time shift predictions and adherence to stringent space mission constraints.
 -->


