/* 
Minimal Theme compiler for Obsidian
Tweaked for Meridian

MIT License
Copyright (c) 2020-2021 Stephan Ango (@kepano)

Grunt is JS library that runs a sequence of compilation tasks, and watches 
the working files to automatically run this sequence whenever changes happen. 
Read more at gruntjs.com

See readme for more details:
https://github.com/kepano/obsidian-minimal
*/

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    /* Get the user-defined GLOBAL_OBSIDIAN_THEMES_PATH from .env file 
			 so that we can live reload the theme in the vault */
    env: {
      local: {
        src: ".env",
      },
    },

    /* Concatenate src css files into theme.css */
    concat_css: {
      dist: {
        files: {
          "theme.css": ["src/*.css"],
        },
      },
    },

    /* Copy the finished theme files to the vault */
    copy: {
      local: {
        expand: true,
        src: "theme.css",
        dest: "<%= GLOBAL_OBSIDIAN_THEMES_PATH %>",
        rename: function (dest, src) {
          return dest + "Meridian/theme.css";
        },
      },
      manifest: {
        expand: true,
        src: "manifest.json",
        dest: "<%= GLOBAL_OBSIDIAN_THEMES_PATH %>Meridian/",
      },
    },

    /* Watch for changes, and compile new changes */
    watch: {
      css: {
        files: ["src/*.css"],
        tasks: ["env", "concat_css", "copy"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-env");
  grunt.loadNpmTasks("grunt-concat-css");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("loadconst", "Load constants", function () {
    const themesPath = process.env.GLOBAL_OBSIDIAN_THEMES_PATH;

    if (!themesPath || themesPath === "undefined") {
      grunt.fail.fatal(
        "GLOBAL_OBSIDIAN_THEMES_PATH is not defined. Please set it in your .env file.",
      );
    }

    grunt.config("GLOBAL_OBSIDIAN_THEMES_PATH", themesPath);
  });
  grunt.registerTask("default", [
    "env:local", // Load environment variables
    "loadconst", // Load constants into grunt config
    "concat_css", // Concatenate CSS files
    "copy", // Copy the output to the theme path
    "watch", // Start watching for changes
  ]);
};
