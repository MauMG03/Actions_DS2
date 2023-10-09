const sum = require('./sum');

test('sums to numbers', () => {
    expect(sum(1,2)).toBe(3);
})