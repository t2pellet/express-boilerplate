import { RequestHandler } from 'express';

const routeHandlerExample: RequestHandler = (req, res) => {
  // Do something
  return res.sendStatus(200);
};

export { routeHandlerExample };
