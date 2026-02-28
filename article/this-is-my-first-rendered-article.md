---
title: Creating Accessible Tables
slug: creating-accessible-tables
layout: layouts/post.njk
permalink: articles/{{slug}}/
tags: articles
description: "How to create accessible tables in PDF documents for screen reading technologies"
date: 2026-02-06
---

Tables are useful for displaying data and organizing information neatly. However, table headers have a semantic purpose: they should define the scope of a group of related cells. Using table headers solely for visual formatting should instead be treated as a label, not a true header.

The first decision to creating tables is to decide whether data points will be related to one another or not.

- If the data in the table is interdependent, defined headers are needed to group data
- If the data in the table is not related, defined headers are not needed

## Layout Tables

Layout tables are for visual formatting. The content is formatted like a table to outline each paragraph in a specified structure, but there is no meaningful relationship in between the rows and columns.

Labels and fields appear like headings in a table but they are not defined. Content in a layout table are tagged independently as a list or paragraph.

An example would be a Bus Schedule in a table layout below:

| Route | 12A  | 45B  | 21C  |
| ----- | ---- | ---- | ---- |
| 7:00  | 7:05 | 8:10 | 9:15 |
| 8:00  | 7:20 | 8:15 | 9:17 |
| 9:00  | 7:25 | 8:21 | 9:20 |

## Data Tables

Data tables have implied meaning that are structured semantically to tell assistive technologies about defined headers and columns. Each data point displays structured information where the relationships between rows and columns are meaningful.

If a header can describe multiple cells across its defined scope (row, column) then it is a true header, otherwise it is a label and is formatted as a layout table.

Ask yourself, _If the headers are removed, do the data cells look ambiguous?_

An example of organic vs non-organic produce in Canada ([link](https://bati-itao.github.io/learning/esdc-self-paced-web-accessibility-course/module4/multi-level-headers.html))

<table>
  <thead>
    <tr>
      <th scope="col">Category</th>
      <th scope="col">Item</th>
      <th scope="col">Canada</th>
      <th scope="col">USA</th>
      <th scope="col">UK</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="rowgroup" rowspan="3">Organic (1kg)</th>
      <th scope="row">Apples</th>
      <td>$3.62</td>
      <td>$4.87</td>
      <td>$2.69</td>
    </tr>
    <tr>
      <th scope="row">Bananas</th>
      <td>$1.47</td>
      <td>$1.68</td>
      <td>$1.60</td>
    </tr>
    <tr>
      <th scope="row">Onions</th>
      <td>$2.28</td>
      <td>$2.81</td>
      <td>$1.44</td>
    </tr>
    <tr>
      <th scope="rowgroup" rowspan="3">Non-organic (1kg)</th>
      <th scope="row">Apples</th>
      <td>$3.37</td>
      <td>$4.53</td>
      <td>$2.50</td>
    </tr>
    <tr>
      <th scope="row">Bananas</th>
      <td>$1.37</td>
      <td>$1.56</td>
      <td>$1.49</td>
    </tr>
    <tr>
      <th scope="row">Onions</th>
      <td>$2.12</td>
      <td>$2.61</td>
      <td>$1.34</td>
    </tr>
  </tbody>
</table>
