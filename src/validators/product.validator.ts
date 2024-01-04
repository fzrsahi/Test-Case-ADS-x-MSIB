import { Joi } from "express-validation";

export const createProductValidator = {
  body: Joi.object({
    name: Joi.string().required(),
    category_id: Joi.number().required(),
    price: Joi.number().required(),
  }),
};

export const updateProductValidator = {
  body: Joi.object({
    name: Joi.string().optional(),
    category_id: Joi.number().optional(),
    price: Joi.number().optional(),
  }),
};
