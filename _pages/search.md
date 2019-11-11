---
layout: page
title: Search
permalink: /search/
---

<div id="search-container">
    <input type="text" id="search-input" placeholder="Search through the blog posts...">
    <ul id="results-container" class="search-results"></ul>
</div>

<script src="{{ site.baseurl }}/assets/simple-jekyll-search.min.js" type="text/javascript"></script>

<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<li class="search-result" style="text-align: left !important;"><a href="{url}"><h1 style="text-align:left !important;">{title}</h1></a><div class="search-subline"><span>{type} in </span><span class="post-tag">{category}</span><span style="text-align:left !important;">{date}</span></div></li>',
  json: '{{ site.baseurl }}/search.json'
});
</script>
