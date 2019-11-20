---
layout: post
title: "How to print all the licenses of the node dependencies"
category: JavaScript
---

Sometimes you need to know which licenses the tools you use have. Good thing, there is a [node package that does just that][license-checker].

You can call this just using Node.js own `npx` call machanic:

```bash
npx license-checker
```

Calling it via the `--help` flag opens up some nice flags you can use. For example printing only the direct licences directly into a json file:

```bash
npx license-checker --direct --json > licenses.json
```

I found this via this [blog article][blog-article].

[license-checker]: https://www.npmjs.com/package/license-checker
[blog-article]: https://medium.com/@fokusman/the-easiest-way-to-check-all-your-npm-dependency-licenses-753075ef1d9d
