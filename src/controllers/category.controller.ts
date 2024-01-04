import { Request, Response } from "express";
import { prisma } from "./../database";
import { CreateCategoryDto, UpdateCategoryDto } from "./../interfaces";

export async function getAllCategory(req: Request, res: Response) {
  const data = await prisma.category.findMany();
  return res.status(200).json({
    statusCode: 200,
    message: "Success Get All Categories!",
    data,
  });
}

export async function getAllCategoryById(req: Request, res: Response) {
  const categoryId = parseInt(req.params.id);
  const data = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });

  if (!data)
    return res.status(400).json({
      statusCode: 404,
      message: "Category Not Found!",
    });

  return res.status(200).json({
    statusCode: 200,
    message: "Success Find Category!",
    data,
  });
}

export async function insertCategory(req: Request, res: Response) {
  const body: CreateCategoryDto = req.body;
  const data = await prisma.category.create({
    data: {
      name: body.name,
    },
  });

  return res.status(201).json({
    statusCode: 201,
    message: "Success Create Category!",
    data,
  });
}

export async function updateCategory(req: Request, res: Response) {
  const categoryId = parseInt(req.params.id);
  const body: UpdateCategoryDto = req.body;

  const data = await prisma.category.update({
    where: {
      id: categoryId,
    },
    data: {
      name: body.name,
    },
  });

  return res.status(201).json({
    statusCode: 201,
    message: "Success Update Category!",
    data,
  });
}

export async function deleteCategory(req: Request, res: Response) {
  const categoryId = parseInt(req.params.id);

  const data = await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });

  return res.status(200).json({
    statusCode: 200,
    message: "Success Delete Category!",
    data,
  });
}
