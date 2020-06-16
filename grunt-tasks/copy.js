module.exports = function() {
    "use strict";

    return {
        js: {
            files:[{
                expand: true,
                cwd: '<%= config.source.js %>',
                src: '**/*',
                dest: '<%= config.destination.js %>',
            }],
        },
        rename: {
            files:[{
                expand: true,
                src: ['html/' + myTextDirection + '/' + myLayoutName + '/' + dashboardRename],
                rename: function() {
                    return 'html/' + myTextDirection + '/' + myLayoutName + '/' + 'index.html';
                }
            }],
        }
    };
};