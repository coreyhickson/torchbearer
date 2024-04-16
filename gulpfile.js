const gulp = require('gulp');
const less = require('gulp-less');

/* ----------------------------------------- */
/*  Compile LESS
/* ----------------------------------------- */

const SIMPLE_LESS = ["styles/*.less"];
function compileLESS() {
  return gulp.src("styles/torchbearer.less")
    .pipe(less())
    .pipe(gulp.dest("./styles/"))
}
const css = gulp.series(compileLESS);

/* ----------------------------------------- */
/*  Watch Updates
/* ----------------------------------------- */

function watchUpdates() {
  gulp.watch(SIMPLE_LESS, css);
}

/* ----------------------------------------- */
/*  Export Tasks
/* ----------------------------------------- */

exports.default = gulp.series(
  gulp.parallel(css),
  watchUpdates
);
exports.css = css;

// Add fonts
_configureFonts();

/* -------------------------------------------- */

/**
 * Configure additional system fonts.
 */
function _configureFonts() {
  // Object.assign(CONFIG.fontDefinitions, {
  //   "Inknut Antiqua": {
  //     editor: true,
  //     fonts: [
  //       { urls: ["systems/torchbearer/fonts/Inknut_Antiqua/InknutAntiqua-Regular.ttf"] },
  //       { urls: ["systems/torchbearer/fonts/Inknut_Antiqua/InknutAntiqua-Bold.ttf"], weight: "bold" },
  //     ]
  //   },
  //   "Architects Daughter": {
  //     editor: true,
  //     fonts: [
  //       { urls: ["systems/torchbearer/fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf"] }
  //     ]
  //   }
  // });
}

