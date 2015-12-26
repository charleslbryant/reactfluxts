'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var del = require('del');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.css'
        ],
        img: './src/images/*',
        js: './src/**/*.js',
        tsx: './src/**/*.tsx',
        tsf: './src/**/*.ts',
        dist: './dist',
        tsjsOut: './src',
        mainJs: './src/main.js'
    }
}

gulp.task('connect', ['js'], function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function(){
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function(){
    del(config.paths.dist + '/**/*.html');

    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('css', function(){
    del(config.paths.dist + '/css/**/*');

    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('img', function(){
    del(config.paths.dist + '/images/**/*');

    gulp.src(config.paths.img)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('typescript', function(){
    var tsResult = gulp
        .src([config.paths.tsx, config.paths.tsf])
        .pipe(tsc({
          jsx: 'react'
        }))

    return tsResult
        .pipe(gulp.dest(config.paths.tsjsOut));
})

gulp.task('js', ['lint'], function(){
    //del(config.paths.dist + '/scripts/**/*');

    return browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('lint', ['typescript'],function(){
    return gulp
        .src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format());
})

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.img, ['img']);
    gulp.watch(config.paths.css, ['css']);
    gulp.watch([config.paths.js, config.paths.tsx, config.paths.tsf], ['js']);
});

gulp.task('default', ['html', 'css', 'img', 'js', 'open', 'watch']);
