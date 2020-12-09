<?php

namespace Database\Seeders;
use App\Models\User;
use App\Models\Board;
use App\Models\Post;
use App\Models\Comment;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => '홍길동',
            'email' => 'test@naver.com',
            'password' => Hash::make('test')
        ]);
        Board::create([
            'title'=>'기본 게시판'
        ]);
        Post::create([
            'user_id'=> 1,
            'board_id'=> 1,
            'title' =>"첫번째 글",
            'body' => '첫번째 글의 내용'
        ]);            
        Post::create([
            'user_id'=> 1,
            'board_id'=> 1,
            'title' =>"두번째 글",
            'body' => '두번째 글의 내용'
        ]);            

        Post::create([
            'user_id'=> 1,
            'board_id'=> 1,
            'title' =>"세번째 글",
            'body' => '세번째 글의 내용'
        ]);            

    }
}
