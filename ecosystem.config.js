module.exports = {
  apps: [{
    name: 'pm2-example-app',
    watch: [
      'dist',
    ],
    script: 'dist/index.js',
    instances: -1,
    exec_mode: 'cluster',
  }],
};
