-- create a table called force_name
CREATE TABLE IF NOT EXISTS
id_not_null(id INT AUTO_INCREMENT UNIQUE NOT NULL,
name VARCHAR(256), PRIMARY KEY (id));
