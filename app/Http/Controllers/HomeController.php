<?php

namespace App\Http\Controllers;

use App\Models\Book;

class HomeController extends Controller
{
    public function index()
    {
        $latestBooks = Book::latest()
            ->offset(18)
            ->limit(16)
            ->get();

        $highestRatedBooks = Book::latest()
            ->limit(16)
            ->get();

        return inertia('Home', [
            'latestBooks' => $latestBooks,
            'highestRatedBooks' => $highestRatedBooks,
        ]);
    }
}
