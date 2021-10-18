SELECT id FROM Pixar.Movies
WHERE director = 'Andrew Staton';
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos (2 e 9)

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (2, 9);
 
DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';