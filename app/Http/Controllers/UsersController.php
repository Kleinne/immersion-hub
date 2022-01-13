<?php

namespace App\Http\Controllers;

use App\Models\User;

class UsersController extends Controller
{
    public function show(User $user)
    {
        $books = $user->books;
        $pages = $books->where('pivot.status', 'completed')->sum('pages');

        return inertia('UsersShow', [
            'user' => [
                'username' => $user->username,
            ],
            'books' => [
                'pages' => $pages,
                'reading' => $this->getByStatus($books, 'reading'),
                'completed' => $this->getByStatus($books, 'completed'),
                'planned' => $this->getByStatus($books, 'planned'),
            ],
        ]);
    }

    function getByStatus(object $books, string $status)
    {
        return $books->where('pivot.status', $status)->values()->map(fn ($book) => [
            'id' => $book->id,
            'title' => $book->title,
        ]);
    }
}
