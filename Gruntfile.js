module.exports = function (grunt) {
  const sass = require('node-sass');

  // Configuration
  grunt.initConfig({
    watch: {
      sass: {
        files: ['src/css/scss/**/*.scss'],
        tasks: ['sass', 'cssmin'],
      },
    },
    sass: {
      //concat all scss files
      options: {
        implementation: sass,
        sourceMap: false,
      },
      dist: {
        files: {
          'src/css/dist/site.css': 'src/css/scss/site.scss',
        },
      },
    },
    cssmin: {
      //minify css file
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
      },
      target: {
        files: {
          'src/css/dist/site.min.css': 'src/css/dist/site.css',
        },
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Register tasks
  grunt.registerTask('watch-sass', 'watch:sass');
  grunt.registerTask('default', 'watch');
};
