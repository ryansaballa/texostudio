module.exports = function(eleventyConfig) {
  // Copy CSS so it shows up in _site
  eleventyConfig.addPassthroughCopy("css");
  // Copy images to show up in _site
  eleventyConfig.addPassthroughCopy("images");
  // Copy files in admin so it shows up in _site
  eleventyConfig.addPassthroughCopy("admin");
  // Add collection for blog articles
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("article/*.md").sort((a, b) => b.date - a.date);
  });
  // Enable manual image wrapping on article images
  eleventyConfig.addPairedShortcode("imageWrap", function(content){
    return `<figure class="styled-image">
            ${content}
            </figure>`;
  });
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
