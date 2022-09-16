// @ts-nocheck

import { decoderFunc } from '../src/decoder.js';

const decoder = decoderFunc();

// BEGIN (write your solution here)
test('first test decoder', () => {
  expect(decoder('qwerty')).toEqual('31 42 05 32 34 44');
  expect(decoder('qwer')).toEqual('31 42 05 32');
})

// END
