module.exports = function(eleventyConfig) {
  // Copy CSS so it shows up in _site
  eleventyConfig.addPassthroughCopy("css");
  // Copy JS so it shows up in _site
  eleventyConfig.addPassthroughCopy("js")
  // Copy images to show up in _site
  eleventyConfig.addPassthroughCopy("images");
  // Copy files in admin so it shows up in _site
  eleventyConfig.addPassthroughCopy("admin");


  // Add collection for blog articles
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("article/*.md").sort((a, b) => b.date - a.date);
  });

  // Shortcode for styled image wrapper
  eleventyConfig.addShortcode("ImageWrapper", function(src, alt){
    return `
      <div class="styled-image">
      <img src="${src}" alt="${alt}" class="image" loading="lazy" />
      </div>
      `;
  });

  // Return config
  return {
    dir: {
      input: ".",       // 👈  root content folder
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk", // enables nunjucks in markdown
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
