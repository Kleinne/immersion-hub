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

Route::get('/books/new', [BooksSubmitController::class, 'index'])->name('books.new');
Route::post('/books/new', [BooksSubmitController::class, 'create'])->name('books.new');

Route::get('/books/{book}', [BooksController::class, 'show'])->whereNumber('book')->name('books.show');

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

Order:
1. user enters the title
2. app checks and displays existing books with the same title
3. dropdown of existing series, can select to add to an existing one
4. if adds to an existing series, some fields like the author, volume, etc. are pre-filled
5. author, publisher are to be selected from database entries, dialog (?) option to add them on the spot
6. fill out the rest of the form
7. can immediately create a new series and add the book to it
8. submit the form

TODO related series, but likely for series creation
TODO series creation
TODO type of the item (light novel, novel, audiobook, etc.)
TODO type (main series, side story, etc.)
*/
