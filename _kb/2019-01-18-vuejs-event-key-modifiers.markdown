---
layout: post
title: "How to easily react on some keys within event handlers"
category: vuejs
---

Of course, you can do the following thing in vue.js to determine if someone hit enter on your input:

```html
<input @keyup="handleKeyUp" />
```

You most likely know the concept of modifiers in vue.js as well, right? To always call `event.preventDefault()`
on an event handler, you can do

```html
<input @keyup.prevent="handleKeyUp" />
```

Did you also know, that for common command keys there are also modifiers that call the handler only for given key?

```html
<!-- this will be only called when enter key is released -->
<input @keyup.enter="handleEnterKey" />
```

See the [list of modifiers here][key-modifiers]. Since `v2.5.0` it got even better and you can react on all key names
defined in `KeyboardEvent.key` if you kebap-case them. Like:

```html
<!-- this will be only called when enter key is released -->
<input @keyup.page-down="handlePageDownKey" />
```

[key-modifiers]: https://vuejs.org/v2/guide/events.html#Key-Modifiers
