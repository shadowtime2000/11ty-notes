const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const criticalCSS = require("eleventy-critical-css");
const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight, {
        lineSeparator: "\n"
    });
    eleventyConfig.addPlugin(criticalCSS, {
        minify: true
    });
    eleventyConfig.addPlugin(cacheBuster({}));
    eleventyConfig.addPassthroughCopy("js");
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}