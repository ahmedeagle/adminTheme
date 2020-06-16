module.exports = function () {
  "use strict";

  return {
    options: {
      enabled: true,
      duration: 2
    },
    html: {
      options: {
        message: 'HTML Generated!'
      }
    },
    js: {
      options: {
        message: 'JS Generated!'
      }
    },
    css: {
      options: {
        message: 'CSS Generated!'
      }
    },
    watching: {
      options: {
        message: 'Watching PUG & SCSS Change!'
      }
    },
    all: {
      options: {
        message: 'All Generated!'
      }
    }
  };
};
