


CREATE TABLE family (
id INT PRIMARY KEY AUTO_INCREMENT,
surname_family VARCHAR(255) NOT NULL,
count_person INT NOT NULL,
)

 CREATE TABLE person (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    credit_card VARCHAR(16) NOT NULL,
    status VARCHAR(255) NOT NULL,
)


CREATE TABLE adress (
    id INT PRIMARY KEY AUTO_INCREMENT,
    city VARCHAR(20) NOT NULL, 
    street VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    person_id  INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person(id)
)




