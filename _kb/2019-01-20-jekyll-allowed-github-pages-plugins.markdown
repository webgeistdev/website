---
layout: post
title: "Not all jekyll plugins do work with GitHub pages"
category: jekyll
---

You learn through experience. First do something and see it does not work and then throw it away – or you read along
here, to avoid configuring jekyll plugins, that simply are not allowed to be run within GitHub pages.

You can find all allowed plugins within the [Pages gem][github-pages]. To be precise, you will find the whitelist of
allowed Jekyll plugins here: [See all GitHub Pages approved jekyll plugins.][github-plugin-whitelist]

It appears to be a lot of work for the GitHub security team, to add more gems here, since they all have to be checked
on every version bump. So keep yourself happy and just restrict yourself to those plugins, if you want to host your
page on GitHub pages.

[github-pages]: https://github.com/github/pages-gem
[github-plugin-whitelist]: https://github.com/github/pages-gem/blob/09c5090e670aea9ba7351477f55a224790a12cb5/lib/github-pages/plugins.rb
