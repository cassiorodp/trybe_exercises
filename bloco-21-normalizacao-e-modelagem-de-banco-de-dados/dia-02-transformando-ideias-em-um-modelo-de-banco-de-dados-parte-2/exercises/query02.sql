USE sakila;
CREATE VIEW film_info AS
    SELECT 
        a.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS actor,
        f.title
    FROM
        sakila.actor AS a
            INNER JOIN
        sakila.film_actor AS fa ON a.actor_id = fa.actor_id
            INNER JOIN
        sakila.film AS f ON f.film_id = fa.film_id
    ORDER BY actor ASC;
    
SELECT * FROM film_info;
DROP VIEW film_info;