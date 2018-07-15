var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var SSI = require('browsersync-ssi');
var imagemin = require('gulp-imagemin'); //压缩图片
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css'); //压缩css
var minify = require('gulp-minify');
var cache = require('gulp-cache');
var plumber = require('gulp-plumber');

var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var htmlmin = require('gulp-htmlmin'); //压缩html代码
var sass = require('gulp-sass');
var zip = require('gulp-zip');  // 打包发布
var gutil  = require('gulp-util');

var uncss = require('gulp-uncss'); // 删除多余css  代码

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: ["./dist"],
			middleware: SSI({
				baseDir: './dist',
				ext: '.shtml',
				version: '2.10.0'
			})
		}
	});
	gulp.watch("sass/**/*.scss", ['sass']);
	gulp.watch("pages/**/*.html", ['html']);
	gulp.watch('img/**/*', ['images']);
	gulp.watch('js/**/*', ['js']);
	gulp.watch("dist/**/*.html").on("change", browserSync.reload);
//	gulp.watch('css/**/*', ['uncss']);
	//	gulp.watch('dist/**/*', ['publish']);
});

gulp.task('sass', function() {
	return gulp.src("sass/**/*.scss")
		.pipe(plumber())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sass({
			outputStyle: "compact"
		}))
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/styles"))
		.pipe(browserSync.stream());
});
gulp.task('uncss', function() {
	return gulp.src(['css/**/**.css', '!css/lib/animate.min.css'])
		.pipe(uncss({
			html: ["dist/**/*.html"]
		}))
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/styles"))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src(['js/**/*.js', '!js/lib/**.js'])
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.on('error', function (err) {
                gutil.log(gutil.colors.red('[Error]'), err.toString());
            })
		.pipe(gulp.dest('dist/scripts'))
		.pipe(browserSync.stream());
});

gulp.task('images', function() {
	return gulp.src('img/**/*')
		.pipe(cache(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		})))
		.pipe(gulp.dest('dist/images'))
		.pipe(browserSync.stream());
});

gulp.task('html', function() {
	return gulp.src(['pages/**/*.html', '!pages/include/**.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		//		.pipe(rename({
		//			suffix: 'min'
		//		}))
		//		.pipe(htmlmin({
		//			collapseWhitespace: true
		//		}))
		.pipe(plumber())
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.stream());
});

gulp.task('publish', function() {
	return gulp.src('dist/**/*')
		.pipe(plumber())
		.pipe(zip('publish.zip'))
		.pipe(gulp.dest('release'))
});

gulp.task('default', ['serve']);