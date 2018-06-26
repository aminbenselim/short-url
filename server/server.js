'use strict';

const Hapi = require('hapi');

const deleteLinkHandler = require('./handlers/deleteLinkHandler')
const createHashHandler =  require('./handlers/createHashHandler')
const getLinkFromHashHandler = require('./handlers/getLinkFromHashHandler')
const updateLinkHandler = require('./handlers/updateLinkHandler')


const server = Hapi.server({
    host: 'localhost',
    port: 8888,
});

server.route([
  {
    method: 'POST',
    path: '/v1/links',
    handler: createHashHandler,
  } , {
    method: 'GET',
    path: '/v1/{hash}',
    handler: getLinkFromHashHandler,
  } , {
    method: 'PUT',
    path: '/v1/{hash}/update',
    handler: updateLinkHandler,
  }, {
    method: 'DELETE',
    path: '/v1/{hash}/delete',
    handler: deleteLinkHandler,
  }]
);

async function init() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
};

init();
