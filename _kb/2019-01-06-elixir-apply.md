---
layout: post
title: "Call an elixir method dynamically"
share_text: How to call an elixir method dynamically
category: elixir
---

If you have the need to dynamically call a method in elixir, of course there is a method for that, which is
called `apply` (`apply/2`, `apply/3`), which optionally takes a module as first parameter, and an atom as
second, and a list of arguments a third.

### Here are some neat examples:

```elixir
apply(fn x -> x * 2 end, [2])
```

```elixir
defmodule Test do
  def one, do: IO.puts("one")
  def two, do: IO.puts("two")
end

[:one, :two] |> Enum.each(fn method -> apply(Test, method, []) end)

```
