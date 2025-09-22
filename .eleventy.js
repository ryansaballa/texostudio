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
  // Transform rendered images in html with image wrapping on article images
  eleventyConfig.addTransform("wrapImages", function(content, outputPath){
    // applies to only html files
    if (outputPath && outputPath.endsWith(".html")){
      // checks if html files live under /articles
      if (outputPath.includes("/articles/")){
        return content.replace(/img(.*?)\/?>/g, (match) => {
          return `<figure class= styled-image>${match}</figure>`;
        });
      }
    }
    return content;
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
