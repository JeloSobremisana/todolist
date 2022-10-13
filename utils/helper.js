const Helper = {
    successResponse: (data) => {
        return {
            status: 'OK',
            message: 'Success',
            data
        };
    },
    failedResponse: (error) => {
        return {
            status: 'FAILED',
            message: error
        }
    }
};

module.exports = Helper;