import express from 'express';
import { routeHandlerExample } from '@/handlers/example';
import { param } from 'express-validator';
import validate from '@/middlewares/validate';

const router = express.Router();

router.get('/route', param('test').exists(), validate, routeHandlerExample);

export default router;
