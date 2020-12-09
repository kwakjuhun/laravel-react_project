<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'contents',
    //     'user_id',
    //     'post_id',
    //     'create_at',
    //     'update_at',
    ];

    public function user(){
        return $this->belongTo(User::class);
    }

    public function post(){
        return $this->belongTo(Post::class);
    }
}
