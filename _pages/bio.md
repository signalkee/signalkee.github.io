---
layout: default
permalink: /bio/
title: bio/cv
nav: true
nav_order: 2
cv_pdf: example.pdf
---

<!-- <html>
    <div class="post">
        <header class="post-header">
        <h1 class="post-title">Biographical Sketch</h1>
        </header>
        <article>
        Robin Inho Kee, a Master's student in Mechanical Engineering at the University of Michigan, specializes in the application of deep learning and control in robotics. He holds a B.S. from Yonsei University and has worked at KIST, developing deep learning models for exoskeletons. His current research focuses on safety-guaranteed control for constrained systems using predictive control and deep learning.
        </article>
    </div>
    <br>
    <div class="post">
        <header class="post-header">
        <h1 class="post-title">CV</h1>
        </header>
        <object data="{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url }}#toolbar=1&navpanes=0" style="min-height:100vh;width:100%" type='application/pdf'/>
    </div>
</html> -->


<html>
<div class="post">
    <header class="post-header">
        <h1 class="post-title">Biographical Sketch</h1>
    </header>
    <article>
        Robin Inho Kee, a Master's student in Mechanical Engineering at the University of Michigan, specializes in the application of deep learning and control in robotics. He holds a B.S. from Yonsei University and has worked at KIST, developing deep learning models for exoskeletons. His current research focuses on safety-guaranteed control for constrained systems using predictive control and deep learning.
    </article>
</div>
<br>
<div class="post">
    <header class="post-header">
        <h1 class="post-title">CV</h1>
    </header>
    <embed src="{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url }}" type='application/pdf' style="min-height:100vh; width:100%">
</div>
</html>
