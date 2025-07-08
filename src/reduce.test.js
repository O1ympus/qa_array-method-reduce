'use strict';

const { reduce } = require('./reduce');

describe('reduce', () => {
  beforeAll(() => {
    Array.prototype.reduce2 = reduce; // eslint-disable-line
  });

  afterAll(() => {
    delete Array.prototype.reduce2;
  });

  it('Func should return sum of all elements when used with sum callback '
    + 'and without second parameter', () => {
    const arr = [1, 2, 3, 4, 5];
    const callBack = jest.fn((res, el) => res + el);

    expect(arr.reduce(callBack)).toBe(15);
    expect(callBack).toHaveBeenCalledTimes(arr.length - 1);
  });
});
