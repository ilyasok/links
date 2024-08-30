const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

gulp.task("scripts", function () {
  return gulp
    .src("js/*.js")
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./"));
});
