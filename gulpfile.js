'use strict';

var gulp = require( 'gulp' );
var karma = require( 'karma' ).server;
var exec = require( 'child_process' ).exec;

gulp.task( 'test', function( done ) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done );
});

gulp.task( 'watch', [ 'test' ], function() {
  gulp.watch( '{test,src}/**/*.js', [ 'test' ]);
});

gulp.task( 'default', [ 'test' ]);