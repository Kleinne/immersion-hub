<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\BookSubmitController;
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

Route::get('/', [HomeController::class, 'index'])->name('app.home');

Route::get('/contribute', [BookSubmitController::class, 'index'])->name('app.contribute');
