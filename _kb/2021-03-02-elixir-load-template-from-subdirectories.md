---
layout: post
title: "How to load templates from subdirectories in Phoenix"
category: elixir
---

If you want or need to organize templates in subfolders within your view directory, those are not compiled by default. But doing that is simple as [Chris McCord pointed out himself](https://elixirforum.com/t/how-to-render-a-template-inside-a-web-templates-folder-subfolder/1404/6). Just enhance the use of `Phoenix.View` with `pattern: "**/*"`:

```elixir
  use Phoenix.View,
    root: "lib/my_app_web/templates",
    namespace: MyAppWeb,
    pattern: "**/*"
```

That way you can render tempaltes using subdirectories as you would expect:

```elixir
render("subfolder/file.html")
```
