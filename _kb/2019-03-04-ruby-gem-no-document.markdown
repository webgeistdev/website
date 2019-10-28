---
layout: post
title: "You can use a .gemrc file to not install documentation"
category: ruby
---

Everyone loves [Rubygems][rubygems]. And you probably have heard of the `--no-rdoc` & `--no-ri` flags,
right? The flags that fasten up your gem installation since you do not have to generate the RDoc and
ri documentation? Ah, I see you also have heard about it. Well, I figured those flags are now deprecated.
Time to replace them with new stuff. It is called `--no-document` now.

Best thing to add it to your `~/.gemrc` file (and create one if you don't have one yet). Create a
`~/.gemrc` file like this:

```
gem: --no-document
```

Now you don't have to worry about this anymore.

[rubocop]: https://rubygems.org
