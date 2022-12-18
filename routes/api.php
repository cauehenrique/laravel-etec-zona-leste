<?php

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/admin-auth', function (Request $request) {
    $admin_key = getenv('ADMIN_KEY');
    $authorization = $request->header('Authorization');

    if ($authorization != $admin_key) return response(null, 401);
    else return response(null, 200);
});

Route::get('/course', function () {
    $courses = Course::all();
    return response($courses, 200);
});

Route::get('/course/{id}', function (string $id) {
    $course = Course::find(intval($id));
    return response($course, 200);
});

Route::post('/course', function (Request $request) {
    $course = Course::create([
        'name' => $request->name,
        'description' => $request->description,
        'occupation_area' => $request->occupation_area,
        'area' => $request->area,
        'workload' => $request->workload,
        'duration' => $request->duration,
        'local' => $request->local,
        'course_types' => $request->course_types,
        'mode' => $request->mode
    ]);

    return response($course, 200);
});

Route::delete('/course/{id}', function (int $id) {
    $course = Course::find($id);

    if ($course == null) return response('Course [' . $id . '] not found!', 404);
    else {
        $course->delete();
        return response('Course has been deleted successfully', 200);
    }
});
