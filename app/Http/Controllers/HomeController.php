<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $books = Book::all()->map(fn ($book) => [
            'id' => $book->id,
            'title' => $book->title
        ]);

        return inertia('Home', [
            'books' => $books
        ]);
    }
}
