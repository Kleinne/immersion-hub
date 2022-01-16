<?php

namespace Database\Seeders;

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

        User::create([
            'username' => 'TestUser',
            'email' => 'test@example.com',
            'password' => 'Password1',
        ]);
    }
}
