import { Request, Response } from "express";
import {
  CreateProductDto,
  ProductQueryDto,
  UpdateProductDto,
} from "./../../interfaces";
import { prisma } from "./../../database";
import slugify from "slugify";
import { Prisma, Product } from "@prisma/client";

export async function getAllProducts(req: Request, res: Response) {
  const query: ProductQueryDto = req.query;
  const limit = parseInt(query.limit) || 10;
  const page = query.page || 1;
  const order: any = query.order || "asc";
  const skip: number = (page - 1) * limit;
  const totalCount = await prisma.product.count();


  const data = await prisma.product.findMany({
    take: limit,
    skip,
    include: {
      category: {
        select: {
          name: true,
        },
      },
      Product_Asset: true,
      _count: true,
    },
    orderBy: [
      {
        price: order,
      },
    ],
  });

  const totalPage = Math.ceil(totalCount / limit);

  return res.json({
    statusCode: 200,
    message: "Success Get All Product!",
    page,
    limit,
    totalPage,
    length: data.length,
    totalData: totalCount,
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
    message: "Success Get Product!",
    data,
  });
}

export async function insertProduct(req: Request, res: Response) {
  const body: CreateProductDto = req.body;
  body.slug = slugify(body.name.toLowerCase());

  try {
    const data: Product = await prisma.product.create({
      data: {
        name: body.name,
        price: body.price,
        category_id: body.category_id,
        slug: body.slug,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return res.status(201).json({
      statusCode: 201,
      message: "Success Insert new Product!",
      data,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(400).json({
          statusCode: 400,
          message: "This Product name already exist!",
        });
      } else {
        return res.status(400).json({
          statusCode: 400,
          message: "Category Not Found!",
        });
      }
    }
  }
}

export async function updateProduct(req: Request, res: Response) {
  const body: UpdateProductDto = req.body;
  body.slug = slugify(body.name.toLowerCase());
  const productId = parseInt(req.params.id);
  try {
    const data = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name: body.name,
        price: body.price,
        category_id: body.category_id,
        slug: body.slug,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        Product_Asset: true,
      },
    });

    return res.status(201).json({
      statusCode: 201,
      message: "Success Update Data!",
      data,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(400).json({
          statusCode: 400,
          message: "This Product name already exist!",
        });
      } else {
        return res.status(400).json({
          statusCode: 400,
          message: "Category Not Found!",
        });
      }
    }
  }
}

export async function deleteProduct(req: Request, res: Response) {
  const productId = parseInt(req.params.id);

  try {
    const data = await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    return res.status(200).json({
      statusCode: 200,
      message: "Success Delete Product!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
}
