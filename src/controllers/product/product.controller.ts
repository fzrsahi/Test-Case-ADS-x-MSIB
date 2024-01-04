import { Request, Response } from "express";
import { CreateProductDto } from "./../../interfaces";

export function getAllProducts(req: Request, res: Response) {
  return res.json({ message: "Get All Products" });
}

export function getProductById(req: Request, res: Response) {
  const productId = req.params.id;
  return res.json({ id: productId });
}

export function insertProduct(req: Request, res: Response) {
  const body: CreateProductDto = req.body;
  return res.json({ message: "Insert Product" });
}

export function updateProduct(req: Request, res: Response) {
  return res.json({ message: "Update Product Product" });
}

export function deleteProduct(req: Request, res: Response) {
  return res.json({ message: "Delete Product" });
}
