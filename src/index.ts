import './types';

const nblas: NBlasInterface = require('../build/Release/addon');

// from enums declared in functions/cblas.h
export const NoTrans: MatrixTrans = 111;
export const Trans: MatrixTrans = 112;
export const ConjTrans: MatrixTrans = 113;

export const Upper: MatrixUpperLower = 121;
export const Lower: MatrixUpperLower = 122;

export const NonUnit: MatrixUnit = 131;
export const Unit: MatrixUnit = 132;

export const Left: MatrixLeftRight = 141;
export const Right: MatrixLeftRight = 142;

const prefix = (x: FloatArray): 'd' | 's' => {
  if (x instanceof Float64Array) {
    return 'd';
  }

  if (x instanceof Float32Array) {
    return 's';
  }

  throw new Error('invalid type!');
}

// BLAS Level 1 Routines and Functions

/**
 * sum of the magnitudes of elements of a real vector
 * res = \sum_i=0^n{|x_i|}
 */
export const asum = (x: FloatArray): number =>
  nblas[`${prefix(x)}asum`](x.length, x, 1);

/**
 * vector-vector operation defined as
 * y := a * x + y
 */
export const axpy = (x: FloatArray, y: FloatArray, a = 1.0): void =>
  nblas[`${prefix(x)}axpy`](x.length, a, x, 1, y, 1);

/**
 * vector-vector operation defined as
 * y = x
 */
export const copy = (x: FloatArray, y: FloatArray): void =>
  nblas[`${prefix(x)}copy`](x.length, x, 1, y, 1);

/**
 * vector-vector reduction operation defined as
 * res = \sum_i=0^n{x_i * y_i}
 */
export const dot = (x: FloatArray, y: FloatArray): number =>
  nblas[`${prefix(x)}dot`](x.length, x, 1, y, 1);

/**
 * vector reduction operation defined as
 * res = ||x||
 */
export const nrm2 = (x: FloatArray): number =>
  nblas[`${prefix(x)}nrm2`](x.length, x, 1);

/**
 * rotation of points in the plane
 */
export const rot = (x: FloatArray, y: FloatArray, c: number, s: number): void =>
  nblas[`${prefix(x)}rot`](x.length, x, 1, y, 1, c, s);

/**
 * computes the parameters for a Givens rotation
 */
export const rotg = (a: FloatArray, b: FloatArray, c: FloatArray, s: FloatArray): void =>
  nblas[`${prefix(a)}rotg`](a, b, c, s);

/**
 * performs modified Givens rotation of points in the plane
 */
export const rotm = (x: FloatArray, y: FloatArray, param: FloatArray): void =>
  nblas[`${prefix(x)}rotm`](x.length, x, 1, y, 1, param);

/**
 * computes the parameters for a modified Givens rotation.
 */
export const rotmg = (d1: FloatArray, d2: FloatArray, x1: FloatArray, y1: FloatArray, param: FloatArray): void =>
  nblas[`${prefix(d1)}rotmg`](d1, d2, x1, y1, param);

/**
 * vector operation defined as
 * x = a * x
 */
export const scal = (x: FloatArray, a: number): void =>
  nblas[`${prefix(x)}scal`](x.length, a, x, 1);

/**
 * given two vectors x and y, the vectors y and x swapped, each replacing the other.
 */
export const swap = (x: FloatArray, y: FloatArray): void =>
  nblas[`${prefix(x)}swap`](x.length, x, 1, y, 1);

/**
 * finds the index of the element with maximum absolute value.
 */
export const iamax = (x: FloatArray): number =>
  nblas[`i${prefix(x)}amax`](x.length, x, 1);

/**
 * finds the index of the element with minimum absolute value.
 */
export const iamin = (x: FloatArray): number =>
  nblas[`i${prefix(x)}amin`](x.length, x, 1);

// BLAS Level 2 Routines

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general band matrix with kl sub-diagonals and ku super-diagonals
 */
export const gbmv = (a: FloatArray, x: FloatArray, y: FloatArray, kl: number = 0, ku: number = 0, alpha: number = 1.0, beta: number = 0.0, trans: MatrixTrans = NoTrans): void =>
  nblas[`${prefix(x)}gbmv`](trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general matrix
 */
export const gemv = (a: FloatArray, x: FloatArray, y: FloatArray, alpha: number = 1.0, beta: number = 0.0, trans: MatrixTrans = NoTrans): void =>
  nblas[`${prefix(x)}gemv`](trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + A
 * where A is a general matrix
 */
export const ger = (a: FloatArray, x: FloatArray, y: FloatArray, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}ger`](x.length, y.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric band matrix with k super-diagonals
 */
export const sbmv = (a: FloatArray, x: FloatArray, y: FloatArray, k: number = 0, uplo: MatrixUpperLower = Upper, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(x)}sbmv`](uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a symmetric matrix, supplied in packed form
 */
export const spmv = (ap: FloatArray, x: FloatArray, y: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(x)}spmv`](uplo, x.length, alpha, ap, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const spr = (ap: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}spr`](uplo, x.length, alpha, x, 1, ap);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const spr2 = (ap: FloatArray, x: FloatArray, y: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}spr2`](uplo, x.length, alpha, x, 1, y, 1, ap);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric matrix
 */
export const symv = (a: FloatArray, x: FloatArray, y: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(x)}symv`](uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix
 */
export const syr = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}syr`](uplo, x.length, alpha, x, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix
 */
export const syr2 = (a: FloatArray, x: FloatArray, y: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}syr2`](uplo, x.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const tbmv = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}tbmv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const tbsv = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}tbsv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const tpmv = (ap: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}tpmv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const tpsv = (ap: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}tpsv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const trmv = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}trmv`](uplo, trans, diag, x.length, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const trsv = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}trsv`](uplo, trans, diag, x.length, a, x.length, x, 1);

// BLAS Level 3 Routines

/**
 * computes a scalar-matrix-matrix product and adds the result to a scalar-matrix product defined as
 * C := alpha * op(A) * op(B) + beta * C
 */
export const gemm = (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number, k: number, transa: MatrixTrans = NoTrans, transb: MatrixTrans = NoTrans, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(a)}gemm`](transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one symmetric matrix and adds the result to a scalar-matrix product defined as
 * C := alpha * A * B + beta * C
 * or
 * C := alpha * B * A + beta * C
 * where A is a symmetric matrix
 */
export const symm = (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number, side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(a)}symm`](side, uplo, m, n, alpha, a, m, b, n, beta, c, m);

/**
 * performs a rank-k matrix-matrix operation for a symmetric matrix C using a general matrix A defined as
 * C := alpha * A * A' + beta * C
 * or
 * C := alpha * A' * A + beta * C
 * where C is a symmetric matrix
 */
export const syrk = (a: FloatArray, c: FloatArray, n: FloatArray, k: number, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(a)}syrk`](uplo, trans, n, k, alpha, a, n, beta, c, n);

/**
 * perform a rank-2k matrix-matrix operation for a symmetric matrix C using general matrices A and B defined as
 * C := alpha * A * B' + alpha * B * A' + beta * C
 * or
 * C := alpha * A' * B + alpha * B' * A + beta * C
 * where C is a symmetric matrix
 */
export const syr2k = (a: FloatArray, b: FloatArray, c: FloatArray, n: number, k: number, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(a)}syr2k`](uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one triangular matrix defined as
 * B := alpha * op(A) * B
 * or
 * B := alpha * B * op(A)
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const trmm = (a: FloatArray, b: FloatArray, m: number, n: number, side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1.0): void =>
  nblas[`${prefix(a)}trmm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);

/**
 * solves one of the following matrix equations
 * op(A) * X = alpha * B
 * or
 * X * op(A) = alpha * B
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const trsm = (a: FloatArray, b: FloatArray, m: number, n: number, side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1.0): void =>
  nblas[`${prefix(a)}trsm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);

export { nblas };
