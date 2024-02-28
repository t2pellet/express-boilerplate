import express from 'express';
import testRoutes from './test';
import { testMiddleware } from '@/middlewares/test';

const router = express.Router();

router.use('/test', testMiddleware, testRoutes);

export default router;
