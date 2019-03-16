import {
  deepStrictEqual,
  strictEqual,
} from 'assert';

import {
  asum,
  axpy,
  copy,
  dot,
  gemm,
  iamax,
  nrm2,
  scal,
  swap,
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
  // Should perform plane rotation of points
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
  // Computes matrix-vector product using a general band matrix
});

describe('?gemv', () => {
  // Computes a matrix-vector product using a general matrix
});

describe('?ger', () => {
  // Performs a rank-1 update of a general matrix
});

describe('?sbmv', () => {
  // Computes a matrix-vector product using a symmetric band matrix
});

describe('?spmv', () => {
  // Computes a matrix-vector product using a symmetric packed matrix
});

describe('?spr', () => {
  // Performs a rank-1 update of a symmetric packed matrix
});

describe('?spr2', () => {
  // Performs a rank-2 update of a symmetric packed matrix
});

describe('?symv', () => {
  // Computes a matrix-vector product for a symmetric matrix
});

describe('?syr', () => {
  // Performs a rank-1 update of a symmetric matrix
});

describe('?syr2', () => {
  // Performs a rank-2 update of a symmetric matrix
});

describe('?tbmv', () => {
  // Computes a matrix-vector product using a triangular band matrix
});

describe('?tbsv', () => {
  // Solves a system of linear equations whose coefficients are in a triangular band matrix
});

describe('?tpmv', () => {
  // Computes a matrix-vector product using a triangular band matrix
});

describe('?tpsv', () => {
  // Solves a system of linear equations whose coefficients are in a triangular packed matrix
});

describe('?trmv', () => {
  // Computes a matrix-vector product using a triangular matrix
});

describe('?trsv', () => {
  // Solves a system of linear equations whose coefficients are in a triangular matrix
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
  // Computes a matrix-matrix product where one input matrix is symmetric
});

describe('?syrk', () => {
  // Performs a symmetric rank-k update
});

describe('?syr2k', () => {
  // Performs a symmetric rank-2k update
});

describe('?trmm', () => {
  // Computes a matrix-matrix product where one input matrix is triangular
});

describe('?trsm', () => {
  // Solves a triangular matrix equation
});
