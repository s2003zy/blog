module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        bower : {
            dev : {
                dest        :   'public/',
                js_dest     :   'public/js/lib',
                css_dest    :   'public/css/lib'
            }
        },
        clean: {
            css : ['public/css/lib'],
            js  : ['public/js/lib']
        }
    });

    // 加载grunt-contrib-clean包
    grunt.loadNpmTasks('grunt-contrib-clean');

    // 加载包含 "grunt-bower" 任务的插件。
    grunt.loadNpmTasks('grunt-bower');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['clean', 'bower']);

};