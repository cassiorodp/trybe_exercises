SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50;