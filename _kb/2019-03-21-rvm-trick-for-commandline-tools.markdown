---
layout: post
title: "Little RVM trick to use CLI tools using a specific Ruby version."
category: ruby
---

If you are like me and have multiple versions of Ruby installed, you probably have [RVM][rvm] (or [RBEnv][rbenv]) installed.

If you use RVM, this one might be interesting for you. (And if you use RBEnv, you can probably do something similar.)

The way RVM works, is that it creates a separate space for every ruby version to install gems to. So when you `gem install` a gem
while you are using Ruby version 2.4.0 (`rvm use 2.4.0`) and you switch to use version 2.5.0, you would not be able to run your
gem anymore, since it is not installed in the gemset you are in anymore.

But you can to the following thing. Imagine you have done `gem install ruco` while using version 2.4.0. You can do this:

```ruby
rvm 2.4.0 exec ruco
```

And it would not matter if you have switched your version to another version. You can also bring it one step forward and make it
even nicer with an alias:

```bash
alias r="rvm 1.9.2 exec ruco"
```

[rvm]: https://rvm.io/
[rbenv]: https://github.com/rbenv/rbenv
