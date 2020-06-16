module.exports = function () {
  "use strict";

  return {
    options: {
      'indent_inner_html': false,
      'indent_size': 2,
      'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u', 'textarea', 'code', 'pre'],
      'indent_char': ' ',
      'wrap_line_length': 80,
      'brace_style': 'collapse',
      'preserve_newlines': true,
      'max_preserve_newlines': 2,
    },
    html: {
      expand: true,
      cwd: '<%= config.html %>',
      src: ['**/*.html'],
      dest: '<%= config.html %>'
    }
  };
};
