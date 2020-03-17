
module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './Index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {  
      'dist/work.min.css': 'work.css'
    },
    uglify: {
      release:{
        files: {
            'dist/work.min.js': 'work.js'
            }           
          }          
     }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlmin','cssmin','uglify:release']); 
};
