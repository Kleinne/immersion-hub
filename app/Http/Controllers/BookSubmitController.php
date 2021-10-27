<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookSubmitController extends Controller
{
    public function index()
    {
        return inertia('ContributeIndex');
    }
}
