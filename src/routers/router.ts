import expres from "express";
import { pool } from "../db/db";

const router = expres.Router();

router.post("/table", async (req, res, next) => {
  pool
    .query(
      "CREATE TABLE IF NOT EXISTS person (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, phone VARCHAR(20) NOT NULL, contact_person VARCHAR(255) NOT NULL, credit_card VARCHAR(255) NOT NULL,status VARCHAR(255) NOT NULL)"
    )
    .then((con) => res.status(201).json({ msg: "Table create successfully!" }));
});

router.post("/ref/:id", async (req, res, next) => {
  const { city, street, location } = req.body;
  const person_id = req.params.id;

  pool
    .query(
      "INSERT INTO adress (city, street, location, person_id) VALUES (?, ?, ?, ?)",
      [city, street, location, person_id]
    )
    .then((con) => {
      res.json({ msg: "Table create!" });
      console.log(con);
    });
});

router.post("/person", async (req, res, next) => {
  const { name, phone, contact_person, credit_card, status } = req.body;
  pool
    .query(
      "INSERT INTO person (name, phone, contact_person, credit_card, status) VALUES (?, ?, ?, ?, ?)",
      [name, phone, contact_person, credit_card, status]
    )
    .then((result) => {
      res.status(201).json({ msg: "Person create!" });
      console.log(result);
    });
});

router.get("/get", async (req, res, next) => {
  pool
    .query("SELECT * FROM person")
    .then((result) => res.status(200).json(result));
});

router.delete("/delete/:id", async (req, res, next) => {
  pool
    .query(`DELETE FROM person WHERE id=${req.params.id}`)
    .then((result) =>
      res.send({ msg: `Person whith id ${req.params.id} delete!` })
    );
});

router.get("/innerjoin/:id", async (req, res, next) => {
  pool
    .query(
      `SELECT person.id, person.name, person.phone, adress.location, adress.city, adress.street, adress.person_id FROM person INNER JOIN adress ON person.id = ${req.params.id}`
    )
    .then((result) => res.status(200).json(result));
});
export { router };
