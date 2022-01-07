<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function create()
    {
        return inertia('Login');
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'max:255'],
        ]);

        $attributes = $request->only('email', 'password');
        $remember = $request->has('remember');

        if (Auth::attempt($attributes, $remember)) {
            $request->session()->regenerate();

            return redirect()->intended();
        }

        return back()->withErrors([
            'email' => 'This combination of email and password is invalid.',
        ]);
    }

    public function destroy()
    {
        auth()->logout();
        return redirect()->route('app.home');
    }
}
