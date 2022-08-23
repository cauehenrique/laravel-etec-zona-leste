<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NavbarAnchor extends Model
{
    use HasFactory;
    protected $table = 'navbar_anchor';
    protected $fillable = ['title', 'href'];
}
