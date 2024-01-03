import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server Running On : http://localhost:${PORT}`);
});
