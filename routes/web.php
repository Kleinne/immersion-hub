<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BooksSubmitController;
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

Route::get('/', fn () => redirect()->route('app.home'));

Route::get('/home', [HomeController::class, 'index'])->name('app.home');

Route::get('/contribute', [BooksSubmitController::class, 'index'])->name('contribute.index');

Route::get('/books/{book}', [BooksController::class, 'show'])->whereNumber('book')->name('books.show');
