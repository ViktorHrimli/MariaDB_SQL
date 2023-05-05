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

export { router };
