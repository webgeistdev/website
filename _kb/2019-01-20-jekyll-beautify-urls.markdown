---
layout: post
title: "How to make canonical URLs pretty in jekyll"
category: jekyll
---

[Jekyll][jekyll] is a great static site generator, with a great ecosystem of plugins to create almost all you need. But
since every plugin is handling things a wee bit different, sometimes the results are not consistent throughout the page.

Since we always want to render nice canonical URLs with no unnecessary `index.html` files, I figured having a nice liquid
plugin is the best choice, since the current [Jekyll pagination plugin][jekyll-paginate-v2] is always putting an `index.html` at the end with no (apparent) way to strip it away.

But since there are plugins for almost every usecase, I found this nice [liquid filter plugin for beautifying URLs][jekyll-beautify-urls].
Simply copy that code into the `_plugins` dir and use it like this:

```html
<meta
  property="og:url"
  content="{{ page.url | prepend: site.url | beautify_url }}"
/>
```

[jekyll]: https://jekyllrb.com/
[jekyll-paginate-v2]: https://github.com/sverrirs/jekyll-paginate-v2/
[jekyll-beautify-urls]: https://biosphere.cc/software-engineering/jekyll-beautify-urls/
