---
layout: page
permalink: /Publications/
title: Publications
description: 
nav: true
nav_order: 3
---


# In progress
{% assign in_progress_counter = 1 %}
{% for publication in site.data.in_progress %}
**{{ in_progress_counter }}.** 
{% assign authors = publication.authors | split: ', ' %}
{% for author in authors %}
  {% if author == 'Robin Inho Kee' or author == 'Inho Kee' %}
    **<u>{{ author }}</u>**,
  {% else %}
    {{ author }},
  {% endif %}
{% endfor %}
"{{ publication.title }}", {{ publication.venue }}, {{ publication.year }} {% if publication.pdf_link != "" and publication.pdf_link != null %}[PDF]{% endif %} {% if publication.award != "" and publication.award != null %}**{{ publication.award }}**{% endif %}
{% assign in_progress_counter = in_progress_counter | plus: 1 %}
{% endfor %}

# Journals
{% assign journals_counter = 1 %}
{% for publication in site.data.journals %}
**{{ journals_counter }}.** {{ publication.authors | replace: ' RobinInhoKee ', ' **<u>Robin Inho Kee</u>** ' | replace: ' Inho Kee ', ' **<u>Inho Kee</u>** ' }}, "{{ publication.title }}", {{ publication.venue }}, {{ publication.year }} {% if publication.pdf_link != "" and publication.pdf_link != null %}[PDF]{% endif %} {% if publication.award != "" and publication.award != null %}**{{ publication.award }}**{% endif %}
{% assign journals_counter = journals_counter | plus: 1 %}
{% endfor %}

# Conferences
{% assign conferences_counter = 1 %}
{% for publication in site.data.conferences %}
**{{ conferences_counter }}.** {{ publication.authors | replace: ' RobinInhoKee ', ' **<u>Robin Inho Kee</u>** ' | replace: ' Inho Kee ', ' **<u>Inho Kee</u>** ' }}, "{{ publication.title }}", {{ publication.venue }}, {{ publication.year }} {% if publication.pdf_link != "" and publication.pdf_link != null %}[PDF]{% endif %} {% if publication.award != "" and publication.award != null %}**{{ publication.award }}**{% endif %}
{% assign conferences_counter = conferences_counter | plus: 1 %}
{% endfor %}
