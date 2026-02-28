---
title: Math Formulas and Assistive Technology
slug: math-formulas-and-assistive-technology
layout: layouts/post.njk
permalink: articles/{{slug}}/
tags: articles
description: "Optimizing screen-reading technologies for formulas featured in PDF documents"
date: 2026-02-07
images:
  - src: "/images/accessible-formula-00.png"
    alt: "Front end image"
  - src: "/images/accessible-formula-01.png"
    alt: "article image"
---

Making formulas in PDFs requires tagging them. When a formula is presented as an image or a paragraph, Mathematical Markup Language (MathML) can be used - but Adobe Acrobat does not natively use or edit MathML.

Using the alternative text within tags in a PDF ensures formulas continue to remain perceivable, operable, understandable and robust.

There are situations a formula may be an image where the <strong>Formula</strong> tag is used. According to PDF/UA accessibility guidelines, “All mathematical expressions shall be enclosed within a Formula tag and shall have an ALT attribute.” The use cases below are in the context of making formulas accessible when tagged as a paragraph, with the <strong>alternative text</strong> attribute defined.

To learn more information about accessibility in different content use cases, a great resource worth checking out is visiting [accessiblewebsiteservices.com](https://accessiblewebsiteservices.com/accessible-pdfs-math-formulas-screen-readers-2/).

<hr>

## Tagging Formulas

### Use Case: Inline Tagging as one element

Since the formula is part of a sentence, wrap the formula with an inline <span> tag nested in a paragraph tag declaring the actual text.

- insert Actual text on the inner span tag
- use human language to avoid unambiguous spoken math (avoid 'x' spoken letter)
  - X = times
  - / = divided by

Below is a screenshot of how to make a formula accessible in a PDF document, using the span tag:
<em>The alternative text would be <strong>"1.00% times number of days to maturity 365"</strong>.</em>

{% ImageWrapper images[0].src , images[0].alt %}

### Use Case: Inline Tagging with another element

Since the formula is its own element and not a part of a sentence, wrap the formula within a <span> tag. In alignment to the semantic of a data cell, single data points are not wrapped in a paragraph tag, but a data cell. Therefore, a span tag is used to declare the actual text.

- Insert Actual text on the paragraph tag
- Similar to the use case above, use human language to avoid unambiguous spoken math

Below is a screenshot of how to make a formula accessible with a surrounding paragraph tag:

{% ImageWrapper images[1].src , images[1].alt %}
