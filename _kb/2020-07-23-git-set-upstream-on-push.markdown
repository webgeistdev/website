---
layout: post
title: "How to set up upstream to pull the right branch after push"
category: git
---

Usually when simply pushing a branch, that other people work on as well, you will have to call `git pull origin whats_your_branch` to pull the right branch back into you branch. Or you have to set the upstream like `git branch --set-upstream-to=origin/whats_your_branch whats_your_branch` to simply be able to do `git pull` again.

If that is to much to type for you, there is a small little trick, that helps if you usually want to pull the branch from where you have pushed it to. For this you have to add the following to your `.gitconfig`:

```
[push]
  default = current
```

This tells the following command, that it should set the origin to what what you will push it to. Then when ever you do one of the following pushes, it will automatically set the upstream entry, so you can do a simple `git pull` afterwards:

```bash
git push -u
# or the long version:
git push --set-upstream
```
