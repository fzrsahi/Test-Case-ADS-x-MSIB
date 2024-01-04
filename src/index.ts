import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { routes } from "./routes";
import bodyParser from "body-parser";
import { ValidationError } from "express-validation";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1/", routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Server Running On : http://localhost:${PORT}`);
});
