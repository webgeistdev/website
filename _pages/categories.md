---
layout: page
permalink: /categories/
title: Categories
---

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}" name="{{ category_name | slugize }}"></div>

    <h3 class="archive-category">{{ category_name }}</h3>
    <ul class="archive-items">
    {% for post in site.categories[category_name] %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.excerpt |strip_html}}{%endif%}</a>
    </li>
    {% endfor %}
    </ul>

  </div>
{% endfor %}
</div>
