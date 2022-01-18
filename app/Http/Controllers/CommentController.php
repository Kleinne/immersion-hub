<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    // TODO refactor repeating code
    public function index(Book $book)
    {
        $isAuth = auth()->check();
        $hasBook = $isAuth ? auth()->user()->books->find($book) : false;

        return inertia('BooksShowComments', [
            'book' => [
                'id' => $book->id,
                'title' => $book->title,
                'aliases' => $book->aliases,
                'pages' => $book->pages,
                'cover' => $book->cover,
                'volume' => $book->volume,
                'published_at' => $book->published_at,
                'isbn' => $book->isbn,
                'description' => $book->description,
            ],
            'bookStatus' => $hasBook ? $hasBook->pivot->status : null,
            'comments' => $book->comments->sortByDesc('updated_at')
                ->map(fn ($comment) => [
                    'id' => uniqid(),
                    'body' => $comment->body,
                    'updated_at' => $comment->updated_at->format('Y-m-d H:i'),
                    'user' => [
                        'username' => $comment->user->username,
                    ],
                ])->values()
        ]);
    }
}
