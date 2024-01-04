import { Request, Response } from "express";
import { CreateProductDto } from "./../../interfaces";
import { prisma } from "./../../database";

export async function getAllProducts(req: Request, res: Response) {
  const data = await prisma.product.findMany({
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  return res.json({
    statusCode: 200,
    message: "Success Get All Product!",
    data,
  });
}

export async function getProductById(req: Request, res: Response) {
  const productId = parseInt(req.params.id);
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data)
    return res.status(200).json({
      statusCode: 404,
      message: "Product Not Found!",
    });

  return res.status(200).json({
    statusCode: 200,
    message: "Success Get All Product!",
    data,
  });
}

export async function insertProduct(req: Request, res: Response) {
  const body: CreateProductDto = req.body;
}

export function updateProduct(req: Request, res: Response) {
  return res.json({ message: "Update Product Product" });
}

export function deleteProduct(req: Request, res: Response) {
  return res.json({ message: "Delete Product" });
}
