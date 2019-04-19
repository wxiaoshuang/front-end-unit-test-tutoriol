const assert = require('assert');

const sum = require('../src/hello');

describe('#hello.js', () => {

    describe('#sum()', () => {
        it('sum() should return 0', () => {
            assert.equal(sum(), 0);
        });

        it('sum(1) should return 1', () => {
            assert.equal(sum(1), 1);
        });

        it('sum(1, 2) should return 3', () => {
            assert.equal(sum(1, 2), 3);
        });

        it('sum(1, 2, 3) should return 6', () => {
            assert.equal(sum(1, 2, 3), 6);
        });
    });
});