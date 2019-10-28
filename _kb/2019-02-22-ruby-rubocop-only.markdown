---
layout: post
title: "There is the only flag for rubocop"
category: ruby
---

[Rubocop][rubocop] is a great tool to keep you code consistent, sane and informs you about some performance pitfalls.

Lately, I wanted to slowly add rubocop to an existing codebase. Rubocop has the `-a` parameter – which is short for
`--auto-correct` – which corrects all the offenses. Having a thousand offenses and trying to auto fix them all, will
generate quite the Pull Request. But there is also the `--only` parameter that allows you to check (and fix) only
some or one type of offense.

So a neat way to add all the missing magic `frozen_string_literal: true` comments everywhere, might look like:

```bash
rubocop --only Style/FrozenStringLiteralComment -a
```

[rubocop]: https://github.com/rubocop-hq/rubocop
