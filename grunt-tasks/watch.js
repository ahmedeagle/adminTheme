module.exports = function() {
    "use strict";

    return {
        pug: {
            files: ['<%= config.source.template %>/pages/**/*.pug'],
            tasks: ['pug:html','notify:html'],
            options: {
                interrupt: false,                
                spawn: false,
                // livereload: true,
                data: {
                    //debug: true,
                    useLayout: myLayout,
                    useDirection: myTextDirection,
                    rtl: rtl,
                    app_assets_path : '<%= config.app_assets_path %>',
                    assets_path : '<%= config.assets_path %>'
                }
            },            
        },
        sass: {
            files: ['<%= config.source.sass %>/**/*.scss', '<%= config.assets %>/scss/**/*.scss'],
            tasks: ['sass-compile', 'autoprefixer:css'],
            options: {
                interrupt: false,
                spawn: false,
                // livereload: true,
            },
        },
        documentation: {
            files: ['<%= config.source.documentation %>/pages/**/*.pug'],
            tasks: ['pug:documentation'],
            options: {
                interrupt: false,
                spawn: false,
                // livereload: true,
                data: {
                    //debug: true,
                    useLayout: myLayout,
                    useDirection: myTextDirection,
                    rtl: rtl,
                    app_assets_path : '<%= config.app_assets_path %>',
                    assets_path : '<%= config.assets_path %>'
                }
            },            
        }
    }
};