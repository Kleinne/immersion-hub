<?php

namespace App\Http\Controllers;

use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $users = User::paginate(5)->through(fn ($user) => [
            'id' => $user->id,
            'name' => $user->name
        ]);

        return inertia('Home', [
            'users' => $users
        ]);
    }
}
