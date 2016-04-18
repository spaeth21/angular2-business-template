/// <binding BeforeBuild='typescript' Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    tslint = require('gulp-tslint'),
    ts = require('gulp-typescript');

var paths = {
    webroot: "./wwwroot/"
};
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "lib/npmlibs/";
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("copyDeps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*')
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});

gulp.task("copyDeps:angular2", function () {
    return gulp.src(paths.npmSrc + '/angular2/bundles/**/*.js')
         .pipe(gulp.dest(paths.npmLibs + '/angular2/'));
});

gulp.task("copyDeps:shim", function () {
    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*')
         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
});

//gulp.task("copyDeps:promise", function () {
//    return gulp.src(paths.npmSrc + '/es6-promise/dist/*.**')
//         .pipe(gulp.dest(paths.npmLibs + '/es6-promise/'));
//});
gulp.task("copyDeps:rxjs", function () {
    return gulp.src(paths.npmSrc + '/rxjs/bundles/*.*')
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});
gulp.task("copyDeps:materialize", function () {
    return gulp.src(paths.npmSrc + '/materialize-css/dist/**/*.*')
         .pipe(gulp.dest(paths.npmLibs + '/materialize/'));
});
gulp.task("copyDeps:angularMaterialize", function () {
    return gulp.src(paths.npmSrc + '/angular2-materialize/dist/**/*.*')
         .pipe(gulp.dest(paths.npmLibs + '/angular2Materialize/'));
});
gulp.task("copyDeps:hammerjs", function () {
    return gulp.src(paths.npmSrc + '/hammerjs/*.*')
         .pipe(gulp.dest(paths.npmLibs + '/hammerjs/'));
});
gulp.task("copyDeps:fontAwesome", function () {
    return gulp.src(paths.npmSrc + '/font-awesome/**/*.*')
         .pipe(gulp.dest(paths.npmLibs + '/font-awesome/'));
});
gulp.task("copyDeps:reflect", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/*.*')
         .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
});

gulp.task("copyDeps:primeng", function () {
    return gulp.src(paths.npmSrc + '/primeng/**/*')
         .pipe(gulp.dest(paths.npmLibs + '/primeng/'));
});
gulp.task("copyDeps:primeui", function () {
    return gulp.src(paths.npmSrc + '/primeui/**/*')
         .pipe(gulp.dest(paths.npmLibs + '/primeui/'));
});





gulp.task("copyDeps:fullCalendar", function () {
    return gulp.src(paths.npmSrc + '/fullcalendar/**/*')
         .pipe(gulp.dest(paths.npmLibs + '/fullcalendar/'));
});
gulp.task("copyDeps:moment", function () {
    return gulp.src(paths.npmSrc + '/moment/**/*')
         .pipe(gulp.dest(paths.npmLibs + '/moment/'));
});








gulp.task("copyDeps", ["copyDeps:rxjs", 'copyDeps:angular2', 'copyDeps:systemjs', 'copyDeps:shim', 'copyDeps:materialize', 'copyDeps:angularMaterialize', 'copyDeps:hammerjs', 'copyDeps:fontAwesome', 'copyDeps:primeng', 'copyDeps:primeui', 'copyDeps:fullCalendar', 'copyDeps:moment']);


gulp.task('typescript', function () {
    return gulp.src(paths.webroot + 'app/**/*.ts')
        .pipe(ts({
            "compileOnSave": true,
            "compilerOptions": {
                "noImplicitAny": false,
                "noEmitOnError": true,
                "removeComments": false,
                "sourceMap": false,
                "target": "es5",
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "module": "system",
                "moduleResolution": "node"
            },
            "files": [
              "./wwwroot/app/boot/boot.ts"
            ]
        }));
});



gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);



gulp.task('default', ["min", "clean", "copyDeps"])