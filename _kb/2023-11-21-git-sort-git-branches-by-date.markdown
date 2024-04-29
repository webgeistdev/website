---
layout: post
title: "How to sort git branches by date"
category: git
---

I found that neat little trick on [stackoverflow](https://stackoverflow.com/questions/5188320/how-can-i-get-a-list-of-git-branches-ordered-by-most-recent-commit). You can just sort:

```bash
git branch --sort=-committerdate
```
