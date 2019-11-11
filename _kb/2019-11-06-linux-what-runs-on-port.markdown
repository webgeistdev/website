---
layout: post
title: "How to figure out what runs on port X"
category: linux
---

Emberassing, I know, but since I always forget I have to write that down. At least I don't need to google it anymore. :)

So: To figure out, what process runs on port 8000, we can just use `netstat`.

```bash
netstat -ltnp | grep ':8000'
```

Easy as pie.
