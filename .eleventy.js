module.exports = function(eleventyConfig) {
  // Copy CSS so it shows up in _site
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    dir: {
      input: "article",     // 👈 your root content folder
      includes: "../_includes",
      output: "_site"
    }
  };
};
