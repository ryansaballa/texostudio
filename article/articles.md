---
title: Articles
date: 2025-09-12T22:50:00.000-04:00
layout: layouts/post.njk
---
<h1>Latest Articles</h1>

<ul class="blog-index">
  {% for post in collections.articles %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a><br>
      <small>{{ post.date | date("MMMM d, yyyy") }}</small>
    </li>
  {% endfor %}
</ul>