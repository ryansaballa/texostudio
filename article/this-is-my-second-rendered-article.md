---
title: Math Formulas and Assistive Technology
slug: math-formulas-and-assistive-technology
layout: layouts/post.njk
permalink: articles/{{slug}}/
tags: articles
description: "Optimizing screen-reading technologies for formulas featured in PDF documents"
date: 2026-02-07
---

Making formulas in PDFs requires tagging them. When a formula is presented as an image or a paragraph, Mathematical Markup Language (MathML) can be used - but Adobe Acrobat does not natively use or edit MathML.

Using the alternative text within tags in a PDF ensures formulas continue to remain perceivable, operable, understandable and robust.

**Tagging Formulas**

Since the formula is part of a sentence, wrap the formula with an inline <span> tag nested in a paragraph tag declaring the actual text.

- insert Actual text on the inner span tag
- use human language to avoid unambiguous spoken math (avoid 'x' spoken letter)
  - X = times
  - / = divided by

Since the formula is its own element and not a part of a sentence, wrap the formula within a <span> tag. In alignment to the semantic of a data cell, single data points are not wrapped in a paragraph tag, but a data cell. Therefore, a span tag is used to declare the actual text.

    Insert Actual text on the p tag
    Use human language to avoid unambiguous spoken math
