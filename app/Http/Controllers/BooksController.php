<?php

namespace App\Http\Controllers;

use App\Models\Book;

class BooksController extends Controller
{
    public function show(Book $book)
    {
        return inertia('BooksShow', [
            'book' => [
                'title' => $book->title,
                'title_en' => $book->title_en,
                'title_romaji' => $book->title_romaji,
                'aliases' => $book->aliases,
                'pages' => $book->pages,
                'cover' => $book->cover,
                'volume' => $book->volume,
                'published_at' => $book->published_at,
                'isbn' => $book->isbn,
                'description' => $book->description,
            ]
        ]);
    }
}
