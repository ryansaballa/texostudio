module.exports = function(eleventyConfig) {
  // Copy CSS so it shows up in _site
  eleventyConfig.addPassthroughCopy("css");
  // Copy images to show up in _site
  eleventyConfig.addPassthroughCopy("images");
  // Copy files in admin so it shows up in _site
  eleventyConfig.addPassthroughCopy("admin");
  // ✅ Add custom date filter
  eleventyConfig.addFilter("date", (dateObj, format = "LLL d, yyyy") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });
  // Add collection for blog articles
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("article/*.md").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",       // 👈  root content folder
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
