SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;