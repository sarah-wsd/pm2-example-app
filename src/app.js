import http from 'http';
import express from 'express';
import router from './router';

const initApp = async () => {
  const app = express();

  app.use((req, res, next) => {
    // eslint-disable-next-line no-console
    console.log('PID: ', process.pid);
    return next();
  });

  app.use(await router());

  const server = http.createServer(app);

  server.listen(3000, '0.0.0.0');

  return server;
};

export default initApp;
