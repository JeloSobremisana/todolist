const Helper = require('../utils/helper');

describe('helper.js tests', () => {
    it('should return success response', () => {
        const result = Helper.successResponse({});
        expect(result.status).toBe('OK');
        expect(result.message).toBeTruthy();
        expect(result.data).toBeTruthy();
    });
    it('should return failed response', () => {
        const result = Helper.failedResponse({});
        expect(result.status).toBe('FAILED');
        expect(result.message).toBeTruthy();
    });
});