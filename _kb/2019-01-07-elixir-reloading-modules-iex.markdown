---
layout: post
title: "How to reload modules in iex"
category: elixir
---

You may know about how to load files into your `iex`. Right?

```elixir
c "my-module.exs"
```

If you actively work on it, and want to reload it, that you can also do this:

```elixir
r MyModule
```

Also, note that, not according to the docs, the file where this module is defined will recompiled,
but only in memory. So maybe some typespecs and doc may then be outdated, since they are never loaded
into memory.
