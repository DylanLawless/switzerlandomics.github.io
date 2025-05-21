---
layout: page
title: Blog pages
permalink: /blog/
---

<ul>
  {% assign posts = site.blog | sort: 'date' | reverse %}
  {% for post in posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> — {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>

