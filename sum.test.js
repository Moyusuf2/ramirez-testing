const sum = require('./sum');

test('3+7 should be 10', () => {
    let res = sum(3,7);
    expect(res).toBe(10);
})