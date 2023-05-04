import expres from "express";
import { pool } from "../db/db";

const router = expres.Router();

router.post("/table", async (req, res, next) => {
  console.log("wadawd");

  pool
    .query(
      "CREATE TABLE IF NOT EXISTS person (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, phone VARCHAR(20) NOT NULL, contact_person VARCHAR(255) NOT NULL, credit_card VARCHAR(16) NOT NULL,status VARCHAR(255) NOT NULL) "
    )
    .then((con) => res.status(201).json({ msg: "Table create successfully!" }));
});

export { router };
