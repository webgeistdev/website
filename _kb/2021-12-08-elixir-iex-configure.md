---
layout: post
title: "How to globally configure inspect limits"
category: elixir
---

`IO.inspect` truncates the data after 50 chars. But it can be set to no truncation with using the `limit: :infinity` option (or any other positive length). Like so:

```elixir
IO.inspect(something, limit: :infinity)
```

But doing this always can be annoying and it looks like it can be configured:

```elixir
IEx.configure(inspect: [limit: :infinity])

IO.inspect(something) # No limits
```
