---
layout: page
permalink: /Publications/
title: Publications
description: 
nav: true
nav_order: 3
---

## Under review
{% assign under_review = 1 %}
{% for pub in site.data.publications.under_review %}
{% capture authors %}{{ pub.authors | escape }}{% endcapture %}
{% capture authors_temp %}{{ authors | replace: 'Robin Inho Kee', 'TEMP_PLACEHOLDER' | replace: '*', '&#42;'}}{% endcapture %}
{% capture authors_final %}{{ authors_temp | replace: 'Inho Kee', '**<u>Inho Kee</u>**' | replace: 'TEMP_PLACEHOLDER', '**<u>Robin Inho Kee</u>**'}}{% endcapture %}
{{ under_review }}. {{ authors_final }}, "{{ pub.title }}", {{ pub.status }}{% if pub.pdf %} [<a href="{% if pub.pdf contains "/" %}{{ pub.pdf }}{% else %}/assets/pdf/{{ pub.pdf }}{% endif %}" target="_blank">PDF</a>]{% endif %}
{% assign under_review = under_review | plus: 1 %}
{% endfor %}

## Journals
{% assign journal = 1 %}
{% for pub in site.data.publications.journals %}
{% capture authors %}{{ pub.authors | escape }}{% endcapture %}
{% capture authors_temp %}{{ authors | replace: 'Robin Inho Kee', 'TEMP_PLACEHOLDER' | replace: '*', '&#42;'}}{% endcapture %}
{% capture authors_final %}{{ authors_temp | replace: 'Inho Kee', '**<u>Inho Kee</u>**' | replace: 'TEMP_PLACEHOLDER', '**<u>Robin Inho Kee</u>**'}}{% endcapture %}
{{ journal }}. {{ authors_final }}, "{{ pub.title }}", {{ pub.journal }}, {{ pub.year }}{% if pub.pdf %} [<a href="{% if pub.pdf contains "/" %}{{ pub.pdf }}{% else %}/assets/pdf/{{ pub.pdf }}{% endif %}" target="_blank">PDF</a>]{% endif %}
{% assign journal = journal | plus: 1 %}
{% endfor %}

## Conferences
{% assign conference = 1 %}
{% for pub in site.data.publications.conferences %}
{% capture authors %}{{ pub.authors | escape }}{% endcapture %}
{% capture authors_temp %}{{ authors | replace: 'Robin Inho Kee', 'TEMP_PLACEHOLDER' | replace: '*', '&#42;'}}{% endcapture %}
{% capture authors_final %}{{ authors_temp | replace: 'Inho Kee', '**<u>Inho Kee</u>**' | replace: 'TEMP_PLACEHOLDER', '**<u>Robin Inho Kee</u>**'}}{% endcapture %}
{{ conference }}. {{ authors_final }}, "{{ pub.title }}", {{ pub.conference }}, {{ pub.year }}{% if pub.award %}, **{{ pub.award }}**{% endif %}{% if pub.pdf %} [<a href="{% if pub.pdf contains "/" %}{{ pub.pdf }}{% else %}/assets/pdf/{{ pub.pdf }}{% endif %}" target="_blank">PDF</a>]{% endif %}
{% assign conference = conference | plus: 1 %}
{% endfor %}
