USE sakila;
CREATE VIEW movies_languages AS
    SELECT
		f.title,
        l.language_id,
        l.name AS language
    FROM
        sakila.film AS f
            INNER JOIN
        sakila.language AS l ON l.language_id = f.language_id
    ORDER BY f.title ASC;
    
SELECT * FROM movies_languages;
DROP VIEW movies_languages;