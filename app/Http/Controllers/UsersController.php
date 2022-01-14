<?php

namespace App\Http\Controllers;

use App\Models\User;

class UsersController extends Controller
{
    public function show(User $user)
    {
        $books = $user->books;
        $pages = $books->where('pivot.status', 'completed')->sum('pages');

        $days = array();
        for ($i = 30; $i >= 0; $i--)
            $days[] = date("M d", strtotime('-' . $i . ' days'));

        $completedBooks = $user->books
            ->where('pivot.status', 'completed')
            ->where('pivot.finished_at', '>=', now()->subDays(30)->endOfDay())
            ->map(fn ($book) => [
                'id' => $book->id,
                'title' => $book->title,
                'finished_at' => date("M d", strtotime($book->pivot->finished_at)),
            ]);

        $completedSum = 0;

        $lineChart = collect(array_flip($days))
            ->map(function ($key, $value) use ($completedBooks, &$completedSum) {
                $count = $completedBooks->where('finished_at', $value)->count();
                $completedSum += $count;
                return [
                    'value' => $completedSum,
                    'titles' => $completedBooks->where('finished_at', $value)->pluck('title'),
                ];
            });

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
            'charts' => [
                'line' => $lineChart
            ]
        ]);
    }

    function getByStatus(object $books, string $status)
    {
        return $books->where('pivot.status', $status)->values()->map(fn ($book) => [
            'id' => $book->id,
            'title' => $book->title,
            'cover' => $book->cover,
        ]);
    }
}
