CREATE TABLE inventory (
  	id SERIAL PRIMARY KEY,
  	name VARCHAR(240),
    shelf VARCHAR(240),
    bin INTEGER,
    image VARCHAR(240),
    price INTEGER
);

INSERT INTO inventory (name, shelf, bin, image, price)

VALUES

('item A1', 'A', 1, 'http://lorempixel.com/200/200/business/', 6),
('item A2', 'A', 2, 'http://lorempixel.com/200/200/business/', 4),
('item A3', 'A', 3, 'http://lorempixel.com/200/200/business/', 3),

('item B1', 'B', 1, 'http://lorempixel.com/200/200/business/', 10),

('item C1', 'C', 1, 'http://lorempixel.com/200/200/business/', 10),
('item C2', 'C', 2, 'http://lorempixel.com/200/200/business/', 7),
('item C3', 'C', 3, 'http://lorempixel.com/200/200/business/', 5),
('item C4', 'C', 4, 'http://lorempixel.com/200/200/business/', 12),
('item C5', 'C', 5, 'http://lorempixel.com/200/200/business/', 15),

('item D1', 'D', 1, 'http://lorempixel.com/200/200/business/', 9),
('item D2', 'D', 2, 'http://lorempixel.com/200/200/business/', 1);
('item D5', 'D', 5, 'http://lorempixel.com/200/200/business/', 6);
