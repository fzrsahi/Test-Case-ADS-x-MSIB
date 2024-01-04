import { Request, Response } from "express";
import { prisma } from "./../../database";
import fs from "fs-extra";

export async function uploadAsset(req: Request, res: Response) {
  const productId = parseInt(req.params.id);
  const image = req.file;

  try {
    if (req.file.size > 3292705) {
      throw Error("Size Cannot More than 3mb");
    }

    const data = await prisma.product_Asset.create({
      data: {
        image: image.filename,
        product_id: productId,
      },
      select: {
        product: {
          include: {
            category: true,
          },
        },
      },
    });

    return res.status(201).json({
      statusCode: 201,
      message: "Success Upload Photo!",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      message: error.message,
    });
  }
}

export async function updateAsset(req: Request, res: Response) {
  const assetId = parseInt(req.params.id);
  console.log(assetId);

  const image = req.file;
  const currentImageName = await prisma.product_Asset.findUnique({
    where: {
      id: assetId,
    },
  });

  try {
    if (req.file.size > 3292705) {
      throw Error("Size Cannot More than 3mb");
    }

    const data = await prisma.product_Asset.update({
      where: {
        id: assetId,
      },
      data: {
        image: image.filename,
      },
    });

    await fs.remove(`uploads/${currentImageName.image}`);

    return res.status(201).json({
      statusCode: 201,
      message: "Success Update Photo!",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      message: error.message,
    });
  }
}

export async function deleteAsset(req: Request, res: Response) {
  const assetId = parseInt(req.params.id);
  const currentImageName = await prisma.product_Asset.findUnique({
    where: {
      id: assetId,
    },
  });
  const data = await prisma.product_Asset.delete({
    where: {
      id: assetId,
    },
  });

  await fs.remove(`uploads/${currentImageName.image}`);

  return res.status(200).json({
    statusCode: 200,
    message: "Success Delete Asset!",
    data,
  });
}
