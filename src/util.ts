import { FloatArray } from './types';

export const prefix: (x: FloatArray) => 'd' | 's' = (x: FloatArray): 'd' | 's' => {
  if (x instanceof Float64Array) {
    return 'd';
  }

  if (x instanceof Float32Array) {
    return 's';
  }

  throw new Error('invalid type!');
};
