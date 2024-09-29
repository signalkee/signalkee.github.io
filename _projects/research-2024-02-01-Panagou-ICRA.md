---
layout: page
title: Online Adaptive Input Constrained Control Barrier Functions
description: (02.2024-10.2024), University of Michigan, MI, USA
img: assets/img/DASC_ICRA2025/ICRA_title.gif
importance: 97
category: Graduate research projects
---

#### **<a href='https://dasc-lab.github.io/'>Distributed Autonomous Systems and Control Lab</a>**, University of Michigan, MI, USA

**PI**: Professor Dimitra Panagou

#### **Achievement**:

(1) Taekyung Kim, **Robin Inho Kee**, Dimitra Panagou, "Learning to Refine Input Constrained Control Barrier Functions via Uncertainty-Aware Online Parameter Adaptation", 2025 IEEE International Conference on Robotics and Automation (ICRA), Submitted

#### **Project**: **Learning to Refine Input Constrained Control Barrier Functions via Uncertainty-Aware Online Parameter Adaptation**

[**<a href='https://arxiv.org/abs/2409.14616'>Arxiv</a>**] [**<a href='https://www.taekyung.me/online-adaptive-cbf'>Original Project Page</a>**] [**<a href='https://github.com/tkkim-robot/online_adaptive_cbf'>Github</a>**] [**<a href='https://www.youtube.com/watch?v=255IUS1f6Lo'>Youtube</a>**]



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_overview.webp" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview diagram of the Online Adaptive ICCBF algorithm applied to MPC framework.
</div>

The Online Adaptive ICCBF algorithm dynamically adapts Input Constrained Control Barrier Function (ICCBF) parameters to optimize performance while ensuring safety for input-constrained nonlinear systems. Our approach leverages a Probabilistic Ensemble Neural Network (PENN) to predict performance and risk metrics, considering both epistemic and aleatoric uncertainties. The algorithm incorporates a two-step verification process using Jensen-Rényi Divergence (JRD) and Distributionally-Robust Conditional Value at Risk (DR-CVaR) to identify valid parameters. By adapting ICCBF parameters online based on the current state and nearby environment, our method optimizes performance while maintaining safety.


#### **Motivation**: 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_mo.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_mo2.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Deadlock occurs due to overly conservative CBF constraint (left) Controller infeasibility under input constraints leads to collision with the obstacle (right)
</div>

Control Barrier Functions (CBFs) are widely used in robotics to ensure system safety. However, finding valid CBFs that guarantee persistent safety and feasibility remains an open challenge, especially in systems with input constraints. Traditional approaches often rely on manually tuning the parameters of the class K functions of the CBF conditions a priori. The performance of CBF-based controllers is highly sensitive to these fixed parameters, potentially leading to overly conservative behavior (such as deadlock) or safety violations (due to infeasibility).


#### **Algorithm Breakdown**

#### ***Data Generation***:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_safetyloss.webp" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_data_gen.webp" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Safety loss density function (left) Data generation example, visualizing safety loss (right)
</div>

We initially generate robot trajectories using the CBF-based controller to form the training dataset by varying the robot's initial state, obstacle configurations, and class-K function parameters. The risk level and deadlock time are recorded as the ground truth for prediction. The risk level is computed as the maximum safety loss value during navigation, defined by a safety loss density function that captures the collision risk.


#### ***PENN Model Prediction***:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_prediction.webp" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_cvar.webp" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visualization of the mean predicted risk level from varying inputs (left) Distributionally Robust CVaR (right)
</div>

We train the PENN model on the dataset, observing that the predicted risk level increases with higher CBF parameters, closer distances to obstacles, higher velocities, and smaller relative angles to obstacles. 

Given the PENN model’s nature, the predicted values follow a Gaussian Mixture Model. We implement a two-step verification process using this PENN model to predict the CBF class K functions of interest. First, we quantify epistemic uncertainty using a closed-form solution from Jensen-Rényi Divergence (JRD) and discard predictions with low confidence. Next, we apply Distributionally-Robust Conditional Value at Risk (DR-CVaR) to ensure probabilistic satisfaction of the ICCBF validity condition. Further details on the relationship between the predicted risk level and the ICCBF validity can be found in the paper.


#### ***Visualize Prediction Results for CBF Parameters of Interest***:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_realtimeplot.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_realtimeplot2.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The visualizations above show the predicted risk levels online, without adapting the parameters. We illustrate three candidate ICCBF parameter sets — low, medium, and high. They reveal the same patterns with our offline predictions, showing increased risk levels as the robot moving towards obstacles. Additionally, you can observe instances of high disagreement between ensemble models, indicating low confidence in those predictions, which are subsequently discarded.
Once valid ICCBF parameter sets are identified, we optimize the controller's performance by selecting the parameters with the minimum predicted deadlock time. By repeating this process at each time step, it continuously refines the ICCBF parameters based on the current state and the predictions from the PENN model, thereby optimizing performance while maintaining safety.


#### ***Preview Experiments***:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_exp1.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_exp2.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MPC-CBF w/ Low Parameters (left) MPC-CBF w/ High Parameters (right)
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_exp3.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_exp4.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Optimal Decay CBF-QP (left) Optimal Decay MPC-CBF (right)
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DASC_ICRA2025/ICRA_exp5.gif" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Online Adaptive ICCBF w/ MPC (Ours)
</div>

The video demonstrates simulation results comparing five different methods. For more details on the experiments and implementation, please visit our GitHub repository.




### **What I did**:

(1) Developed and implemented the Probabilistic Ensemble Neural Network (PENN) for real-time adaptation of Input Constrained Control Barrier Functions (ICCBF).
(2) Designed and integrated a two-step uncertainty verification process using Jensen-Rényi Divergence (JRD) and distributionally robust Conditional Value at Risk (CVaR) to ensure model confidence and local validity.
(3) Conducted simulations and robot experiments for robot navigation to validate the method’s effectiveness and safety guarantees.



