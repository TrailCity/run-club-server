import Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({
 host: 'localhost',
 port: 8000
});
server.route({
  method: "GET",
  path: '/',
  handler: (request, reply) => reply('Hello world!')
});
server.start((err) => {
  if (err) throw err;
  console.log("LOL HAI!");
});