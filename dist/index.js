'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();
server.connection({
  host: 'localhost',
  port: 8000
});
server.route({
  method: "GET",
  path: '/',
  handler: function handler(request, reply) {
    return reply('Hello world!');
  }
});
server.start(function (err) {
  if (err) throw err;
  console.log("LOL HAI!");
});