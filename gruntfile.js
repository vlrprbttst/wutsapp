module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {

      views: {
        files: ['views/**/*.html']
      }, // watch images added to src

      images: {
        files: ['images/src/**/*.{png,jpg,gif}'],
        tasks: ['newer:imagemin']
      }, // watch images added to src

      deleting: {
        files: ['images/src/*.{png,jpg,gif}'],
        tasks: ['delete_sync']
      }, // end of delete sync

      scripts: {
        files: ['js/custom/**/*.js'],
        tasks: ['copy:build'],
        options: {
          spawn: false,
        }
      }, //end of watch scripts

      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'postcss'],
        options: {
          spawn: false,
        }
      }, //end of sass watch

      grunt: {
        files: ['gruntfile.js']
      }
    }, //end of watch

    /* ====================================================================================================================================================
     * ====================================================================================================================================================

     Tasks

     ====================================================================================================================================================
     ====================================================================================================================================================
     */

    delete_sync: {
      dist: {
        cwd: 'images/dist',
        src: ['**'],
        syncWith: 'images/src'
      }
    }, // end of delete sync

    imagemin: {
      dynamic: {
        files: [{
          expand: true, // Enable dynamic expansion
          cwd: 'images/src/', // source images (not compressed)
          src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
          dest: 'images/dist/' // Destination of compressed files
        }]
      }
    }, //end imagemin

    /*
    concat: {
      dist: {
        src: ['js/libs/*.js', 'js/custom/*.js'],
        dest: 'js/build/production.js'
      }
    }, //end concat

    uglify: {
      dist: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    }, //end uglify
    */

    sass: {
      dist: {
        options: {
          style: 'nested', //no need for config.rb
          compass: 'true'
        },
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    }, //end of sass

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({
            browsers: 'last 2 version, IE 9'
          }), // add vendor prefixes. for more: https://github.com/ai/browserslist
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'css/main.css'
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['css/*.css', 'images/*.*', 'js/build/*.*', '*.html', 'views/**/*.html','!.sass-cache']
        },
        options: {
          //proxy : "localhost/wutsapp",
          //proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>',
          server: {
            baseDir: "./",
            middleware: function(req, res, next) {
              var fs = require("fs"),
                  path = require("path"),
                  url = require("url");
              var folder = __dirname;
              var fileName = url.parse(req.url);
              fileName = fileName.href.split(fileName.search).join("");
              var fileExists = fs.existsSync(folder + fileName);
              if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
                req.url = "/index.html";
              }
              return next();
            }
          },
          watchTask: true
        }
      }
    },
    /*
        php: {
          dist: {
            options: {
              hostname: '127.0.0.1',
              port: 9000,
              base: '.', // Project root
              keepalive: false,
              open: false
            }
          }
        },
    */
    ftpush: {
      build: {
        auth: {
          host: 'ftp.valeriopierbattista.com',
          port: 21,
          authKey: 'key1'
        },
        src: './',
        dest: '/www/projects/wutsapp/',
        exclusions: [
          '.sass-cache',
          '.git',
          'images/src',
          'node_modules',
          'bower_components',
          '.ftppass',
          '.gitignore',
          'gruntfile.js',
          'README.md',
          'package.json',
          'sass',
          '_PSD'
        ],
        //keep : ['blog', 'cv', 'projects', 'prova'],
        simple: false,
        useList: false
      }
    },

    // Settings for grunt-bower-requirejs
    bower: {
      target: {
        rjsConfig: 'js/custom/require-config.js',
        options: {
          exclude: ['requirejs', 'json3', 'es5-shim']
        }
      }
    },

    // r.js compile config
    requirejs: {
      dist: {
        options: {
          dir: 'js/build/',
          modules: [{
            name: 'main'
          }],
          preserveLicenseComments: false, // remove all comments
          removeCombined: true,
          baseUrl: 'js/custom/',
          mainConfigFile: 'js/custom/main.js',
          optimize: 'uglify2',
          uglify2: {
            mangle: false
          }
        }
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: '.',
          dest: './js/build/',
          src: ['bower_components/requirejs/require.js'],
          flatten: true
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: '.',
          dest: './js/build/',
          src: ['bower_components/requirejs/require.js'],
          flatten: true
        }, {
          expand: true,
          cwd: './js/custom/',
          dest: './js/build/',
          src: ['**/*.js'],
          flatten: false
        }, ]
      },
    }

  });

  // load npm tasks
  /*
  * Not needed anymor because of 'load-grunt-tasks'
  *
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-delete-sync');
  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-ftpush');
  */

  // define default task
  grunt.registerTask('default', ["copy:build", "browserSync", "watch"]);

  // define dist task
  grunt.registerTask('dist', ["requirejs:dist", "copy:dist", "browserSync", "watch"]);

  // define dist task
  grunt.registerTask('ftpush', ["requirejs:dist", "copy:dist"]);

};
