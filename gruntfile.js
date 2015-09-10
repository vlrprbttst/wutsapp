module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {

      views: {
        files: ['views/**/*.html']
      }, // watch images added to src

      images: {
        files: ['images/src/**/*.{png,jpg,gif,ico}'],
        tasks: ['newer:imagemin']
      }, // watch images added to src

      deleting: {
        files: ['images/src/*.{png,jpg,gif,ico}'],
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
          src: ['**/*.{png,jpg,gif,ico}'], // Actual patterns to match
          dest: 'images/dist/' // Destination of compressed files
        }]
      }
    }, //end imagemin

    sass: {
      dist: {
        options: {
          style: 'compressed', //no need for config.rb
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
          })
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
          'readme.md',
           'bower.json',
          '.DS_Store',
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

  grunt.registerTask('default', ["copy:build", "browserSync", "watch"]);
  grunt.registerTask('dist', ["requirejs:dist", "copy:dist", "browserSync", "watch"]);
  grunt.registerTask('ftp', ["requirejs:dist", "copy:dist", "ftpush"]);

};
