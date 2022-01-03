<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BooksSubmitController extends Controller
{
    public function index()
    {
        $formatOptions = [
            ['value' => null, 'name' => 'Select a format'],
            ['value' => 'novel', 'name' => 'Novel'],
            ['value' => 'audiobook', 'name' => 'Audiobook'],
            ['value' => 'other', 'name' => 'Other'],
        ];

        return inertia('BooksNewIndex', [
            'formatOptions' => $formatOptions,
        ]);
    }

    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'published_year' => 'required|numeric',
            'cover' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'pages' => 'required|min:1|max:4',
            'format' => 'required',
        ]);

        return redirect('/home');
    }
}
