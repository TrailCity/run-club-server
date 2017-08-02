import hapi from 'hapi';
// import r from 'rethinkdb'; // ? hapi thinky?

const server = new hapi.Server();

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