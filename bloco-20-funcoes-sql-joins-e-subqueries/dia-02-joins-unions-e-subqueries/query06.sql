-- SUBQUERY
SELECT 
    title
FROM
    Pixar.Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            Pixar.BoxOffice
        WHERE
            rating > 7.5);
-- INNERJOIN
SELECT 
    m.title
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
    b.rating > 7.5;