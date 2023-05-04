import { app } from "./index";
import { pool } from "./db/db";

app.listen(5000, () => {
  try {
    console.log("Server listen on 5000 port!");

    pool
      .getConnection()
      .then((conn) => {
        console.log("Connected successfully to MariaDB database");
      })
      .catch((error) => {
        console.log("Error connecting to database:", error);
      });
  } catch (error) {
    process.exit(1);
  }
});
