---
path: "/blog/hello-world"
date: "2017-07-12T17:12:33.962Z"
title: "Hello, world!"
cover_image: "./kitten.jpg"
tags: misc
author: Daniel
---

_The classics never go out of style, am-I-rite?!?!_ :smile:

This, my very first post, is probably not gonna be very useful.. However! It will let me test the design of this site and get the ball rolling with writing.

> "There's nothing as terrifying to a writer as a blank page"
>
> -- <cite>Probably someone else</cite>

Besides, when I rediscover this post in 10 years, it might make me chuckle!

## For good measure:

```javascript
import http from "http"

http
  .createServer((req, res) => {
    res.writeHead(418)
    res.write(`Hello, ${req.url.substr(1) || "world"}!`)
    res.end()
  })
  .listen(8080)
```
