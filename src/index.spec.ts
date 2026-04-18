import { deepStrictEqual, strictEqual } from 'assert';

import {
  asum,
  axpy,
  copy,
  dot,
  gbmv,
  gemm,
  gemv,
  ger,
  iamax,
  nrm2,
  rot,
  sbmv,
  scal,
  spmv,
  spr,
  spr2,
  swap,
  symm,
  symv,
  syr,
  syr2,
  syr2k,
  syrk,
  tbmv,
  tbsv,
  tpmv,
  tpsv,
  trmm,
  trmv,
  trsm,
  trsv,
} from './';

describe('?asum', () => {
  it('works for different sizes', () => {
    strictEqual(6, asum(new Float64Array([1, 2, 3])));
    strictEqual(6, asum(new Float64Array([1, 2, 0, 3])));
  });

  it('works for vectors containing negative values', () => {
    strictEqual(6, asum(new Float64Array([-1, -2, 1, 2])));
    strictEqual(13, asum(new Float64Array([-1, -2, 1, 2, 3, 4])));
  });
});

describe('?axpy', () => {
  it('works for x + y', () => {
    const x: Float64Array = new Float64Array([1, 2, 3]);
    const y: Float64Array = new Float64Array([6, 5, 4]);

    axpy(x, y);
    deepStrictEqual(y, new Float64Array([7, 7, 7]));
  });

  it('works for (-x) + y', () => {
    const x: Float64Array = new Float64Array([1, 2, 3]);
    const y: Float64Array = new Float64Array([6, 5, 4]);

    axpy(x, y, -1);
    deepStrictEqual(y, new Float64Array([5, 3, 1]));
  });

  it('works for 2x + y', () => {
    const x: Float64Array = new Float64Array([-1, 3, 8, 1]);
    const y: Float64Array = new Float64Array([-10, 2, 4, -1]);

    axpy(x, y, 2);
    deepStrictEqual(y, new Float64Array([-12, 8, 20, 1]));
  });
});

describe('?copy', () => {
  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([1, 2, 3]);
    const y: Float64Array = new Float64Array(3);

    copy(x, y);
    deepStrictEqual(x, y);
  });

  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([5, 1, 3, 8]);
    const y: Float64Array = new Float64Array(4);

    copy(x, y);
    deepStrictEqual(x, y);
  });
});

describe('?dot', () => {
  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([1, 2, 3]);
    const y: Float64Array = new Float64Array([4, 5, 6]);

    strictEqual(32, dot(x, y));
  });

  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([-1, 3, 7, 4]);
    const y: Float64Array = new Float64Array([2, 1, 3, 0]);

    strictEqual(22, dot(x, y));
  });
});

describe('?nrm2', () => {
  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([1, 2, 3]);

    strictEqual(Math.sqrt(14).toPrecision(6), nrm2(x).toPrecision(6));
  });

  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([3, 7, 1, 0]);

    strictEqual(Math.sqrt(59).toPrecision(6), nrm2(x).toPrecision(6));
  });
});

describe('?rot', () => {
  it('rotates two vectors in the plane', () => {
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([3, 4]);

    rot(x, y, 0, 1);
    deepStrictEqual(x, new Float64Array([3, 4]));
    deepStrictEqual(y, new Float64Array([-1, -2]));
  });
});

describe('?scal', () => {
  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([1, 2, 3]);

    scal(x, 2);
    deepStrictEqual(x, new Float64Array([2, 4, 6]));
  });

  it('works as expected for negative values', () => {
    const x: Float64Array = new Float64Array([1, -2, 3, 0]);

    scal(x, -2);
    deepStrictEqual(x, new Float64Array([-2, 4, -6, -0]));
  });
});

describe('?swap', () => {
  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([1, 2, 3]);
    const y: Float64Array = new Float64Array(3);

    swap(x, y);
    deepStrictEqual(x, new Float64Array(3));
    deepStrictEqual(y, new Float64Array([1, 2, 3]));
  });

  it('works as expected for different sizes', () => {
    const x: Float64Array = new Float64Array([3, 4, 7, -1]);
    const y: Float64Array = new Float64Array([1, 3, -1, 0]);

    swap(x, y);
    deepStrictEqual(x, new Float64Array([1, 3, -1, 0]));
    deepStrictEqual(y, new Float64Array([3, 4, 7, -1]));
  });
});

describe('i?amax', () => {
  it('works as expected for different values', () => {
    const x: Float64Array = new Float64Array([1, 2, 3]);

    strictEqual(3, x[iamax(x)]);
  });

  it('works as expected for different values', () => {
    const x: Float64Array = new Float64Array([-1, -2, 0, 7]);

    strictEqual(7, x[iamax(x)]);
  });
});

describe('?gbmv', () => {
  it('works for a 1 x 1 diagonal band matrix', () => {
    const a = new Float64Array([2]);
    const x = new Float64Array([3]);
    const y = new Float64Array([0]);

    gbmv(a, x, y, 0, 0);
    deepStrictEqual(y, new Float64Array([6]));
  });
});

describe('?gemv', () => {
  it('computes a dense matrix-vector product', () => {
    const a = new Float64Array([2, 0, 0, 3]);
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([0, 0]);

    gemv(a, x, y);
    deepStrictEqual(y, new Float64Array([2, 6]));
  });
});

describe('?ger', () => {
  it('performs a rank-1 update', () => {
    const a = new Float64Array(4);
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([3, 4]);

    ger(a, x, y);
    deepStrictEqual(a, new Float64Array([3, 4, 6, 8]));
  });
});

describe('?sbmv', () => {
  it('computes a symmetric band matrix-vector product', () => {
    const a = new Float64Array([2, 1, 3, 0]);
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([0, 0]);

    sbmv(a, x, y, 1);
    deepStrictEqual(y, new Float64Array([4, 7]));
  });
});

describe('?spmv', () => {
  it('computes a symmetric packed matrix-vector product', () => {
    const ap = new Float64Array([2, 1, 3]);
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([0, 0]);

    spmv(ap, x, y);
    deepStrictEqual(y, new Float64Array([4, 7]));
  });
});

describe('?spr', () => {
  it('performs a rank-1 update on a symmetric packed matrix', () => {
    const ap = new Float64Array([2, 1, 3]);
    const x = new Float64Array([1, 2]);

    spr(ap, x);
    deepStrictEqual(ap, new Float64Array([3, 3, 7]));
  });
});

describe('?spr2', () => {
  it('performs a rank-2 update on a symmetric packed matrix', () => {
    const ap = new Float64Array([2, 1, 3]);
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([3, 4]);

    spr2(ap, x, y);
    deepStrictEqual(ap, new Float64Array([8, 11, 19]));
  });
});

describe('?symv', () => {
  it('computes a symmetric matrix-vector product', () => {
    const a = new Float64Array([2, 1, 1, 3]);
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([0, 0]);

    symv(a, x, y);
    deepStrictEqual(y, new Float64Array([4, 7]));
  });
});

describe('?syr', () => {
  it('performs a rank-1 update on a symmetric matrix', () => {
    const a = new Float64Array([2, 1, 1, 3]);
    const x = new Float64Array([1, 2]);

    syr(a, x);
    deepStrictEqual(a, new Float64Array([3, 3, 1, 7]));
  });
});

describe('?syr2', () => {
  it('performs a rank-2 update on a symmetric matrix', () => {
    const a = new Float64Array([2, 1, 1, 3]);
    const x = new Float64Array([1, 2]);
    const y = new Float64Array([3, 4]);

    syr2(a, x, y);
    deepStrictEqual(a, new Float64Array([8, 11, 1, 19]));
  });
});

describe('?tbmv', () => {
  it('computes a triangular band matrix-vector product', () => {
    const a = new Float64Array([2, 1, 3, 0]);
    const x = new Float64Array([1, 2]);

    tbmv(a, x);
    deepStrictEqual(x, new Float64Array([2, 6]));
  });
});

describe('?tbsv', () => {
  it('solves a triangular band system', () => {
    const a = new Float64Array([2, 1, 3, 0]);
    const x = new Float64Array([4, 6]);

    tbsv(a, x);
    deepStrictEqual(x, new Float64Array([2, 2]));
  });
});

describe('?tpmv', () => {
  it('computes a triangular packed matrix-vector product', () => {
    const ap = new Float64Array([2, 1, 3]);
    const x = new Float64Array([1, 2]);

    tpmv(ap, x);
    deepStrictEqual(x, new Float64Array([4, 6]));
  });
});

describe('?tpsv', () => {
  it('solves a triangular packed system', () => {
    const ap = new Float64Array([2, 1, 3]);
    const x = new Float64Array([4, 6]);

    tpsv(ap, x);
    deepStrictEqual(x, new Float64Array([1, 2]));
  });
});

describe('?trmv', () => {
  it('computes a triangular matrix-vector product', () => {
    const a = new Float64Array([2, 1, 0, 3]);
    const x = new Float64Array([1, 2]);

    trmv(a, x);
    deepStrictEqual(x, new Float64Array([4, 6]));
  });
});

describe('?trsv', () => {
  it('solves a triangular matrix system', () => {
    const a = new Float64Array([2, 1, 0, 3]);
    const x = new Float64Array([4, 6]);

    trsv(a, x);
    deepStrictEqual(x, new Float64Array([1, 2]));
  });
});

describe('?gemm', () => {
  it('works for 3 x 1 * 1 x 3', () => {
    // 1 x 3 matrix
    const x: Float64Array = new Float64Array([1, 2, 3]);

    // 3 x 1 matrix
    const y: Float64Array = new Float64Array([2, 3, 4]);

    // 3 x 3 matrix
    const z: Float64Array = new Float64Array(9);

    gemm(x, y, z, 3, 3, 1);
    deepStrictEqual(z, new Float64Array([2, 3, 4, 4, 6, 8, 6, 9, 12]));
  });

  it('works for 2 x 2 * 2 x 2', () => {
    // 2 x 2 matrix
    const x: Float64Array = new Float64Array([1, 2, 3, 4]);

    // 2 x 2 matrix
    const y: Float64Array = new Float64Array([5, 6, 7, 8]);

    // 2 x 2 matrix
    const z: Float64Array = new Float64Array(4);

    gemm(x, y, z, 2, 2, 2);
    deepStrictEqual(z, new Float64Array([19, 22, 43, 50]));
  });
});

describe('?symm', () => {
  it('computes a matrix-matrix product with a symmetric matrix', () => {
    const a = new Float64Array([2, 1, 1, 3]);
    const b = new Float64Array([1, 2, 3, 4]);
    const c = new Float64Array(4);

    symm(a, b, c, 2, 2);
    deepStrictEqual(c, new Float64Array([5, 8, 10, 14]));
  });
});

describe('?syrk', () => {
  it('performs a symmetric rank-k update', () => {
    const a = new Float64Array([1, 2, 3, 4]);
    const c = new Float64Array(4);

    syrk(a, c, 2, 2);
    deepStrictEqual(c, new Float64Array([5, 11, 0, 25]));
  });
});

describe('?syr2k', () => {
  it('performs a symmetric rank-2k update', () => {
    const a = new Float64Array([1, 2, 3, 4]);
    const b = new Float64Array([5, 6, 7, 8]);
    const c = new Float64Array(4);

    syr2k(a, b, c, 2, 2);
    deepStrictEqual(c, new Float64Array([34, 62, 0, 106]));
  });
});

describe('?trmm', () => {
  it('computes a matrix-matrix product with a triangular matrix', () => {
    const a = new Float64Array([2, 1, 0, 3]);
    const b = new Float64Array([1, 2, 3, 4]);

    trmm(a, b, 2, 2);
    deepStrictEqual(b, new Float64Array([5, 8, 9, 12]));
  });
});

describe('?trsm', () => {
  it('solves a triangular matrix equation', () => {
    const a = new Float64Array([2, 1, 0, 3]);
    const b = new Float64Array([5, 8, 9, 12]);

    trsm(a, b, 2, 2);
    deepStrictEqual(b, new Float64Array([1, 2, 3, 4]));
  });
});
