// JavaScript Document

var gulp = require('gulp'),//用来运行任务的
	connect = require('gulp-connect'),//用来reload服务器
	browserify = require('gulp-browserify'),//所有组件拼接在一起，浏览器代码可以用require方式构建
	concat = require('gulp-concat'),//将所有文件拼到一起
	port = process.env.port || 5000;//connect服务器端口
	
//构建任务
gulp.task('browserify',function(){
	gulp.src('./app/js/main.js')
	.pipe(browserify({
		transform: 'reactify',
	}))
	.pipe(gulp.dest('./dist/js'))
});
//live reload
gulp.task('connect',function(){
	connect.server({
		root: './',
		port: port,
		livereload: true,
	})
});
//reload JS
gulp.task('js',function(){
	gulp.src('./dist/**/*.js')
	.pipe(connect.reload())
});
gulp.task('html',function(){
	gulp.src('./app/**/*.html')
	.pipe(connect.reload())
});
gulp.task('watch',function(){
	gulp.watch('./dist/**/*.js',['js']);
	gulp.watch('./app/**/*.html',['html']);
	gulp.watch('./app/js/**/*.js',['browserify']);
});
gulp.task('default',['browserify']);
gulp.task('serve',['browserify','connect','watch']);