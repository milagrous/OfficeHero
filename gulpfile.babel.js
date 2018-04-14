/**
 * Created by movses on 4/14/18.
 */

import gulp from 'gulp';
import gls from 'gulp-live-server';
import run from 'gulp-run';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';


const out = './bin';
const app = './routes';
const clientSrc = [ './public/*.js'];
const indexFile = 'app.js';

gulp.task('serve', [ 'build' ], () => {
    const server = gls.new('app.js');
    gulp.watch([`${out}/*.js`], (file) => { server.notify.apply(server, [file]); });
    gulp.watch([ indexFile, `${app}/**/*.js`], () => { server.start.bind(server)() });
    server.start();
});

gulp.task('build', () => {
    return browserify({entries: 'public/index.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('www'))
        .pipe(gulp.dest(out));
});

/*
gulp.task('mongo', () => {
    return run('mongod --dbpath ./data').exec();
});*/

gulp.task('watch', [ 'build' ], () => {
    gulp.watch(clientSrc, [ 'build' ]);
});

gulp.task('default', [ 'watch', 'serve' ]);