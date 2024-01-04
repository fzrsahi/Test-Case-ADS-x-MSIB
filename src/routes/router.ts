import { Request, Response, Router } from "express";
import {
  deleteAsset,
  deleteCategory,
  deleteProduct,
  getAllCategory,
  getAllProducts,
  getProductById,
  insertCategory,
  insertProduct,
  updateAsset,
  updateCategory,
  updateProduct,
  uploadAsset,
} from "../controllers";
import { createProductValidator } from "./../validators";
import { validate } from "express-validation";

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

routes.get("/products", getAllProducts);
routes.get("/products/:id", getProductById);
routes.post("/products", validate(createProductValidator), insertProduct);
routes.patch("/products", updateProduct);
routes.delete("/products", deleteProduct);

routes.get("/categories", getAllCategory);
routes.post("/categories", insertCategory);
routes.patch("/categories", updateCategory);
routes.delete("/categories", deleteCategory);

routes.post("/products/asset", uploadAsset);
routes.patch("/products/asset", updateAsset);
routes.delete("/products/asset", deleteAsset);
