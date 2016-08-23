const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');

var paths = {
    dist: './dist',
    ts: ['./app/**/*.ts'],
    css: ['./app/**/*.css'],
    html: ['./app/**/*.html'],
    node_modules: ['./node_modules/**']
};

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('copy:csslibs', ['clean'], function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/reset-css/reset.css'
    ])
        .pipe(gulp.dest('dist/assets/csslib'))
});

gulp.task('copy:libs', ['clean'], function () {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js'
    ])
        .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:index', ['clean'], function () {
    return gulp.src([
        'index.html'
    ])
        .pipe(gulp.dest('dist/'))
});

gulp.task('copy:config', ['clean'], function () {
    return gulp.src([
        'systemjs.config.js'
    ])
        .pipe(gulp.dest('dist/'))
});

gulp.task('copy:node_modules', ['clean'], function () {
    return gulp.src([
        'node_modules/**/*'
    ])
        .pipe(gulp.dest('dist/node_modules'))
});

gulp.task('copy:html', ['clean'], function () {
    return gulp.src([
        'app/**/*.html'
    ])
        .pipe(gulp.dest('dist/app'))
});

gulp.task('copy:css', ['clean'], function () {
    return gulp.src([
        'app/**/*.css'
    ])
        .pipe(gulp.dest('dist/app'))
});

gulp.task('copy:fonts', ['clean'], function () {
    return gulp.src([
        'node_modules/font-awesome/fonts/**/*',
    ])
        .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('watch', function () {
    gulp.watch(paths.ts, ['compile']);
    gulp.watch(paths.css, ['copy:css']);
    gulp.watch(paths.html, ['copy:index', 'copy:html']);
    gulp.watch('systemjs.config.js', ['copy:config']);
    gulp.watch(paths.node_modules, ['copy:node_modules']);
});

gulp.task('build', ['copy:index', 'copy:config', 'compile', 'copy:libs', 'copy:csslibs', 'copy:node_modules', 'copy:html', 'copy:css', 'copy:fonts']);
gulp.task('default', ['build']);