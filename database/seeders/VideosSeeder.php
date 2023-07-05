<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VideosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('videos')->insert([
            'title' => 'This car is so futuristic',
            'thumbnail' => '/videos/Thumbnails/Auto.png',
            'video' => '/videos/Auto.mp4',
            'user' => 'jobecodes.dev',
            'views' => '20k views - 11 days ago',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('videos')->insert([
            'title' => 'What a cool car',
            'thumbnail' => '/videos/Thumbnails/Car.png',
            'video' => '/videos/Car.mp4',
            'user' => 'jobecodes.dev',
            'views' => '72k views - 6 months ago',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('videos')->insert([
            'title' => 'I love this car',
            'thumbnail' => '/videos/Thumbnails/Car1.png',
            'video' => '/videos/Car1.mp4',
            'user' => 'jobecode.dev',
            'views' => '14k views - 8 days ago',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
