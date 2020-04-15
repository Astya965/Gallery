import {pictures, timeline} from "./source/js/data/pictures.js";

const ghPages = require('gh-pages');
const path = require('path');

const gulp = require("gulp");
const plumber = require("gulp-plumber");

const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemap = require("gulp-sourcemaps");
const csso = require("gulp-csso");

const fileinclude = require('gulp-file-include');

const server = require("browser-sync").create();
var rename = require("gulp-rename");
var del = require("del");


var imagemin = require("gulp-imagemin");

var uglify = require("gulp-uglify");

var htmlmin = require("gulp-htmlmin");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

// gulp.task("style", function (done) {
//     gulp.src("source/less/style.less")
//       .pipe(plumber())
//       .pipe(sourcemap.init())
//       .pipe(less())
//       .pipe(postcss([
//         autoprefixer()
//       ]))
//       .pipe(gulp.dest("source/css"))
//       .pipe(server.stream());

//       done();
//   });

// gulp.task("fileinclude", function (done) {
//   gulp.src('source/index.html')
//   .pipe(fileinclude({
//     context: {
//       pictures,
//       timeline
//     },
//     prefix: '@@',
//     basepath: '@file',

//   }))
//   .pipe(gulp.dest('build/'))
//   .pipe(server.stream());

//   done();
// });

// gulp.task("serve", function (done) {
//   server.init({
//     server: "./source",
//     notify: false,
//     open: true,
//     cors: true,
//     ui: false
//   });

//   gulp.watch("source/less/**/*.less", gulp.series("style"));
//   gulp.watch("source/*.html").on("change", () => {
//     server.reload();
//     done();
//   });

//   done();
// });

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './build'), cb);
}
exports.deploy = deploy;

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 2}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("jsmin", function () {
  return gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("build/js"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin())
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/js/*.js", gulp.series("jsmin", "refresh"));
  gulp.watch("source/**/*.html", gulp.series("fileinclude", "html", "refresh"));
});

gulp.task("build", gulp.series("clean", "copy", "css", "jsmin", "fileinclude", "html"));
gulp.task("start", gulp.series("build", "server"));
