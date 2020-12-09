<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use App\Models\User;

use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function session(){
        $user = Auth::user();
        return response()->json([$user],200);
    }
    // 로그인
    public function login(Request $request){
        $user = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);    

        if(!Auth::attempt($user)){
            return response()->json(['fail'],400);
        }
        $user = Auth::user();
        return response()->json([$user],200);
    }

    // 로그아웃
    public function logout(){
        Auth::logout();
        return '로그아웃 됨';
    }

    // 아이디생성
    public function store(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);    
        $validatedData['password'] = Hash::make($validatedData['password']);
        $create = User::create($validatedData);
 
        // // password 암호화, 이메일 인증

        return response()->json([$create],200);
        // return response()->json([$validatedData['name']],);
    }
}
