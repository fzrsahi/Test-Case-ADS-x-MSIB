import { Joi } from "express-validation";

export const createProductValidator = {
  body: Joi.object({
    name: Joi.string().required(),
    category_id: Joi.number().required(),
    price: Joi.number().required(),
  }),
};
