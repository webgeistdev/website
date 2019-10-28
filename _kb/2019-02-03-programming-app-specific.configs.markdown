---
layout: post
title: "Where to put app specific configs and files"
category: programming
---

…and the answer is not necessarily in the users home directory.

Imagine you write a desktop app and you need to persist some configuration the user has chosen.
Where do you put those files? My default answer – as I have been a developer on a Mac – would
have been `~/Library/Application Support/com.example.AwesomeApp/`. But since I am working with
Linux now, and those people have different ideas where to put stuff and like to have total control,
I would have said something like: "In a dotfile maybe?"

But there seems to be a [specification][spec] for handling this – of course, there is. So the short
answer is, if there is the environment variable `$XDG_CONFIG_HOME` defined, use that value, if not,
default to `~/.config` for config files. And for other app-specific files use `$XDG_DATA_HOME` or
`~/.local/share`.

So if you build a desktop app, you know now where to put stuff.

[spec]: https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
