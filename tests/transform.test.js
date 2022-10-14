const Transform = require('../utils/transform');

describe('transform.js tests', () => {
    describe('addBooleanString functiom testing', () => {
        it('should have addtional key name strstring on return', () => {
            const dummyData = [
                {
                    _id: "634833be81410341dfb93f31",
                    action: 'test',
                    status: true
                },
                {
                    _id: "634833bc81410341dfb93f2d",
                    action: 'test',
                    status: true
                },
                {
                    _id: "634833b981410341dfb93f29",
                    action: 'test',
                    status: true
                },
                {
                    _id: "634833b781410341dfb93f25",
                    action: 'test',
                    status: true
                },
                {
                    _id: "6348027f79354ff6c17201b7",
                    action: 'new',
                    status: true
                }
            ];
            const result = Transform.addBooleanString(dummyData);
            for (const res of result) {
                expect(res.strstatus).toBeTruthy();
                expect(typeof res.strstatus).toBe('string');
            }
        });
    });

    describe('paginationDatas function testing', () => {
        it('should have paginationData key, skipVal, previous and next on return', () => {
            const result = Transform.paginationDatas(2, 5, 6);
            expect(result.next).toBeTruthy();
            expect(result.previous).toBeTruthy();
            expect(result.paginationData).toBeTruthy();
            expect(result.skipVal).toBeTruthy();
            expect(result.test).toBeFalsy();
        })
    });
});