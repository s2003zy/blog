module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            dev: {
                dest: 'public/',
                js_dest: 'public/js/lib',
                css_dest: 'public/css/lib'
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-bower');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['bower']);

};