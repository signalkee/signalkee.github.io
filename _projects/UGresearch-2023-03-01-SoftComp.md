---
layout: page
title: In-vehicle Noise Classification
description: Soft Computing Lab (03.2023-08.2023), Yonsei University, Seoul, South Korea
img: assets/img/Softcomp/Soft_title.png
importance: 94
category: Undergraduate research projects
related_publications: False
---

#### **<a href='https://sclab.yonsei.ac.kr/'>Soft Computing Lab</a>**, Department of Computer Science, Yonsei University, Seoul, South Korea

**PI**: Dr. Seok-Jun Bu (Now Professor at Gyeongsang National University)

### **Achievement**: 

(1) **Robin Inho Kee**, Dahyun Nam, SeokJun Bu, “Disentangled Prototyping with Triplet-trained Prototypical Network for Few-shot Learning in In-vehicle Noise Classification”, IEEE Access, 2024

(2) Dahyun Nam, **Inho Kee**, Seok-Jun Bu, SungBae Cho, “Dynamic Prototype-guided Memory Replay for In-Vehicle Noise Classification”, Korea Data Mining Society (KDMS) 2023, **SAS Student Paper Award (Honorable Mention)**


#### **Project 1**: **Disentangled Prototyping with Triplet-trained Prototypical Network for Few-shot Learning in In-vehicle Noise Classification**

**Abstract**: This study addresses the persistent challenge of in-vehicle noise, a significant factor affecting customer satisfaction and safety in the automotive industry. Despite advancements in understanding various noise sources and mitigation strategies, vehicle noise continues to contribute to driver and passenger discomfort, impacting stress levels, fatigue, and overall quality of life. Recent research has made significant strides in classifying in-vehicle noise, yet the complexity of obtaining comprehensive and diverse datasets remains a major hurdle, given the variability and transient nature of these noises. To overcome these challenges, our research introduces an innovative approach using Few-shot Learning (FSL). We propose a unique FSL model that integrates a Triplet-trained Prototypical Network for the classification of in-vehicle noises. This model is particularly adept at learning robust feature representations from limited data. The application of triplet sampling and loss significantly enhances the model's ability to distinguish between various types of in-vehicle noises. Our methodology was rigorously tested using a specially curated dataset of in-vehicle noises, reflecting real-world diversity. The experimental results, obtained through 10-fold cross-validation, demonstrate an exceptional average accuracy of 96.81% on a 9-way 1-shot task. This level of accuracy, achieved with a limited amount of training data, not only attests to the effectiveness of our model but also marks a significant advancement in the field of acoustic classification. Our study's findings highlight the potential of FSL in addressing complex challenges in the automotive industry, paving the way for more effective noise reduction strategies and improved vehicle design.

#### **What I did**: 

Engineered a disentangled prototypical convolutional network for advanced in-vehicle noise classification, enhancing few-shot learning in automotive acoustic analysis with accuracy of 96.81% on a 9-way 1-shot task

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Softcomp/Soft_proj1_overview.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of Triplet trained Prototypical Network based Few-Shot Learning (FSL).
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Softcomp/Soft_proj1_vis.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visualization of Embedding Space Disentanglement. (a) exhibits the raw embeddings from in vehicle noise data, depicting a high degree of overlap among different noise types. (b) illustrates the clarity achieved in the embedding space after applying the tri plet based embeddings
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Softcomp/Soft_proj1_method.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Softcomp/Soft_proj1_method2.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>



#### **Project 2**: **Dynamic Prototype-guided Memory Replay for In-Vehicle Noise Classification**

**Abstract**: In-vehicle noise classification plays a crucial role in ensuring driver and passenger safety and comfort, providing valuable insights into vehicle performance and condition. Continual data collection by automotive manufacturers necessitates a more efficient approach to adapt the models to emerging noise classes without sacrificing performance. To address this challenge, we propose dynamic prototype-guided episodic memory (DPEM), a novel method that focuses on selectively storing representative samples in episodic memory. DPEM leverages clustering analysis and prototype computation to dynamically optimize the number of prototypes, enhancing memory efficiency. We extensively evaluate DPEM on real-world in-vehicle noise datasets collected from a global automobile manufacturer within a class-incremental learning pipeline. The experimental results demonstrate that DPEM achieves high classification performance (6.38%p improvement) in class-incremental condition, showcasing its potential in continual learning applications for automotive environments.

#### **What I did**: 
#
Developed baseline code and implementated the memory replay algorithm

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Softcomp/Soft_proj2_overview.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dynamic prototype-guided episodic memory (DPEM) overview.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Softcomp/Soft_proj2_vis.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Softcomp/Soft_proj2_vis_wt.png" title="intro image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dynamically computed noise prototypes for new noise types (triangles: representative samples)Left: with out DPEM, Right: with DPEM.
</div>

