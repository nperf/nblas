import {
  strictEqual,
  throws,
} from 'assert';

import { FloatArray } from './types';
import { prefix } from './util';

describe('util', () => {
  describe('prefix', () => {
    it('should work with Float64Array', () => {
      const x: Float64Array = new Float64Array();
      strictEqual('d', prefix(x));
    });

    it('should work with Float32Array', () => {
      const x: Float32Array = new Float32Array();
      strictEqual('s', prefix(x));
    });

    it('should throw error for other typed arrays', () => {
      const x: unknown = new Int32Array();
      throws(prefix.bind(undefined, x as FloatArray), Error);
    });
  });
});
