<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'admin@user.com',
            'password' => Hash::make('secret')
        ]);

        User::factory()->create([
            'name' => 'Student User',
            'email' => 'student@user.com',
            'password' => Hash::make('secret')
        ]);

        $this->call(RolesTableSeeder::class);
    }
}
