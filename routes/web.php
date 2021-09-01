<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('site.welcome');
});

/* Admin panel routes for React SPA */
Route::get('admin/', function(){
    return view('admin.react-app');
});

/* Override routing to allow React router dom manage it in admin panel SPA*/
Route::get('/admin/{any_path}', function () {
    return view('admin.react-app');
})->where('any_path', '(.*)')->name('admin_root');
