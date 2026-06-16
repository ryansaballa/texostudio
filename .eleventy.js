module.exports = function (eleventyConfig) {
  // Copy CSS so it shows up in _site
  eleventyConfig.addPassthroughCopy("css")
  // Copy JS so it shows up in _site
  eleventyConfig.addPassthroughCopy("js")
  // Copy images to show up in _site
  eleventyConfig.addPassthroughCopy("images")
  // Copy files in admin so it shows up in _site
  eleventyConfig.addPassthroughCopy("admin")
  // Add collection for blog articles
  eleventyConfig.addCollection("article", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("article/*.md")
      .sort((a, b) => b.date - a.date)
  })
  // Add collection for projects
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("projects/*.md")
      .sort((a, b) => b.date - a.date)
  })

  // Shortcode for multiple images in styled image wrapper

  eleventyConfig.addShortcode("ImageWrapperMultiple", function (images) {
    // image array
    const imageTags = images
      .map(
        (img) =>
          `<div class="styled-image">
          <img src="${img.src}" alt="${img.alt}" class="image" loading="lazy" />
          ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ""}
        </div>`,
      )
      .join("")

    return `
        <div class="image-flex-container">
          ${imageTags}
        </div>
        `
  })

  // Shortcode for styled image wrapper
  eleventyConfig.addShortcode("ImageWrapper", function (src, alt, caption) {
    return `
    <div class="image-flex-container">
      <figure class="styled-image">
      <img src="${src}" alt="${alt}" class="image" loading="lazy" />
      ${caption ? `<figcaption>${caption}</figcaption>` : ""}
      </figure>
    </div>
      `
  })

  // Return config
  return {
    dir: {
      input: ".", // 👈  root content folder
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk", // enables nunjucks in markdown
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
}
