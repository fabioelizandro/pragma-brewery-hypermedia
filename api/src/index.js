require('dotenv').config();

const throng = require('throng');

const createServer = require('./server');

const start = (workerId) => {
  const port = process.env.PORT;
  const server = createServer();

  server.listen(port, () => console.log(`API (${workerId}) listening on port ${port}!`));
};

throng({
  workers: process.env.WEB_CONCURRENCY,
  lifetime: Infinity,
  grace: 1000,
  start
});
