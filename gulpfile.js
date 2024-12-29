const babel = require('gulp-babel');
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglifyJS = require('gulp-uglify');

const source = 'src/modaly.js';
const destination = 'build';

gulp.task('amd', async () => {
  return gulp
    .src(source)
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
    .pipe(uglifyJS())
    .pipe(rename('modaly.amd.min.js'))
    .pipe(gulp.dest(destination, { overwrite: true }));
});

gulp.task('umd', async () => {
  return gulp
    .src(source)
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-umd'] }))
    .pipe(uglifyJS())
    .pipe(rename('modaly.umd.min.js'))
    .pipe(gulp.dest(destination, { overwrite: true }));
});

gulp.task('commonjs', async () => {
  return gulp
    .src(source)
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-commonjs'] }))
    .pipe(uglifyJS())
    .pipe(rename('modaly.commonjs.min.js'))
    .pipe(gulp.dest(destination, { overwrite: true }));
});

gulp.task('systemjs', async () => {
  return gulp
    .src(source)
    .pipe(babel({ plugins: ['@babel/plugin-transform-modules-systemjs'] }))
    .pipe(uglifyJS())
    .pipe(rename('modaly.systemjs.min.js'))
    .pipe(gulp.dest(destination, { overwrite: true }));
});

gulp.task('es6', async () => {
  return gulp
    .src(source)
    .pipe(babel())
    .pipe(uglifyJS())
    .pipe(rename('modaly.module.min.js'))
    .pipe(gulp.dest(destination, { overwrite: true }));
});

gulp.task('es5', async () => {
  return gulp
    .src(source)
    .pipe(babel({ plugins: ['babel-plugin-remove-import-export'] }))
    .pipe(uglifyJS())
    .pipe(rename('modaly.min.js'))
    .pipe(gulp.dest(destination, { overwrite: true }));
});

gulp.task('es5-test', async () => {
  return gulp
    .src(source)
    .pipe(babel({ plugins: ['babel-plugin-remove-import-export'] }))
    .pipe(rename('modaly.js'))
    .pipe(gulp.dest(destination, { overwrite: true }));
});

const tasks = gulp.parallel('amd', 'umd', 'commonjs', 'systemjs', 'es6', 'es5', 'es5-test');

gulp.task('build', tasks);

gulp.task('watch', async () => {
  gulp.watch(['src/*.js', '!build/*.js'], { awaitWriteFinish: true, ignoreInitial: false }, tasks);
});
