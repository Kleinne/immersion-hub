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

            // convert excel date to timestamp
            $UNIX_DATE = ($row[2] - 25569) * 86400;
            $date = gmdate("Y-m-d", $UNIX_DATE);

            Book::create([
                'title' => $row[1],
                'published_at' => $date,
                'volume' => $row[0],
                'pages' => $row[4],
                'type' => $row[8],
                'isbn' => $row[9],
                'cover' => $row[10],
                'description' => $row[11],
                // 'aliases' => $row[3],
            ]);
        }
    }
}
