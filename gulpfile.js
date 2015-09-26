(function () {
    'use strict';

    var gulp = require('gulp');
    //Gulp Libs
    var zip = require('gulp-zip');

    //Tasks
     gulp.task('zip', [], function () {
         return gulp.src('./app/**/*')
            .pipe(zip('monster_player.zip'))
            .pipe(gulp.dest('../widget'));
     });

}());
