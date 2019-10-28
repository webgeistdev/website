---
layout: post
title: "Bundler can be used without a gemfile"
date: 2019-01-22 12:00:00 +0100
category: ruby
---

I didn't know that up until now, but obviously, you can inline bundler within your ruby scripts. No need
to have a dedicated Gemfile or to call bundler before calling your script. Just do:

```ruby
require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'rest-client'
end

puts RestClient.get('https://news.ycombinator.com/')
```

You can see [the source on their GitHub repo][bundler-inline]. This becomes especially interesting not only
for small scripts, but also to have small executable files, that behave like a regular executable.

### A small example

Image being able to do this from your command line:

```bash
$ weather berlin
Today it is -2.51°C in Berlin with few clouds.
```

Easily done:

```ruby
#!/usr/bin/env ruby
require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'json'
  gem 'rest-client'
end

API_KEY = 'XXX' # put your api key here
city = ARGV.count > 0 ? ARGV.first : 'Hamburg,de'

body = RestClient.get("https://api.openweathermap.org/data/2.5/weather?q=#{city}&appid=#{API_KEY}&units=metric")

response = JSON.parse(body)

temp = response['main']['temp']
city = response['name']
weather = response['weather'][0]['description']

puts "Today it is #{temp}°C in #{city} with #{weather}."
```

Put this into a `weather` file, make it exectuable `chmod +x weather` and then put it into your `PATH` variable.

[bundler-inline]: https://github.com/bundler/bundler/blob/master/lib/bundler/inline.rb
