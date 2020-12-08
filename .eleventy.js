const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const criticalCSS = require("eleventy-critical-css");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight, {
        lineSeparator: "\n"
    });
    eleventyConfig.addPlugin(criticalCSS, {
        minify: true
    });
    eleventyConfig.addPassthroughCopy("js");
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}