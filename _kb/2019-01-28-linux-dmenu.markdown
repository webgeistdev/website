---
layout: post
title: "Dmenu is a great way to optimize CLI scripting"
category: linux
---

[Dmenu][dmenu] is a simple but elegant tool from the [suckless][suckless] community. What it does is simply
generating a dynamic menu – hence the name – using the input (text file, or piped) where every line is one menu
item and let you choose from those options via keyboard cursor keys or typing the whole or partial words and in
the end returning the result to stdout.

So this would simply generate a menu with two options (and a question):

```bash
$ echo "yes\nno" | dmenu -p "Are you ok?"
yes
```

Why is that so need? Well. I had two scripts fixing the screen setup for me, one called `screenhome` and the other
`screenwork`. While that works, typing it out is annoying if you change between both setups a lot – since auto
completion will suggest the last used one. Plus that are two scripts. With dmenu I could simply but them in one
little script. It looks something like that:

```bash
#!/bin/bash
# This script is for fixing my screen setup.

choices="home\nwork"

chosen=$(echo -e "$choices" | dmenu -i)

case "$chosen" in
    home)
        xrandr --output HDMI-1 --above eDP-1 &&
  	    xfconf-query -c xfce4-panel -p /panels/panel-1/length -s 100 ;;
    work)
        xrandr --output HDMI-1 --above eDP-1 &&
  	    xfconf-query -c xfce4-panel -p /panels/panel-1/length -s 75
esac
```

I know, fixing the screen setup like this might not be the most elegant solution there could be, but that's the one I
found so far. But that is just for illustrating what you can do with it.

It can be installed by all regular means or build by hand – which is needed when you want to change the configuration
like colors and stuff, since they are set on compile time (see [example here][inspiration]).

[dmenu]: https://tools.suckless.org/dmenu/
[suckless]: https://suckless.org/
[inspiration]: https://www.youtube.com/watch?v=R9m723tAurA
