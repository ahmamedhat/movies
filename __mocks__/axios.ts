module.exports = {
    get: jest.fn().mockResolvedValue(),
    post: jest.fn().mockResolvedValue(),
    create: jest.fn(function () {
        return this;
    }),
    interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() }
    }
};