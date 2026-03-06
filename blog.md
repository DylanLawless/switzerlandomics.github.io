---
layout: page
title: Blog pages
permalink: /blog/
---

<div class="strip">
  <div class="container pt-6 pb-6 pb-md-3">
        {% include newsletter_signup.html
          id="bd-email-home"
          label="Subscribe for updates"
          archive=false
          meta="New technology releases and blog posts."
        %}
  </div>
</div>

<ul>
  {% assign posts = site.blog | sort: 'date' | reverse %}
  {% for post in posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> — {{ post.date | date: "%Y-%m-%d" }}
    </li>
  {% endfor %}
</ul>

