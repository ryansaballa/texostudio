---
title: Reflections and JavaScript
slug: reflections-and-javascript
layout: layouts/post.njk
permalink: articles/{{slug}}/
tags: articles
description: "Creating a daily reflection journal with HTML, CSS and JavaScript."
date: 2026-02-08
image: "/images/front-end-img.jpg"
images:
  - src: "/images/front-end-img.jpg"
    alt: "Front end image"
  - src: "/images/article-img.jpg"
    alt: "article image"
---

I built a small hand-coded web app using HTML, CSS, and JavaScript to help users reflect on and answer three guided questions step by step.

The idea was to keep things simple but functional: users land on a page with three questions, then move through them one at a time, typing in their responses as they go. Each answer is saved using localStorage, so progress isn’t lost if the page is refreshed or closed.

On the development side, I focused on managing state in vanilla JavaScript—tracking which question the user is on, updating the UI dynamically, and persisting data in the browser without a backend. Styling with CSS helped keep the experience clean and distraction-free so the focus stays on reflection.

By the end, I had a lightweight journaling flow that feels personal, persistent, and intentionally minimal—built entirely without frameworks.

Try thinking of three questions to focus on and [test the journal on the web](https://reflect-focus-tab-rs.netlify.app/)
