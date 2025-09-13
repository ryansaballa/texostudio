module.exports = function(eleventyConfig) {
  // Copy CSS so it shows up in _site
  eleventyConfig.addPassthroughCopy("css");
  // Copy images to show up in _site
  eleventyConfig.addPassthroughCopy("images");
  // Copy files in admin so it shows up in _site
  eleventyConfig.addPassthroughCopy("admin");

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
