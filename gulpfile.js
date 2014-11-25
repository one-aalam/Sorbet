// load gulp
var gulp = require('gulp-help')(require('gulp')),
 // Tasks
	tasks = require('./gulp'),
	// Server
	config = require('./gulp/config'),
	//
	path = require('path');


/* Hackful way to supress gulp messages */
/*
var cl = console.log;
console.log = function () {
    var args = Array.prototype.slice.call(arguments);
    if (args.length) {
        if (/^\[.*gulp.*\]$/.test(args[0])){
            return;
        }
    }
    return cl.apply(console, args);
};*/

	//@TODO
	// Use gulp-changed, gulp-bower-files/ wiredep
