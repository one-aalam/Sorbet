
  var _do = require('./config').settings,
	    utils = require('./utils');

	if(_do && _do.showLogs === false){
		console.log('No gulp messages to be shown!');
		utils.supressLogs();
	}


	module.exports.env = require('require-dir')('./env');
	module.exports.tasks = require('require-dir')('./tasks');
