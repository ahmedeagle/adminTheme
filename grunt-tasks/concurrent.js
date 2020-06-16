module.exports = function() {
	"use strict";

	return {		
		options: {
			logConcurrentOutput: true,
			limit: 10,
		},
		monitor: {
			tasks: ["watch:pug", "watch:sass"/*, "server"*/, "notify:watching"]
		},	
	}
};