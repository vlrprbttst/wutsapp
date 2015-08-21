module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		watch : {

			images : {
				files : ['images/src/**/*.{png,jpg,gif}'],
				tasks : ['newer:imagemin']
			}, // watch images added to src

			deleting : {
				files : ['images/src/*.{png,jpg,gif}'],
				tasks : ['delete_sync']
			}, // end of delete sync

			scripts : {
				files : ['js/libs/*.js', 'js/custom/*.js'],
				tasks : ['concat', 'uglify'],
				options : {
					spawn : false,
				}
			}, //end of watch scripts

			css : {
				files : ['sass/**/*.scss'],
				tasks : ['sass', 'postcss'],
				options : {
					spawn : false,
				}
			}, //end of sass watch

			grunt : {
				files : ['gruntfile.js']
			}
		}, //end of watch

		/* ====================================================================================================================================================
		 * ====================================================================================================================================================

		 Tasks

		 ====================================================================================================================================================
		 ====================================================================================================================================================
		 */

		delete_sync : {
			dist : {
				cwd : 'images/dist',
				src : ['**'],
				syncWith : 'images/src'
			}
		}, // end of delete sync

		imagemin : {
			dynamic : {
				files : [{
					expand : true, // Enable dynamic expansion
					cwd : 'images/src/', // source images (not compressed)
					src : ['**/*.{png,jpg,gif}'], // Actual patterns to match
					dest : 'images/dist/' // Destination of compressed files
				}]
			}
		}, //end imagemin

		concat : {
			dist : {
				src : ['js/libs/*.js', 'js/custom/*.js'],
				dest : 'js/build/production.js'
			}
		}, //end concat

		uglify : {
			dist : {
				src : 'js/build/production.js',
				dest : 'js/build/production.min.js'
			}
		}, //end uglify

		sass : {
			dist : {
				options : {
					style : 'nested', //no need for config.rb
					compass : 'true'
				},
				files : {
					'css/main.css' : 'sass/main.scss'
				}
			}
		}, //end of sass

		postcss : {
			options : {
				map : true,
				processors : [
				require('autoprefixer-core')({
					browsers : 'last 2 version, IE 9'
				}), // add vendor prefixes. for more: https://github.com/ai/browserslist
				require('cssnano')() // minify the result
				]
			},
			dist : {
				src : 'css/main.css'
			}
		},



		browserSync : {
			dev : {
				bsFiles : {
					src : ['css/*.css', 'images/*.*', 'js/build/production.min.js', '*.php', 'includes/*.php', '!.sass-cache']
				},
				options : {
					proxy : "localhost/wutsapp",
					watchTask : true
				}
			}
		},

		ftpush : {
			build : {
				auth : {
					host : 'ftp.valeriopierbattista.com',
					port : 21,
					authKey : 'key1'
				},
				src : './',
				dest : '/www/projects/wutsapp/',
				exclusions : ['.sass-cache', '.git', 'images/src', 'node_modules', '.ftppass', '.gitignore', 'gruntfile.js', 'README.md', 'package.json', 'sass', '_PSD'],
				//keep : ['blog', 'cv', 'projects', 'prova'],
				simple : false,
				useList : false
			}
		}
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-delete-sync');
	
	grunt.loadNpmTasks('grunt-ftpush');

	// define default task
	grunt.registerTask('default', ["browserSync", "watch"]);
};
