---
title: Weaving Stories and Programs for Community Impact
tags:
  - projects
layout: layouts/projects.njk
description: "Led the Communications Team and Operations Director at Toronto City Mission (TCM) to enhance their programs and offerings for children and teenagers in the community with impactful stories, structured landing pages."
slug: toronto-city-mission
date: 2026-01-10
permalink: projects/{{slug}}/
image: /images/tcm-screenshot-06.png
images:
  - src: "/images/tcm-screenshot-00.png"
    alt: "image"
  - src: "/images/tcm-screenshot-01.jpg"
    alt: ""
  - src: "/images/tcm-screenshot-02.png"
    alt: ""
  - src: "/images/tcm-screenshot-03.png"
    alt: ""
  - src: "/images/tcm-screenshot-04.png"
    alt: ""
  - src: "/images/tcm-screenshot-05.png"
    alt: ""
  - src: "/images/tcm-screenshot-06.png"
    alt: ""
  - src: "/images/tcm-screenshot-07.png"
    alt: ""
  - src: "/images/tcm-screenshot-08.png"
    alt: ""
  - src: "/images/tcm-screenshot-09.png"
    alt: ""
  - src: "/images/tcm-screenshot-10.png"
    alt: ""
---

This website design project was completed in 6 months in collaboration with the Communications Team and Operations Director at Toronto City Mission (TCM) to enhance the organization’s offerings and community programs with kids and teens.

## Organization

Founded in 1879, Toronto City Mission is Toronto’s oldest continuous outreach serving people impacted by poverty. Rooted in Christian faith, it focuses today on long-term transformation through relationship-based programs for children, youth, and families in underserved communities.

The organization continues to provide diverse programs including: Sonshine Day Camp, Kids in Community (KIC), Education Provided in Community (EPIC), Youth Extreme (YX), Teens Leading Communities (TLC), and Role Model Moms (RMM).

<hr>

## Purpose of the Redesign

The website redesign aims to unify stories, testimonies, and program outcomes into a clear, connected narrative while improving site architecture through parent–child page relationships and a tighter content taxonomy.

By enhancing a Squarespace template with JavaScript and redesigning the homepage with dynamic blog and event content, the project strengthens calls to action to improve program visibility and increase enrolment.

## Research and Strategy

### Content Audit

There was a good amount of information related to volunteering opportunities, communities and programs that people can get involved in. The focus was to understand the organization’s current structure and find opportunities to identify categories and enhance the learning journey for areas of volunteering.

The content audit was focused on how to unite the organization’s impact with stories from staff, volunteers, and guest speakers through key communications collateral such as events and newsletters. Designing well-structured blog categories with meaningful, SEO-rich content was the goal to improve navigation and discoverability.

{% ImageWrapperMultiple [
  { src: "/images/tcm-screenshot-00.png", alt:"screenshot 1" },
  { src: "/images/tcm-screenshot-02.png", alt:"screenshot 2" }
]%}

### Non-profit Website Layout Research

A comparative analysis was conducted to evaluate non-profit website layouts and call-to-action strategies, examining how readers navigate for information about volunteering and donating. The study focused on identifying key areas of call-to-action and grid layouts across similar organizations including Yonge Street Mission, Intervarsity Canada, and Daily Bread Food Bank.

[View the research proposal presentation on Google](https://docs.google.com/presentation/d/e/2PACX-1vQxuxCejLX9uakSwPQmETuDAy0y5PQLq32mCdF2njk5nZe6IBdinjqPgUZ4o8E6iSwD6x0N2yLt3vWN/pub?start=false&loop=false&delayms=3000)

## Challenges

**Content migration and re-creating old blog content with new URLs for impact stories that match their category**

The manual process involved batching each content item with the appropriate impact story category, descriptive title, description, SEO metadata, author, and published date.

Creating a Notion-documented workbench ensured every entry was properly migrated and formatted in the new webpage layout, while re-creating stories included restoring internal links to their corresponding program, community, or blog pages.

{% ImageWrapper images[3].src, images[0].alt %}

**Working within the constraints of Squarespace templates**

While templating navigation parent pages, we encountered a limitation in Squarespace that prevented users from directly accessing a parent page, instead automatically redirecting them to its first child page in the navigation.

The solution was to use JavaScript event handlers to override this limitation, ensuring direct access to each main section.

## Design Strategy and Development

The homepage, communities, programs and impact pages were redesigned with concise descriptions, calls-to-action and internal linking to boost search engine rankings, content engagement and website structure.

Below is a summary of changes of the main sections on the website. Screenshots are ordered by the old website layout featured on the left to the new designs on the right.

### Homepage

Redesigned the homepage with a full-width layout, integrating clear calls to action for programs, communities, volunteering, stories, events, and donations.

{% ImageWrapperMultiple [
  { src: "/images/tcm-screenshot-04.png", alt:"screenshot 1" },
  { src: "/images/tcm-screenshot-09.png", alt:"screenshot 2" }
]%}

### Program and Community Landing Pages

The layout was redesigned for a wider content fit, featuring internal links to related communities with program and volunteer information, while giving readers the opportunity to explore additional stories connected to each program.

{% ImageWrapperMultiple [
  { src: "/images/tcm-screenshot-10.png", alt:"screenshot 1" },
  { src: "/images/tcm-screenshot-07.png", alt:"screenshot 2" },
  { src: "/images/tcm-screenshot-10.png", alt:"screenshot 2" },
  { src: "/images/tcm-screenshot-08.png", alt:"screenshot 2" }
]%}

### Collection of Stories

Linear scrolling blogs were redesigned into a branded grid of stories, structured with meaningful categories highlighting staff and volunteer perspectives, key community impact stories, and organizational announcements.

{% ImageWrapperMultiple [
  { src: "/images/tcm-screenshot-05.png", alt:"screenshot 1" },
  { src: "/images/tcm-screenshot-06.png", alt:"screenshot 2" }
]%}

## Reflection

### Applying JavaScript in SquareSpace templates

Squarespace's default navigation behavior redirects parent links to their first child page. To meet the organization's requirement for dedicated landing pages (About, Communities, Programs, Impact, Donate), I implemented JavaScript event handlers to override this limitation, ensuring direct access to each main section.

An example of an event handler for the programs page is below:

- once the page is fully loaded, each new child page is targeted
- an if function is used to check if the link exists and prevents errors if the link isn't found
- a click event handler is attached to the link, and runs the code to stop navigating to the child page
- the user is redirected to the main landing page ("/programs")

```javascript
document.addEventListener("DOMContentLoaded", function () {
  var link = document.querySelector(
    'a.header-nav-folder-title[href="/programs-toronto-city-mission"]',
  )

  if (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault()
      window.location.href = "/programs"
    })
  }
})
```
