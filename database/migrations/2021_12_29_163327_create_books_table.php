<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('title-en')->nullable();
            $table->string('title-romaji')->nullable();
            $table->foreignId('author_id')->nullable();
            $table->text('description')->nullable();
            $table->integer('pages')->nullable();
            $table->integer('volume')->nullable();
            $table->date('publication_date')->nullable();
            $table->string('cover')->nullable();
            $table->string('isbn')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
