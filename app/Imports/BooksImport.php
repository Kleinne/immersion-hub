<?php

namespace App\Imports;

use App\Models\Book;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;

class BooksImport implements ToCollection
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $index => $row) {
            if ($index === 0) {
                continue;
            }

            if (empty($row[0])) {
                return;
            }

            $UNIX_DATE = ($row[3] - 25569) * 86400;
            $date = gmdate("Y-m-d", $UNIX_DATE);

            Book::create([
                'title' => $row[1],
                'title_en' => $row[2],
                'title_romaji' => $row[4],
                'published_at' => $date,
                'volume' => $row[0],
                'pages' => $row[5],
                'isbn' => $row[12],
                'cover' => $row[13],
                'description' => $row[15],
                'aliases' => $row[16],
            ]);
        }
    }
}
