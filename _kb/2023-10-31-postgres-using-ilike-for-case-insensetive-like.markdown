---
layout: post
title: "Using ILIKE for case-insenstive search"
category: PostgreSQL
---

We can write `FROM Users as p WHERE p.name ILIKE = "%joe%"` instead of having to write `FROM Users as p WHERE lower(p.name) LIKE = "%joe%"` to match also all the "Joes" out there.

It is a bit hidden but [the docs](https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE) mention `ILIKE`  as the case insensitive version of `LIKE`.
