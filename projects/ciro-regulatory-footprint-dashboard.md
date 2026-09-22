---
title: From Data to Map: Visualizing Regulated Dealers
tags:
  - projects
layout: layouts/projects.njk
slug: from-data-to-map-visualizing-regulated-dealers
permalink: /projects/{{ slug }}/
description: "An interactive React and Leaflet dashboard that visualizes CIRO-regulated dealers across Canada, combining geographic exploration with automated regulatory data collection."
image: /images/bed-tyndale-05.png
date: 2026-09-21
images:
  
---

## Overview

The Dealer Explorer is a React-based web application that uses **Leaflet** to render an interactive map of Canada and display dealer statistics by province.

The solution combines geographic visualization with automated data collection through a custom JavaScript scraper that retrieves dealer information from CIRO's published JSON datasets. Users can explore provincial regulatory activity, including dealer registrations, branch offices, approved persons, and firm details across Canada.

<button class="cta-project-button"><a href="https://ciro-dealers.netlify.app/">Explore the Interative Map</a></button>

---

## Challenge

The original implementation relied on manually managed map interactions and static data updates, making it difficult to maintain and scale as regulatory information changed.

Key challenges included:

- Manual collection and updating of dealer information
- Tight coupling between user interactions and displayed content
- Limited flexibility for expanding reporting and metrics
- Ongoing maintenance of repetitive event-handling logic

---

## Solution

The dashboard was rebuilt using **React** and **Leaflet**, creating a component-based application that dynamically updates as users navigate the map.

A custom JavaScript scraper was developed to automate the collection of dealer data directly from CIRO's published JSON datasets, capturing:

- Dealer names
- Registration categories
- Provincial locations
- Branch office information
- Website URLs
- Contact details
- Regulatory metadata

**AI-assisted development was used to accelerate the creation of the scraper, helping analyze CIRO's data structure, generate extraction logic, and streamline testing and refinement.**

This automated approach significantly reduced manual effort while improving the accuracy and timeliness of the information presented.

---

## Key Features

### Interactive Canada Map

Leaflet provides province-level navigation, allowing users to explore regulatory activity geographically through an intuitive and responsive interface.

### Dynamic Data Visualization

React state management enables province-specific information to update instantly based on user selections, creating a seamless experience.

### Automated Data Collection

A browser-based JavaScript scraper extracts and structures dealer information from CIRO datasets, ensuring regulatory information remains current.

### Provincial Detail Views

Users can view:

- Mutual Fund Dealer approved persons
- Mutual Fund Dealer branch offices
- Investment Dealer approved persons
- Investment Dealer branch offices
- Dealer locations and contact information

---

## Outcome

The project transformed a static regulatory map into an interactive, data-driven dashboard that provides greater visibility into CIRO's regulatory footprint across Canada.

Key benefits include:

- Interactive geographic visualization using Leaflet
- Automated collection of dealer information
- Reduced manual data maintenance
- Faster identification of newly regulated firms
- Improved scalability through reusable React components
- More timely and accurate regulatory insights
- A strong foundation for future analytics and reporting initiatives

The result is a modern regulatory dashboard that enables users to efficiently explore and monitor dealer activity across Canada while leveraging automated data collection to keep information current and actionable.
