---
layout: post
title: "How to clean up merged branches"
category: git
---

I often find myself having so many branches locally on my machine. While most build systems, and repositories offer easy ways for cleaning up branches on the shared host, the branches tend to stay way longer on my local machine.

It is spring, so time for a bit of spring cleaning.

## Remove all branches that are merged to origin

Since there is no command that directly does what we want in git, we have to build up a little chain to achieve this.

Getting alle the branches that are merged is farily easy:

```bash
git branch --merged
```

This contains branches like master or production, which we probably do not want to remove, so we have to filter them out using:

```bash
git branch --merged | egrep -v "(master|production)"
```

This we have to feed back to the `git branch` command with the delete flag. Which leaves us with nice little snippet:

```bash
git branch --merged | egrep -v "(master|production)" | xargs git branch -d
```
