<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BooksSubmitController;
use App\Http\Controllers\RegisterController;
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
    Route::post('/logout', [LoginController::class, 'destroy'])->name('guest.logout');

    Route::get('/register', [RegisterController::class, 'create'])->name('guest.register');
    Route::post('/register', [RegisterController::class, 'store'])->name('guest.register');
});

// Home
Route::get('/', fn () => redirect()->route('app.home'));
Route::get('/home', [HomeController::class, 'index'])->name('app.home');

// Books
Route::prefix('books')->group(function () {
    Route::get('/{book}', [BooksController::class, 'show'])->whereNumber('book')->name('app.books.show');

    Route::middleware('auth')->group(function () {
        Route::post('{book}/log', [BooksController::class, 'store'])->name('auth.books.store');

        Route::get('/new', [BooksSubmitController::class, 'index'])->name('auth.books.new');
        Route::post('/new', [BooksSubmitController::class, 'create'])->name('auth.books.new');
    });
});

// Users
Route::get('/users/{user:username}', [UsersController::class, 'show'])->whereAlphaNumeric('user')->name('app.users.show');



/* book submitting
Fields:
- title
- alternative titles
- author
- description
- image
- isbn
- publisher
- published date
- pages
- original language (?)
- volume
- novel / light novel / cd / manga / audiobook

Order:
1. user enters the title
2. app checks and displays existing books with the same title
3. dropdown of existing series, can select to add to an existing one
4. if adds to an existing series, some fields like the author, volume, etc. are pre-filled
5. author, publisher are to be selected from database entries, dialog (?) option to add them on the spot
6. fill out the rest of the form
7. can immediately create a new series and add the book to it
8. submit the form

TODO add a different addition of a book (audiobook, hardcover, etc.)
TODO related series, but likely for series creation
TODO series creation
TODO type of the item (light novel, novel, audiobook, etc.)
TODO type (main series, side story, etc.)
TODO genre
TODO cover
TODO potentially generate unique book id for urls
*/
