import { app } from "./index";
import { pool } from "./db/db";

app.listen(5000, () => {
  try {
    console.log("Server listen on 5000 port!");

    pool
      .getConnection()
      .then((conn) => {
        console.log("Connected successfully to MariaDB database");
        conn
          .query(
            "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))"
          )
          .then((result) => {
            console.log("Table created successfully:", result);
          })
          .catch((error) => {
            console.log("Error creating table:", error);
          })
          .finally(() => {
            conn.release();
            console.log("Connection released");
          });
      })
      .catch((error) => {
        console.log("Error connecting to database:", error);
      });
  } catch (error) {
    process.exit(1);
  }
});
