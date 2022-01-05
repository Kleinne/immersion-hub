<?php

namespace App\Http\Controllers;

use App\Models\Book;

class HomeController extends Controller
{
    public function index()
    {
        $books = Book::latest()
            ->offset(18)
            ->limit(14)
            ->get();

        return inertia('Home', [
            'books' => $books
        ]);
    }
}
