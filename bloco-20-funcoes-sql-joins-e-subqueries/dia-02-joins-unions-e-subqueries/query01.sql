SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.BoxOffice AS b
        INNER JOIN
    Pixar.Movies AS m ON m.id = b.movie_id;