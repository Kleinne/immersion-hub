<?php

namespace App\Http\Controllers;

use App\Models\User;

class UsersController extends Controller
{
    public function show(User $user)
    {
        return inertia('UsersShow', [
            'user' => [
                'username' => $user->username,
                'created_at' => $user->created_at,
            ]
        ]);
    }
}
