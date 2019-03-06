async function handler() {
    return "Hello";
}

module.exports = {
    path: '/users',
    method: 'GET',
    options: {
        tags: ['api'],
    },
    handler
};