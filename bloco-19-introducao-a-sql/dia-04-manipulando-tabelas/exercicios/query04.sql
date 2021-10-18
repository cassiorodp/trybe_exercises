SET SQL_SAFE_UPDATES = 0;

UPDATE Pixar.Movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';

SELECT * FROM Pixar.Movies
WHERE title LIKE 'rata%';