import { Request, Response, Router } from "express";
import {
  deleteAsset,
  deleteCategory,
  deleteProduct,
  getAllAssets,
  getAllCategory,
  getAllCategoryById,
  getAllProducts,
  getProductById,
  insertCategory,
  insertProduct,
  updateAsset,
  updateCategory,
  updateProduct,
  uploadAsset,
} from "../controllers";
import {
  createCategoryValidator,
  createProductValidator,
  updateCategoryValidator,
  updateProductValidator,
} from "./../validators";
import { validate } from "express-validation";
import { upload } from "./../utils";

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

routes.get("/products", getAllProducts);
routes.get("/products/:id", getProductById);
routes.post("/products", validate(createProductValidator), insertProduct);
routes.patch("/products/:id", validate(updateProductValidator), updateProduct);
routes.delete("/products/:id", deleteProduct);
routes.post("/products/:id/upload", upload.single("image"), uploadAsset);


routes.get("/categories", getAllCategory);
routes.get("/categories/:id", getAllCategoryById);
routes.post("/categories", validate(createCategoryValidator), insertCategory);
routes.patch(
  "/categories/:id",
  validate(updateCategoryValidator),
  updateCategory
);
routes.delete("/categories/:id", deleteCategory);


routes.patch("/products-asset/:id", upload.single("image"), updateAsset);
routes.patch("/products-asset/:id", upload.single("image"), updateAsset);
routes.get("/products-asset", getAllAssets);
