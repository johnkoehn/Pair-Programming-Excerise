// Copyright (c) 2018 Deere & Company

const Hapi = require('hapi');

async function init() {
    const server = Hapi.server({
        port: 3000,
        routes: {
            cors: true,
        }
    });

    server.route(require('./users/listUsers'));
    return await server.start();
}

init().then(() => console.log('Server started'))
    .catch((err) => {
        console.error('Error starting server', err);
        process.exit(1);
    });
