---
layout: post
title: "How to change volumes of a bluetooth device on Linux"
category: linux
---

pactl set-sink-volume $(pactl list short sinks | grep RUNNING | awk '//{print $2}') +2% &&\
pactl - Control a running PulseAudio sound server

Using the command line utility `pactl` you can send signals to your sound service devices.
