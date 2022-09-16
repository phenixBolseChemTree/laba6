// // @ts-check

import getFunction from '../src/coder.js';

const coder = getFunction();

test('test coder', () => {
  expect(coder('22 23 43')).toEqual('mnx');
})
