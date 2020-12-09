<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostController;

use App\Http\Controllers\CommentController;

use App\Http\Controllers\AuthController;

use App\Http\Controllers\BoardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('post', PostController::class);
Route::resource('board', BoardController::class);

Route::post('auth/login', [AuthController::class, 'login']);

Route::get('auth/logout', [AuthController::class, 'logout']);

Route::get('auth', [AuthController::class, 'session']);

Route::post('auth/store', [AuthController::class, 'store']);

Route::resource('comment', CommentController::class);