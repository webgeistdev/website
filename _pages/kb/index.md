---
layout: page
title: Knowledge Base
permalink: /kb/
---

These are bits and pieces of small and big learnings, recipes how to do things or just things I had to write down, so I won't forget. Also, maybe it helps other people as well.

### These are my topics:

{% assign categories = site.kb | group_by: "category" %}

<div>
  {% for knowledge in categories %}
    <a id="{{ knowledge.name | slugize }}"></a>
    <h4 class="kb-category">{{ knowledge.name }}</h4>
    <ul class="kb-items">
      {% assign postsSorted = knowledge.items | sort: "title" %}
      {% for post in postsSorted %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>
