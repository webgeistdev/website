---
layout: post
title: "How to disable touch to click on a touchpad"
category: linux
---

Everytime I have to work with a new System I cannot remember how to disable certain things. Here is how to disable the click on a simple touch on a touchpad (and usind the commandline). Because it is pretty annoying accidentally hovering the palm over the touchpad and typing somewhere else then you expect.

This time around I found an pretty easy tool for doing it. (If you have the synaptics drivers installed, which probably almost have.) The utility is called `synclient`, which is the command line tool to query and update Synaptics configuration.

So disabling the tap to click on a touchpad comes down to:

```bash
synclient TapButton=0
```

Pretty easy. Of course with just using `synclient` if will return all the set configuration so you know what else you can play around with.
