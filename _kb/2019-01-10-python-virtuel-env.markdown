---
layout: post
title: "How to use virtual environments in python 3"
share_text: "How to use virtual envs in #python"
category: python
---

Virtual environments are a great way to not clutter your global namespace with all the python packages you might only
use in one project.

First install it (here is the ubuntu-like version):

```bash
sudo apt install python3-pip python3.venv
```

Then you can create a virtual env for your project using the `venv` module in `python3`. So in your project path do:

```bash
python3 -m venv .env # creates a folder .env where all the environment is stored
```

Whenever you are in your project folder you can activate this environment and everything you install and required goes
and comes from that active environment.

```bash
source .env/bin/activate # call this in your project-path
```

This will put a `deactivate` command to your path, that you can call, when you want to deactivate that environment again.

```bash
deactivate
```

I like to put the `.env` files into my project folders, since they are mostly closely related, but theoretically you don't
have to do this. You could put all the different environments into a (user-)global path like `~/.venvs/` and activate
those when you need them:

```bash
python -m venv ~/.venv/my-env1
source ~/.venv/my-env1/bin/activate
```
