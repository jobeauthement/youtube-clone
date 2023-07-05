<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('comments')->insert([
            'user' => 'Mrs. Peackock',
            'time' => '5 months ago',
            'text' => "What a nice video young man.",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('comments')->insert([
            'user' => 'Colonel Mustard',
            'time' => '6 months ago',
            'text' => "Why this is the most fantastic video in the world my boy, reminds me of my younger days.",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('comments')->insert([
            'user' => 'Wadsworth',
            'time' => '2 months ago',
            'text' => "You are doing groundbreaking work my friend, Professor Plum must be jealous.",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('comments')->insert([
            'user' => 'Professor Plum',
            'time' => '2 years ago',
            'text' => "These videos are great son, I will have to hire you for my work at the United Nations.",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('comments')->insert([
            'user' => 'Mrs. White',
            'time' => '6 days ago',
            'text' => "These videos are killer, if I do say so myself.",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('comments')->insert([
            'user' => 'Mr. Green.',
            'time' => '2 weeks ago',
            'text' => "I was wondering who was putting all these cool videos out, So it was you.  I was going to expose you myself.",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
