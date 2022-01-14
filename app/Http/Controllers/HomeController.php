<?php

namespace App\Http\Controllers;

use App\Models\Book;

class HomeController extends Controller
{
    public function index()
    {
        $latestBooks = Book::latest()
            ->limit(5)
            ->get();

        $highestRatedBooks = Book::latest()
            ->limit(5)
            ->get();

        return inertia('Home', [
            'latestBooks' => $latestBooks,
            'highestRatedBooks' => $highestRatedBooks,
        ]);
    }
}
