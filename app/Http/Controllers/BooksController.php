<?php

namespace App\Http\Controllers;

use App\Models\Book;

class BooksController extends Controller
{
    public function index()
    {
        $books = Book::orderBy('updated_at', 'desc')->paginate(10);
        return inertia('BooksIndex', compact('books'));
    }

    public function show(Book $book)
    {
        // TODO figure out how to improve this code
        $isAuth = auth()->check();
        $hasBook = $isAuth ? auth()->user()->books->find($book) : false;

        return inertia('BooksShow', [
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
            'comments' => $book->comments->sortByDesc('updated_at')->take(5)
                ->map(fn ($comment) => [
                    'id' => uniqid(),
                    'body' => $comment->body,
                    'updated_at' => $comment->updated_at,
                    'user' => [
                        'username' => $comment->user->username,
                    ],
                ])->values(),
        ]);
    }

    public function store(Book $book)
    {
        $STATUSES = ['reading', 'rereading', 'completed', 'planned', 'paused', 'dropped'];
        $action = request()->data['action'];
        $completedAt = request()->data['completed_at'] ?? null;
        $comment = request()->data['comment'] ?? null;

        if (!in_array($action, $STATUSES)) {
            abort(400, 'Invalid action');
        }

        $books = auth()->user()->books();

        $existingBook = $books->where('book_id', $book->id)->first();
        $startedAt = $existingBook ? $existingBook->pivot->started_at : now();

        if ($action === 'planned') {
            $startedAt = null;
        }

        $books->syncWithoutDetaching([
            $book->id => [
                'status' => $action,
                'started_at' => $action === 'reading' ? now() : $startedAt,
                'finished_at' => $completedAt ? date('Y-m-d H:m:s', strtotime($completedAt)) : null,
            ]
        ]);

        if ($comment) {
            $book->comments()->create([
                'user_id' => auth()->id(),
                'body' => $comment,
            ]);
        }

        return redirect()->route('app.books.show', [$book->id]);
    }
}
