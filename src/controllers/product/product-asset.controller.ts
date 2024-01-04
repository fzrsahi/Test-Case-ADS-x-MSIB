import { Request, Response } from "express";

export function uploadAsset(req: Request, res: Response) {
  return res.json({ message: "Insert Asset" });
}

export function updateAsset(req: Request, res: Response) {
  return res.json({ message: "Update Asset" });
}

export function deleteAsset(req: Request, res: Response) {
  return res.json({ message: "Delete Asset" });
}
