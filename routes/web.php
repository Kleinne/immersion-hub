<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BooksSubmitController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UsersController;
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

// Session
Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'create'])->name('guest.login');
    Route::post('/login', [LoginController::class, 'store'])->name('guest.login');

    Route::get('/register', [RegisterController::class, 'create'])->name('guest.register');
    Route::post('/register', [RegisterController::class, 'store'])->name('guest.register');
});

Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth')->name('auth.logout');

// Home
Route::get('/', fn () => redirect()->route('app.home'));
Route::get('/home', [HomeController::class, 'index'])->name('app.home');

// Books
Route::prefix('books')->group(function () {
    Route::get('/', [BooksController::class, 'index'])->name('app.books');

    Route::get('/{book}', [BooksController::class, 'show'])->whereNumber('book')->name('app.books.show');
    Route::get('/{book}/comments', [CommentController::class, 'index'])->whereNumber('book')->name('app.books.comments.index');

    Route::middleware('auth')->group(function () {
        Route::post('{book}/log', [BooksController::class, 'store'])->name('auth.books.store');

        Route::get('/new', [BooksSubmitController::class, 'index'])->name('auth.books.new');
        Route::post('/new', [BooksSubmitController::class, 'create'])->name('auth.books.new');
    });
});

// Users
Route::get('/users/{user:username}', [UsersController::class, 'show'])->whereAlphaNumeric('user');
