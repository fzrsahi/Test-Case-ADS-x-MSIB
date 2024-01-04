import { Request, Response } from "express";

export function getAllCategory(req: Request, res: Response) {
  return res.json({ message: "Get All Category" });
}

export function insertCategory(req: Request, res: Response) {
  return res.json({ message: "Insert Category" });
}

export function updateCategory(req: Request, res: Response) {
  return res.json({ message: "Update Category" });
}

export function deleteCategory(req: Request, res: Response) {
  return res.json({ message: "Delete Category" });
}
