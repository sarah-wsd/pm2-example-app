import fs from 'fs';
import path from 'path';
import {
  Router,
} from 'express';

const getRouteFiles = async () => {
  const promise = new Promise((resolve, rejects) => {
    fs.readdir(__dirname, (err, files) => {
      if (err) return rejects(err);

      const routeFiles = files.filter((file) => file.match(/route/));

      return resolve(routeFiles);
    });
  });

  return promise;
};

const loadRouteFile = async (mainRouter, routeFile) => {
  const routeModule = await import(path.join(__dirname, routeFile));

  mainRouter.use(routeModule.ROUTE_BASE_PATH, routeModule.default);

  return true;
};

const initRouter = async () => {
  const mainRouter = new Router();

  const routeFiles = await getRouteFiles();

  await Promise.all(routeFiles.map((routeFile) => loadRouteFile(mainRouter, routeFile)));

  return mainRouter;
};

export default initRouter;
