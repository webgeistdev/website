---
layout: post
title: "There are nice names for Phoenix conn status codes"
category: elixir
---

In ruby there is this neat way to define response statuses, something like:

```ruby
render status: :not_found
```

And there is something (really) similar as well within the [Plug.Conn][hex-plug-conn] elixir package.

So in Phoenix you can do this two nice things:

```elixir
send_resp(conn, 404, "Nothing found!")
send_resp(conn, :not_found, "Nothing found!")
```

[hex-plug-conn]: https://hexdocs.pm/plug/Plug.Conn.Status.html#content
