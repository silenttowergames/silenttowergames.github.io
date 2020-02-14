module.exports = function(grunt){
	const sass = require('node-sass');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		cssmin: {
			target: {
				files: [
					{
						expand: true,
						cwd: 'output/assets/css',
						src: [ '*.css', '!*.min.css', ],
						dest: 'output/assets/css',
						ext: '.min.css',
					}
				],
			},
		},
		
		sass: {
			options: {
				implementation: sass,
				sourceMap: true,
			},
			
			dist: {
				files: [
					{
						expand: true,
						cwd: 'scss/',
						src: [ '*.sass', '*.scss', '!_*.sass', '!_*.scss', ],
						dest: 'output/assets/css',
						ext: '.css',
					},
				],
			},
		},
		
		watch:{
			css:{
				files:['**/*.sass','**/*.css?','^**/_*.sass','**/*.scss','^**/_*.scss'],
				tasks:['sass','cssmin']
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', [ 'watch' ]);
};