---
layout: post
title: "Using PostgreSQL’s citext extension to compare emails case insensitively"
category: elixir
---

PostgreSQL has an extesion called [citext](https://www.postgresql.org/docs/9.1/citext.html). What it does is comparing all the values in a case insensitve manner. So we can activate and use it in a migration:

```elixir
execute("CREATE EXTENSION IF NOT EXISTS citext")
create(:users) do
  add :email, :citext
end
```

And then we can just find it without needing to worry about having to downcase emails ourselves:

```elixir
{:ok, user} = %User{email: "my@EMAIL.io"} |> Repo.insert()

assert Repo.get_by(email: "my@email.io") == user
```
