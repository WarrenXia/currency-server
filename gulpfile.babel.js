import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';
import runSequence from 'run-sequence';

gulp.task('babel', (cb) => {
  gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('app'));
    cb();
    console.log('🎉  babel done');
});
// 启动server
gulp.task('server', (cb) => {
  nodemon({
    script: './app/app.js',
    ext: 'js',
    ignore: ['app/'],
    watch: ['lib/']
  });
});

gulp.task('watch', () => {
  gulp.watch('lib/**/*.js', ['babel']);
});

gulp.task('dev',()=>{
  runSequence(['babel','server','watch']);
});

gulp.task('build',()=>{
  runSequence(['babel']);
});

gulp.task('default', ['dev'], () => {});
