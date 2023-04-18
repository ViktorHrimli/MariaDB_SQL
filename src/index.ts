import express, { Request, Response, NextFunction, Express } from "express";
const cors = require("cors");

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("api/", () => {});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found", status: "Faild" });
});

app.use((req: Request, res: Response) => {
  res.status(500).json({ message: "Server ERROR", status: "Faild" });
});

export { app };
