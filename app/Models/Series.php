<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Series extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'title_en',
        'description',
    ];

    public function books()
    {
        return $this->hasMany(Book::class);
    }

    public function authors()
    {
        return $this->belongsToMany(Author::class);
    }
}
