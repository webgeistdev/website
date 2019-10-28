---
layout: post
title: "How to use the original Webster dictionary under linux"
category: linux
---

Today I read a [brilliant article about English dictionaries and how to use them][article]. It was
inspiring in its colorfulness use of words and very well written, it really left me with the feeling,
I need to write more. It also had an appendix about how to set up an online version of it. But it uses
MacOS of course, so I had to check what works on Linux, to get a dictionary running as well. Here it is:

On Linux there have been multiple Dictionaries out there. Some were discontinued or abandoned after
legal conflicts, some were left because of better alternatives. So it looks like most people settled
to use [GoldenDict] as the standard dictionary app to use.

So you can install it via `apt` like so:

```bash
sudo apt-get install goldendict
```

Since that sparking article really left me with the desire to use the Webster dictionary from 1913, we
have to download this as well. Luckily in the appendix of that article James provides a
[Download link to his MacOS App which contains what we need][webster-dl]. This is an archive containing a
`tar.bz2`-archive within the `dictionary` folder which we extract somewhere, our GoldenDict app can use it.

The last thing we have to do is teaching GoldenDict to use that specific dictionary. We can do that through
the menu entry `Edit -> Dictionary`, hitting `add`, and choosing the directory of our previously extracted dictionary.

E voila, if we search now within GoldenDict we get those really great definitions that really are interesting
to read and explain so colorful, that a word really means.

[article]: http://jsomers.net/blog/dictionary
[goldendict]: http://goldendict.org
[webster-dl]: https://s3.amazonaws.com/jsomers/dictionary.zip
