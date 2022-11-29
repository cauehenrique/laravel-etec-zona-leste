<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $table = 'course';
    protected $fillable = [
        'icon_id',
        'name',
        'page_url',
        'description',
        'occupation_area',
        'area',
        'workload',
        'duration',
        'local',
        'course_types',
        'mode'
    ];
}
