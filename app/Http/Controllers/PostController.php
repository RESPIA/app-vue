<?php

namespace App\Http\Controllers;

use App\Post;
use App\Category;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with('category','user')->get();
        // return $posts;
        //$posts = Post::all();
        return response()->json([
            'message' => 'list all post',
            'posts' => $posts
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'title'=>'required|min:2|max:50',
            'description'=>'required|min:2|max:1000',
            'content'=>'required|min:10|max:5000',
            'cate_id' => 'required'
        ]);
        // $strpos = strpos($request->photo,';');
        // $sub = substr($request->photo,0,$strpos);
        // $ex = explode('/',$sub)[1];
        // $name = time().".".$ex;
        // $img = Image::make($request->photo)->resize(200, 200);
        // $upload_path = public_path()."/uploadimage/";
        // $img->save($upload_path.$name);
        // $post = new Post();
        // $post->title = $request->title;
        // $post->description = $request->description;
        // $post->cat_id = $request->cat_id;
        // $post->user_id = Auth::user()->id;
        // $post->photo = $name;
        // $post->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $posts = Post::find($id);
        $posts->delete();
        return response()->json([
            'message' => 'delete post successfully !',
            'posts' => $posts
        ]);

    }
}
