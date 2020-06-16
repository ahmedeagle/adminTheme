module.exports = function () {
  "use strict";

  return {
    html: '<%= config.html %>/'+myTextDirection+'/'+myLayoutName,
    sk_html: '<%= config.starter_kit %>/'+myTextDirection+'/'+myLayoutName,
    documentation: '<%= config.documentation %>/'+myTextDirection+'/'+myLayoutName,
    css: '<%= config.destination.css %>',
    css_rtl: '<%= config.destination.css_rtl %>',
    js: '<%= config.destination.js %>',
  };
};
