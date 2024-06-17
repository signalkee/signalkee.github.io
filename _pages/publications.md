---
layout: page
permalink: /Publications/
title: Publications
description: 
nav: true
nav_order: 3
---


## In progress
{% assign in_progress = 1 %}
{% for pub in site.data.publications.in_progress %}
{{ in_progress }}. {{ pub.authors | replace: 'Robin Inho Kee', '**<u>Robin Inho Kee</u>**' | replace: ' Inho Kee', ' **<u>Inho Kee</u>**' }}, {{ pub.title }}, {{ pub.status }}{% if pub.pdf %} [<a href="{{ pub.pdf }}" target="_blank">PDF</a>]{% endif %}
{% assign in_progress = in_progress | plus: 1 %}
{% endfor %}

## Journals
{% assign journal = 1 %}
{% for pub in site.data.publications.journals %}
{{ journal }}. {{ pub.authors | replace: 'Robin Inho Kee', '**<u>Robin Inho Kee</u>**' | replace: ' Inho Kee', ' **<u>Inho Kee</u>**' }}, {{ pub.title }}, {{ pub.journal }}, {{ pub.year }}{% if pub.award %}, **{{ pub.award }}**{% endif %}{% if pub.pdf %} [<a href="{{ pub.pdf }}" target="_blank">PDF</a>]{% endif %}
{% assign journal = journal | plus: 1 %}
{% endfor %}

## Conferences
{% assign conference = 1 %}
{% for pub in site.data.publications.conferences %}
{{ conference }}. {{ pub.authors | replace: 'Robin Inho Kee', '**<u>Robin Inho Kee</u>**' | replace: ' Inho Kee', ' **<u>Inho Kee</u>**' }}, {{ pub.title }}, {{ pub.conference }}, {{ pub.year }}{% if pub.award %}, **{{ pub.award }}**{% endif %}{% if pub.pdf %} [<a href="{{ pub.pdf }}" target="_blank">PDF</a>]{% endif %}
{% assign conference = conference | plus: 1 %}
{% endfor %}
