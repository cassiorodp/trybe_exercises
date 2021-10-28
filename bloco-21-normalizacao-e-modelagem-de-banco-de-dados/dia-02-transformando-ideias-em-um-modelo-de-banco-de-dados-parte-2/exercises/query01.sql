USE sakila;
CREATE VIEW film_with_categories AS
    SELECT 
        f.title, c.category_id, c.name
    FROM
        sakila.film AS f
            INNER JOIN
        sakila.film_category AS fc ON fc.film_id = f.film_id
            INNER JOIN
        sakila.category AS c ON c.category_id = fc.category_id
    ORDER BY f.title ASC;
    
SELECT * FROM film_with_categories;
DROP VIEW film_with_categories;