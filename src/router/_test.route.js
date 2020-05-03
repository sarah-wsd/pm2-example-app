import {
  Router,
} from 'express';

const testRouter = new Router();

testRouter.get('/', (req, res) => {
  res.send('Hello word');
});

export const ROUTE_BASE_PATH = '/test';
export default testRouter;
