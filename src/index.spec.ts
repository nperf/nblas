import * as assert from 'assert';
import * as nblas from './';

describe('?asum', () => {
  it('works for different sizes', () => {
    assert.equal(6, nblas.asum(new Float64Array([1, 2, 3])));
    assert.equal(6, nblas.asum(new Float64Array([1, 2, 0, 3])));
  });

  it('works for vectors containing negative values', () => {
    assert.equal(6, nblas.asum(new Float64Array([-1, -2, 1, 2])));
    assert.equal(13, nblas.asum(new Float64Array([-1, -2, 1, 2, 3, 4])));
  });
});

describe('?axpy', () => {
  it('works for a + b', () => {
    var a = new Float64Array([1, 2, 3]),
        b = new Float64Array([6, 5, 4]),
        ans = new Float64Array([7, 7, 7]);

    nblas.axpy(a, b);
    assert.deepEqual(ans, b);
  });

  it('works for (-a) + b', () => {
    var a = new Float64Array([1, 2, 3]),
        b = new Float64Array([6, 5, 4]),
        ans = new Float64Array([5, 3, 1]);

    nblas.axpy(a, b, -1);
    assert.deepEqual(ans, b);
  });

  it('works for (2a) + b', () => {
    var a = new Float64Array([-1, 3, 8, 1]),
        b = new Float64Array([-10, 2, 4, -1]),
        ans = new Float64Array([-12, 8, 20, 1]);

    nblas.axpy(a, b, 2);
    assert.deepEqual(ans, b);
  });
});

describe('?copy', () => {
  it('works as expected for different sizes', () => {
    var a = new Float64Array([1, 2, 3]),
        b = new Float64Array(3);

    nblas.copy(a, b);
    assert.deepEqual(a, b);

    a = new Float64Array([5, 1, 3, 8]);
    b = new Float64Array(4);
    nblas.copy(a, b);
    assert.deepEqual(a, b);
  });
});

describe('?dot', () => {
  it('works as expected for different sizes', () => {
    var a = new Float64Array([1, 2, 3]),
        b = new Float64Array([4, 5, 6]);

    assert.equal(32, nblas.dot(a, b));

    a = new Float64Array([-1, 3, 7, 4]);
    b = new Float64Array([2, 1, 3, 0]);

    assert.equal(22, nblas.dot(a, b));
  });
});

describe('?nrm2', () => {
  it('works as expected for different sizes', () => {
    var a = new Float64Array([1, 2, 3]);

    assert.equal(Math.sqrt(14).toPrecision(6), nblas.nrm2(a).toPrecision(6));

    a = new Float64Array([3, 7, 1, 0]);

    assert.equal(Math.sqrt(59).toPrecision(6), nblas.nrm2(a).toPrecision(6));
  });
});

describe('?rot', () => {
  // should perform plane rotation of points
});

describe('?scal', () => {
  it('works as expected for different sizes and negative values', () => {
    var a = new Float64Array([1, 2, 3]),
        ans = new Float64Array([2, 4, 6]);

    nblas.scal(a, 2);
    assert.deepEqual(ans, a);

    a = new Float64Array([1, -2, 3, 0]);
    ans = new Float64Array([-2, 4, -6, 0]);

    nblas.scal(a, -2);
    assert.deepEqual(ans, a);
  });
});

describe('?swap', () => {
  it('works as expected for different sizes', () => {
    var a = new Float64Array([1, 2, 3]),
        acopy = new Float64Array(a),
        b = new Float64Array(3),
        bcopy = new Float64Array(b);

    nblas.swap(a, b);
    assert.deepEqual(bcopy, a);
    assert.deepEqual(acopy, b);

    a = new Float64Array([3, 4, 7, -1]);
    b = new Float64Array([1, 3, -1, 0]);
    acopy = new Float64Array(a);
    bcopy = new Float64Array(b);

    nblas.swap(a, b);
    assert.deepEqual(bcopy, a);
    assert.deepEqual(acopy, b);
  });
});

describe('i?amax', () => {
  it('works as expected for different values', () => {
    var a = new Float64Array([1, 2, 3]);

    assert.equal(3, a[nblas.iamax(a)]);

    a = new Float64Array([-1, -2, 0, 7]);
    assert.equal(7, a[nblas.iamax(a)]);
  });
});

describe('?gbmv', () => {
  // computes matrix-vector product using a general band matrix
});

describe('?gemv', () => {
  // computes a matrix-vector product using a general matrix
});

describe('?ger', () => {
  // performs a rank-1 update of a general matrix
});

describe('?sbmv', () => {
  // computes a matrix-vector product using a symmetric band matrix
});

describe('?spmv', () => {
  // computes a matrix-vector product using a symmetric packed matrix
});

describe('?spr', () => {
  // performs a rank-1 update of a symmetric packed matrix
});

describe('?spr2', () => {
  // performs a rank-2 update of a symmetric packed matrix
});

describe('?symv', () => {
  // computes a matrix-vector product for a symmetric matrix
});

describe('?syr', () => {
  // performs a rank-1 update of a symmetric matrix
});

describe('?syr2', () => {
  // performs a rank-2 update of a symmetric matrix
});

describe('?tbmv', () => {
  // computes a matrix-vector product using a triangular band matrix
});

describe('?tbsv', () => {
  // solves a system of linear equations whose coefficients are in a triangular band matrix
});

describe('?tpmv', () => {
  // computes a matrix-vector product using a triangular band matrix
});

describe('?tpsv', () => {
  // solves a system of linear equations whose coefficients are in a triangular packed matrix
});

describe('?trmv', () => {
  // computes a matrix-vector product using a triangular matrix
});

describe('?trsv', () => {
  // solves a system of linear equations whose coefficients are in a triangular matrix
});

describe('?gemm', () => {
  it('works for 3x1 * 1x3', () => {
    // computes a matrix-matrix product

    // a is 1x3 matrix
    var a = new Float64Array([
      1, 2, 3
    ]);

    // b is 3x1 matrix
    var b = new Float64Array([
      2,
      3,
      4
    ]);

    // c will hold 3x3 matrix
    var c = new Float64Array(9);

    var ans = new Float64Array([
      2, 3, 4,
      4, 6, 8,
      6, 9, 12
    ]);

    nblas.gemm(a, b, c, 3, 3, 1);
    assert.deepEqual(ans, c);
  });

  it('works for 2x2 * 2x2', () => {
    // a is 2x2 matrix
    var a = new Float64Array([
      1, 2,
      3, 4
    ]);

    // b is 2x2 matrix
    var b = new Float64Array([
      5, 6,
      7, 8
    ]);

    // c will hold 2x2 matrix
    var c = new Float64Array(4);

    var ans = new Float64Array([
      19, 22,
      43, 50
    ]);

    nblas.gemm(a, b, c, 2, 2, 2);
    assert.deepEqual(ans, c);
  });
});

describe('?symm', () => {
  // computes a matrix-matrix product where one input matrix is symmetric
});

describe('?syrk', () => {
  // performs a symmetric rank-k update
});

describe('?syr2k', () => {
  // performs a symmetric rank-2k update
});

describe('?trmm', () => {
  // computes a matrix-matrix product where one input matrix is triangular
});

describe('?trsm', () => {
  // solves a triangular matrix equation
});
