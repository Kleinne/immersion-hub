<?php

namespace App\Http\Controllers;

use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $users = User::all()->map(fn ($user) => [
            'name' => $user->name
        ]);

        return inertia('Home', [
            'users' => $users
        ]);
    }
}
