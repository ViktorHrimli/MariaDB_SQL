import { Connection, createPool } from "mariadb";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "haobanjia",
  port: 3307,
  database: "mariaDB_bank",
});

export { pool };
