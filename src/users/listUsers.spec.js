const Hapi = require('hapi');

describe('List users', () => {
    let server;
    let request;

    beforeEach(async () => {
        server = new Hapi.Server();
        server.route(require('./listUsers'));

        request = {
            method: 'GET',
            url: 'http://localhost/users',
        };
    });

    it('should return Hello as the response body', async () => {
        const response = await server.inject(request);
        expect(response.payload).toEqual("Hello");
    });
});
