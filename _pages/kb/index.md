---
layout: page
title: Knowledge Base
permalink: /kb/
---

These are bits and pieces of small and big learnings, recipies how to do things or just things I had to write down so I won't forget. Also, maybe it helps other people as well.

### These are my topics:

<div>
  <ul class="kb-items">
    {% for knowledge in site.kb %}
      {% if category_name != knowledge.category %}
        </ul>
        <h4 class="kb-category">{{ knowledge.category }}</h4>
        <ul class="kb-items">
      {% endif %}
      {% capture category_name %}{{ knowledge.category }}{% endcapture %}
      <li><a href="{{ knowledge.url }}">{{ knowledge.title }}</a></li>
    {% endfor %}
  </ul>
</div>
