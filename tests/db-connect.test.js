jest.mock('mongoose');
const mongoose = require('mongoose');
const connect = require('../utils/db-connect');

describe('db-connect.js tests', () => {
    it('should connect to mongodb atlas instance', async () => {
        mongoose.connect.mockImplementationOnce(() => 'test');
        connect();
        expect(mongoose.connect.mock.calls.length).toBe(1);
    })
});