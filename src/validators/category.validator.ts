import { Joi } from "express-validation";

export const createCategoryValidator = {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  };


  export const updateCategoryValidator = {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  };