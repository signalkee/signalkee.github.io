---
layout: page
permalink: /Publications/
title: Publications
description: 
nav: true
nav_order: 3
---

<!-- ## In progress
{% assign in_progress = 1 %}
{% for pub in site.data.publications.in_progress %}
{% capture authors %}{{ pub.authors | escape }}{% endcapture %}
{% capture authors_temp %}{{ authors | replace: 'Robin Inho Kee', 'TEMP_PLACEHOLDER' | replace: '*', '&#42;'}}{% endcapture %}
{% capture authors_final %}{{ authors_temp | replace: 'Inho Kee', '**<u>Inho Kee</u>**' | replace: 'TEMP_PLACEHOLDER', '**<u>Robin Inho Kee</u>**'}}{% endcapture %}
{{ in_progress }}. {{ authors_final }}, "{{ pub.title }}", {{ pub.status }}{% if pub.pdf %} [<a href="{% if pub.pdf contains "/" %}{{ pub.pdf }}{% else %}/assets/pdf/{{ pub.pdf }}{% endif %}" target="_blank">PDF</a>]{% endif %}
{% assign in_progress = in_progress | plus: 1 %}
{% endfor %} -->

## Journals
{% assign journal = 1 %}
{% for pub in site.data.publications.journals %}
{% capture authors %}{{ pub.authors | escape }}{% endcapture %}
{% capture authors_temp %}{{ authors | replace: 'Robin Inho Kee', 'TEMP_PLACEHOLDER' }}{% endcapture %}
{% capture authors_final %}{{ authors_temp | replace: 'Inho Kee', '**<u>Inho Kee</u>**' | replace: 'TEMP_PLACEHOLDER', '**<u>Robin Inho Kee</u>**' | replace: '\*', '&#42;' }}{% endcapture %}
{{ journal }}. {{ authors_final }}, "{{ pub.title }}", {{ pub.journal }}, {{ pub.year }}{% if pub.pdf %} [<a href="{% if pub.pdf contains "/" %}{{ pub.pdf }}{% else %}/assets/pdf/{{ pub.pdf }}{% endif %}" target="_blank">PDF</a>]{% endif %}
{% assign journal = journal | plus: 1 %}
{% endfor %}

## Conferences
{% assign conference = 1 %}
{% for pub in site.data.publications.conferences %}
{% capture authors %}{{ pub.authors | escape }}{% endcapture %}
{% capture authors_temp %}{{ authors | replace: 'Robin Inho Kee', 'TEMP_PLACEHOLDER' }}{% endcapture %}
{% capture authors_final %}{{ authors_temp | replace: 'Inho Kee', '**<u>Inho Kee</u>**' | replace: 'TEMP_PLACEHOLDER', '**<u>Robin Inho Kee</u>**' | replace: '\*', '&#42;' }}{% endcapture %}
{{ conference }}. {{ authors_final }}, "{{ pub.title }}", {{ pub.conference }}, {{ pub.year }}{% if pub.award %}, **{{ pub.award }}**{% endif %}{% if pub.pdf %} [<a href="{% if pub.pdf contains "/" %}{{ pub.pdf }}{% else %}/assets/pdf/{{ pub.pdf }}{% endif %}" target="_blank">PDF</a>]{% endif %}
{% assign conference = conference | plus: 1 %}
{% endfor %}
