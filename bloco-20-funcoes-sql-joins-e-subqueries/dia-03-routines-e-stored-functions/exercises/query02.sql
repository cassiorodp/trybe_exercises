USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_movie_update
    BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	IF OLD.ticket_price > NEW.ticket_price THEN
		SET NEW.ticket_price_estimation = 'Decreasing';
	ELSE
		SET NEW.ticket_price_estimation = 'Increasing';
    END IF;
END $$

DELIMITER ;

UPDATE BeeMovies.movies
SET ticket_price = 310
WHERE movie_id = 2;