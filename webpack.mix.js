const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 /* Admin Panel React SPA */
mix.js('resources/js/admin/index.js', 'public/js/admin/app.js')
    .react()
    .sass('resources/sass/admin/app.scss', 'public/css/admin');


/* Public site React components */
mix.js('resources/js/site/app.js', 'public/js/site/app.js')
    .react()
    .sass('resources/sass/site/app.scss', 'public/css/site');
