<?php

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/course', function () {
    return Course::all();
});

Route::get('/course/{id}', function (string $id) {
    $course = Course::find(intval($id));
    return $course;
});

Route::post('/course', function (Request $request) {
    $course = Course::create([
        'icon_id' => $request->icon_id,
        'name' => $request->name,
        'page_url' => $request->page_url,
        'description' => $request->description,
        'occupation_area' => $request->occupation_area,
        'area' => $request->area,
        'workload' => $request->workload,
        'duration' => $request->duration,
        'local' => $request->local,
        'course_types' => $request->course_types,
        'mode' => $request->mode
    ]);

    return $course;
});
