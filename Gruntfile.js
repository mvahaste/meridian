/* 
Minimal Theme compiler for Obsidian
Tweaked for Apex by @clearlysid

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

    /* Get the user-defined OBSIDIAN_PATH from .env file 
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
        dest: process.env.HOME + process.env.OBSIDIAN_PATH,
        rename: (dest, src) => dest + "Apex/theme.css",
      },
      manifest: {
        expand: true,
        src: "manifest.json",
        dest: process.env.HOME + process.env.OBSIDIAN_PATH + "Apex/",
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
    grunt.config("OBSIDIAN_PATH", process.env.OBSIDIAN_PATH);
  });
  grunt.registerTask("default", ["env:local", "loadconst", "watch"]);
};
