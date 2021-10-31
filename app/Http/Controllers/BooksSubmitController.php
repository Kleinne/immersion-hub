<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BooksSubmitController extends Controller
{
    public function index()
    {
        return inertia('ContributeIndex');
    }
}
