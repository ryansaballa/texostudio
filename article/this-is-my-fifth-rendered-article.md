---
title: Streamlined Approval Workflow
slug: streamlined-approval-workflow
layout: layouts/post.njk
permalink: articles/{{slug}}/
tags: articles
description: "A proposal for CIRO Investor Alerts using forms for streamlining approvals and content updates with HTML, CSS and JavaScript."
date: 2026-02-08
image: "/images/front-end-img.jpg"
images:
  - src: "/images/front-end-img.jpg"
    alt: "Front end image"
  - src: "/images/article-img.jpg"
    alt: "article image"
---

This mock-up web application was built using plain HTML, CSS and JavaScript to support a streamlined approval workflow between departments. This would act a proposal for building a Content Type using Drupal CMS.

## Organization

**Canadian Investment Regulatory Organization**

The Canadian Investment Regulatory Organization (CIRO) is the national self-regulatory organization overseeing Canada’s investment and mutual fund sectors. Formed through the consolidation of IIROC and the MFDA, CIRO works to protect investors and strengthen confidence in the Canadian capital markets.

Investor Alerts inform the main public on their website informing them about potential harmful activity by organizations and individuals.

## Purpose of the Redesign and the Goal

The goal is to disseminate alerts quickly to the public to uphold the organization's mission to protecting investors from fraudulent activity. This process involves approval of alerts from the Complaints and Inquiry, social media messaging from the Communication team and website publishing within two hours of approval.

The redesign provides a new layout for the public to identify alerts and for web content administrators to keep information readable and accessible.

## Strategy

As a web maintainer, one of the challenges in sharing alerts to the public was the amount of duplicate information was required to post in two different content types: creating a new publication and updating an existing list of alerts.

This becomes crucial, as the time it takes to share on both social media and on the website is dependent on where the information is housed - the website.

**Creating a new publication**

Much of the content used in the publication for alerts gets recycled into a shorter message used to update an existing list of alerts.

**Existing Alerts**

Recycled messaging gets appended to the list of Investor Alerts that include content that spans as far back as 2021 - highlighting the organization's branding before the amalgamation. The Investor Alert page soon becomes an ongoing list of items hidden inside an accordion component.

## Challenges

### Publication Process

- Social media messaging is dependent on including links that is housed on the website
- Alerts are shared in a formal publication and remixed into a shorter alert that involve duplicating content

### User Friendly Layout

- The page has grown into a large webpage with on-going list of alerts include content from 2021 and before the amalgamation
- An accessible accordion with aria-labels but many items in the accordion container creates high interaction cost and cognitive load as readers scan headings, decide what to open and click repeatedly to expand and collapse

## Design Strategy and Development

[View the proposed Investor Alerts web application](https://investor-alerts-rs.netlify.app/)

### Investor Alert Form

Include two sections, Alert Details, Category and Risk Level which provide screen readers structure and meaning to groups of related form fields. This form will house all information the feeds into creating the main publication and a summary that gets added to the list of previous Investor Alerts.

### Admin View

Includes two sections, Ready for Review and Overdue alerts that give the site maintainer the ability to quality check alerts that ready for publishing and to delete alerts.

An expiration function was included that compares dates which lists out alerts under the overdue section if it exceeds two days being published.

### Main Page

The most recent alert is highlighted with a green border with all other alerts listed sorted by date in descending order. The component card layout for each alert has been styled with the type of alert category, title, short summary and related link.

The purpose is to provide clear labels of the alert for readability and for users to scan easily in comparison to collapsible items in an accordion.

## Reflection

Creating the prototype using Drupal's site building features such as creating content types and view - making this process more realistic by using content from a form to create a publication and a templated view of alerts.

An updated feature I would have included would be to expand into an archival page with search features that allow readers to sort and filter by date and investor alert type. Including a call to action link to the archive of alerts can be beneficial to identifying fraudulent activity trends for enforcement and help investors be more aware.
