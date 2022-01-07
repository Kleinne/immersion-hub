<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        $this->call([
            BookSeeder::class
        ]);

        Author::create([
            'name' => 'Asato Asato',
        ]);

        User::create([
            'username' => 'Kleine',
            'email' => 'kleine@test.com',
            'password' => 'Password1',
        ]);
    }
}
