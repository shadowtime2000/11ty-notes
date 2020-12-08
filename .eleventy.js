const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");

const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight, {
        lineSeparator: "\n"
    });
    eleventyConfig.addPlugin(cacheBuster({}));

    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
        } else {
            return content;
        }
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}