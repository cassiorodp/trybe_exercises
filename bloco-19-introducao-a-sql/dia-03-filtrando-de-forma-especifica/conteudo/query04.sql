SELECT COUNT(first_name) FROM sakila.customer
WHERE active IS TRUE
AND store_id = 1;