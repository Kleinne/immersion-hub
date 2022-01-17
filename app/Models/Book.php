<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'pages',
        'volume',
        'type',
        'published_at',
        'isbn',
        'cover'
    ];

    public function author()
    {
        return $this->belongsToMany(Author::class);
    }

    public function aliases()
    {
        return $this->hasMany(Alias::class);
    }

    public function series()
    {
        return $this->belongsTo(Series::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)
            ->withPivot('status', 'started_at', 'finished_at')
            ->withTimestamps();
    }

    // TODO add scope for related volumes (different editions, e.g. reprints or translated volumes or audiobooks) or figure out how to store them in the database
}
