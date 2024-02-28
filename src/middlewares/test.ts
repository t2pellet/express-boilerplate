import { Middleware, RouteError } from '@/types';
import { HttpStatusCodes } from '@/constants/http';

const testMiddleware: Middleware = (req, res, next) => {
  if (req.params.someParam != 'test') {
    throw new RouteError(HttpStatusCodes.BAD_REQUEST, 'someParam should have value "test"');
  }
  return next();
};

export { testMiddleware };
