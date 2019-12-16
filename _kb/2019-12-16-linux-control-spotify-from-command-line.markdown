---
layout: post
title: "How to control Spotify from command line"
category: linux
---

This is not only useful when you want to control Spotify from your command line, but also if you bind it to some key shortcuts on your keyboard.

## Installation

First you need `playerctl`, which you probably can directly install when on debian. On Ubuntu you can get the deb-packages for [playerctl here](https://packages.debian.org/buster/playerctl) and for it's dependency [libplayerctl here](https://packages.debian.org/buster/libplayerctl2). And then install it via `dplk -i`.

Or in just one snippet:

```bash
wget http://ftp.nl.debian.org/debian/pool/main/p/playerctl/libplayerctl2_2.0.1-1_amd64.deb
wget http://ftp.nl.debian.org/debian/pool/main/p/playerctl/playerctl_2.0.1-1_amd64.deb
sudo dpkg -i libplayerctl2_2.0.1-1_amd64.deb playerctl_2.0.1-1_amd64.deb
```

## Usage

Make sure Spotify app is running and you installed `playerctl` you can enter `playerctl next` into your CLI to jump to the next song in the queue, or `playerctl play-pause` to start or stop a song.
You can also query the metadata of the currently playing song (for example to display it somewhere) like so:

```bash
playerctl metadata # Will print quite a set of metadata
playerctl metadata artist # Will print only the artist (works with title as well)
```
