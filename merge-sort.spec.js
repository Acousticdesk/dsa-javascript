const { split } = require('./merge-sort');

describe('split', () => {
  it('should split an array with even length into half', () => {
    const arr = [1, 2, 3, 4];
    const [left, right] = split(arr);
    expect(left).toEqual([1, 2]);
    expect(right).toEqual([3, 4]);
  });
  
  it('should split an array with odd length into half', () => {
    const arr = [1, 2, 3];
    const [left, right] = split(arr);
    expect(left).toEqual([1]);
    expect(right).toEqual([2,3 ]);
  });
})
