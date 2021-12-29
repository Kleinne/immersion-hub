<?php

namespace Database\Seeders;

use App\Imports\BooksImport;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Excel::import(new BooksImport, public_path('imports/books.xlsx'));
    }
}
