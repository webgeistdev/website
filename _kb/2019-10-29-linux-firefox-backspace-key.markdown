---
layout: post
title: "How to make backspace go a page back in Firefox on Linux"
category: linux
---

The default for Firefox on Linux is to map the backspace key to go one viewport up the page (Shift+Backspace will bring you down). On other OS
it will go back to the last page you visited within that tab.

Since I have a Page-Up key conveniently placed beside my cursor keys, I like to have it go back to the last page instead. Luckily you can.
The config is a bit hidden, but it is there. Go to

```
about:config
```

There change the value of `browser.backspace_action` to `0` to enable backspace to go to the last page. Value `1` will enable the viewport
up and down functionality.
