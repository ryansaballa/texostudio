---
title: Weaving Stories and Programs for Community Impact
tags:
  - projects
layout: layouts/projects.njk
description: "Over six months, I worked closely with the Communications Team and Operations Director at Toronto City Mission (TCM) to redesign their website that enhances the organization’s programs and offerings for children and teenagers in the community."
slug: toronto-city-mission
date: 2026-01-10
permalink: projects/{{slug}}/
---

This website design project was completed in 6 months in collaboration with the Communications Team and Operations Director at Toronto City Mission (TCM) to enhance the organization’s offerings and community programs with kids and teens.

## Organization

Founded in 1879, Toronto City Mission is Toronto’s oldest continuous outreach serving people impacted by poverty. Rooted in Christian faith, it focuses today on long-term transformation through relationship-based programs for children, youth, and families in underserved communities.

The organization continues to provide diverse programs including: Sonshine Day Camp, Kids in Community (KIC), Education Provided in Community (EPIC), Youth Extreme (YX), Teens Leading Communities (TLC), and Role Model Moms (RMM).

## Purpose of the Redesign

The website redesign aims to unify stories, testimonies, and program outcomes into a clear, connected narrative while improving site architecture through parent–child page relationships and a tighter content taxonomy.

By enhancing a Squarespace template with JavaScript and redesigning the homepage with dynamic blog and event content, the project strengthens calls to action to improve program visibility and increase enrolment.

## Research and Strategy

### Content Audit

There was a good amount of information related to volunteering opportunities, communities and programs that people can get involved in. The focus was to understand the organization’s current structure and find opportunities to identify categories and enhance the learning journey for areas of volunteering.

- uniting the organization’s impact with stories from staff, volunteers and guest speakers with important communications collateral including events and newsletters
- designing categories for stories/blogs with meaningful and rich text for SEO and navigation

### Non-profit Website Layout Research

A comparative analysis was conducted to evaluate non-profit website layouts and call-to-action strategies, examining how readers navigate for information about volunteering and donating. The study focused on identifying key areas of call-to-action and grid layouts across similar organizations including Yonge Street Mission, Intervarsity Canada, and Daily Bread Food Bank.

[View the research proposal presentation on Google](https://docs.google.com/presentation/d/e/2PACX-1vQxuxCejLX9uakSwPQmETuDAy0y5PQLq32mCdF2njk5nZe6IBdinjqPgUZ4o8E6iSwD6x0N2yLt3vWN/pub?start=false&loop=false&delayms=3000)

## Challenges

**Content migration and re-creating old blog content with new URLs for impact stories that match their category**

- the manual process involved batching each content with the appropriate impact story category, descriptive title, description, SEO metadata, author and published date
- creating a workbench documented on notion helped with ensuring every entry was migrated and formatted in their new webpage layout with their appropriate metadata
- re-creating stories involved re-creating internal links in each story which could point to old program, community webpages or blog entries

**Working within the constraints of Squarespace templates**

- In the midst of templating webpages for the parent pages displayed on the nav bar, there was a feature in Squarespace that did not allow users to immediately view the parent page
- Squarespace lacked the availability of users clicking on a parent page without being directed to their immediate child page on the navigation bar

## Design Strategy and Development

The homepage, communities, programs and impact pages were redesigned with concise descriptions, calls-to-action and internal linking to boost search engine rankings, content engagement and website structure.

### Homepage

- Redesigned the homepage with full-width content compared to the constrained design from a previous template
- Embedded multiple calls to action for exploring programs, communities, opportunities to volunteer and dynamic content views for stories
- Provided supplementary information for events and ways to donate

### Program and Community Landing Pages

- Layout redesigned for a wider content-fit
- includes internal links to related communities that provide such programs and volunteer information
- readers have the opportunity to read more stories that are connected to each program

### Collection of Stories

- Linear scrolling blogs were redesigned to stories on a grid for readers to explore
- Blogs were renamed as stories to fit the organization’s brand related to community impact and development
- Structured content with meaningful categories that include persepectives from staff and volunteers while featuring main community impact stories and organization announcement

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
