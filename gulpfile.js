var gulp = require('gulp');

gulp.task('start', function () {
    return gulp.src('source-files') // Получаем исходный файл через gulp.src
    .pipe(aGulpPlugin()) // Посылаем его через плагин Gulp
    .pipe(gulp.dest('destination')) // Выводим файл в папку назначения
  })