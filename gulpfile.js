(function () {
    'use strict';
    
    //Gulp Libs
    var zip = require('gulp-zip');

    //Tasks
     gulp.task('zip', 'Tworzy paczkę *.zip.',
         function () {
             return gulp.src('./dist/**/*')
                .pipe(zip('monster_player.zip'))
                .pipe(gulp.dest('../Widget'));
     });

}());
