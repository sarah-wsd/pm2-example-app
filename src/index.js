/* eslint-disable no-console */

import app from './app';

async function main() {
  await app();
}

main()
  .catch((err) => {
    console.error(err);
  });
