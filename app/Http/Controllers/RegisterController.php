<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class RegisterController extends Controller
{
    public function create()
    {
        return inertia('Register');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required', 'string', 'max:255', 'unique:users,username'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => [
                'required', 'confirmed', 'max:255',
                Password::min(6)
                    ->mixedCase()
                    ->numbers()
            ]
        ]);

        Auth::login(User::create($validated));

        return redirect()->route('app.home');
    }
}
