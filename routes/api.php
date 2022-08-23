<?php

use App\Models\NavbarAnchor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/navbar-anchors', function () {
    return NavbarAnchor::all();
});

Route::get('/navbar-anchors/{id}', function (string $id) {
    $anchor = NavbarAnchor::find(intval($id));
    return $anchor;
});

Route::post('/navbar-anchors', function (Request $request) {
    $anchor = NavbarAnchor::create([
        'title' => $request->title,
        'href' => $request->href
    ]);

    return $anchor;
});
