<?php

namespace App\Http\Controllers;

use App\Models\Book;

class HomeController extends Controller
{
    public function index()
    {
        $latestBooks = Book::latest()
            ->offset(18)
            ->limit(14)
            ->get();

        $highestRatedBooks = Book::latest()
            ->limit(14)
            ->get();

        return inertia('Home', [
            'latestBooks' => $latestBooks,
            'highestRatedBooks' => $highestRatedBooks,
        ]);
    }
}
