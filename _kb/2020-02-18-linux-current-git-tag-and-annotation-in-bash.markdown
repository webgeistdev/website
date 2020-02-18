---
layout: post
title: "How to access the current git tag and annotation in bash"
category: linux
---

Sometimes you want to write a bash script accessing the current git tag and its annotation. Here is how it can be done:

## Accessing current git tag

Getting the current git tag is fairly easy:

```bash
git describe --tags
```

## Getting the annotation of that tag

Getting the annotation is a bit more work. First we need to list all tags with their annotation (`-n100` means `git tag -l` can show 100 lines of annotations). Then we use the `tail` command to strip of the first line (`-n +2` means starting with the second line), because it contains the tag information.

```bash
git tag -l -n100 $(git describe --tags) | tail -n +3
```
