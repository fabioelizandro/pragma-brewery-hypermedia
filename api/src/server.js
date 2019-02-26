const express = require('express');
const bodyParser = require('body-parser');

const homeTemplate = require('./templates/home');
const containersTemplate = require('./templates/containers');

module.exports = () => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.get('/', (_, res) => {
    res.set('Content-Type', 'application/xhtml+xml')
    homeTemplate.render({}, res);
  });

  server.get('/containers', (_, res) => {
    res.set('Content-Type', 'application/xhtml+xml')
    containersTemplate.render({}, res);
  });

  return server;
};
