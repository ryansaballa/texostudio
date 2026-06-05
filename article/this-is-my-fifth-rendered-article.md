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

## Organization

**Canadian Investment Regulatory Organization**

The Canadian Investment Regulatory Organization (CIRO) alerts the main public on their website about potential fraudulent activity by organizations and individuals.

## Purpose of the Redesign and the Goal

Investor Alerts help protect investors by quickly publishing fraud warnings to the public. The process requires approved alerts to be published on the website and shared through social media within two hours.

This redesign improves both the public-facing experience and the publishing workflow for web administrators.

## Problem

### Content Duplication

Publishing an alert required maintaining the same information in multiple content types:

A full alert publication
A separate Investor Alerts listing

This duplicated effort slowed publishing and increased the risk of inconsistencies.

### Poor Content Discovery

The Investor Alerts page had evolved into a lengthy accordion containing alerts dating back to 2021. While accessible, the growing list increased cognitive load and required excessive interaction to browse and compare alerts.

## Solution

### Unified Alert Workflow

A single Investor Alert form captures all required information and automatically supports both:

- The full alert publication
- A summarized alert listing

Field groups such as Alert Details, Category, and Risk Level improve structure, accessibility, and content management.

### Administrative Dashboard

A dedicated admin view helps content editors:

- Review alerts before publication
- Identify overdue alerts
- Remove outdated content

An automated expiration feature flags alerts that remain published beyond two days.

### Improved User Experience

The latest alert is prominently featured, while previous alerts are displayed in a card-based layout sorted by date. Each card includes:

- Alert category
- Title
- Summary
- Related links

This approach improves readability and allows users to quickly scan alerts without navigating multiple accordion panels.

## Prototype

[View the proposed Investor Alerts web application](https://investor-alerts-rs.netlify.app/)

## Reflection

This prototype was created to validate and communicate a potential solution within the Drupal ecosystem before implementation. While the prototype itself was built using HTML, CSS, and JavaScript, it was designed around Drupal concepts such as content types, structured fields, Views, and editorial workflows.

By creating a working prototype, the Communications and Compliants & Inquiries team could evaluate the publishing experience, information architecture, and user interface before development began in Drupal.

A future enhancement would be an archive page with filtering and search capabilities, allowing users to browse alerts by date, category, and fraud type. This would help investors identify emerging fraud trends while improving long-term content discoverability.
