---
layout: page
title: "Autonomous Navigation with a Theo Jansen Mechanism"
description: "Mechanism optimization, vision-based path following, and autonomous navigation on a legged robot."
img: assets/img/Roboin_Teo/Teo_system.jpg
importance: 98
category: Undergraduate projects
kicker: ROBOT DESIGN · 2020
year: "2020"
venue: "Yonsei University · Roboin"
---

## Project

We designed and fabricated a robot based on a Theo Jansen linkage and combined it with camera-based path recognition for autonomous navigation.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/Roboin_Teo/Teo_system.jpg" title="Theo Jansen robot system" class="img-fluid rounded z-depth-1" %}</div>
</div>

<div class="project-motion-grid">
<div class="project-motion-wrap">
  <video class="project-motion" autoplay muted loop playsinline poster="{{ 'assets/media/teo/computer.webp' | relative_url }}">
    <source src="{{ 'assets/media/teo/computer.mp4' | relative_url }}" type="video/mp4">
  </video>
  <p class="caption">Computer-vision and mechanism test.</p>
</div>
<div class="project-motion-wrap">
  <video class="project-motion" autoplay muted loop playsinline poster="{{ 'assets/media/teo/field.webp' | relative_url }}">
    <source src="{{ 'assets/media/teo/field.mp4' | relative_url }}" type="video/mp4">
  </video>
  <p class="caption">Autonomous navigation on the competition course.</p>
</div>
</div>

## Autonomy

A Raspberry Pi camera was used for path recognition as well as STOP-sign and AR-marker detection, allowing the robot to choose turns and execute simple commands along a course.

## My contribution

I worked on hardware design and fabrication and developed the vision algorithms for path following, sign recognition, and AR-marker recognition.

## Recognition

The project received **1st Place** in the 2020 Computational Design Competition.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">{% include figure.liquid loading="lazy" path="assets/img/Roboin_Teo/Teo_wip.jpg" title="Prototype" class="img-fluid rounded z-depth-1" %}</div>
</div>
