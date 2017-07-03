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

('shirt', 'A', 1, 'http://random.img', 5.99),
('shirt', 'B', 2, 'http://random.img', 5.99),
('shirt', 'C', 3, 'http://random.img', 7.99),
('shirt', 'D', 6, 'http://random.img', 6.99),
('shirt', 'C', 8, 'http://random.img', 7.99),
('shirt', 'A', 12, 'http://random.img', 8.99);
