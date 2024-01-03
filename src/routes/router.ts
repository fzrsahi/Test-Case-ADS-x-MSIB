
import { Router } from 'express';

export const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});