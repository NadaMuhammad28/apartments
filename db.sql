CREATE DATABASE IF NOT EXISTS apartment_db;

USE apartment_db;

-- Create the Apartment table
CREATE TABLE IF NOT EXISTS Apartment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Apartment (name, location, price, description) VALUES
('Nile View Apartment', 'Downtown Cairo', 5.000000, ' A stunning view of the Nile.'),
('A Compound in New Cairo', 'New Cairo', 10.000000, 'Located in the New Cairo area.');
