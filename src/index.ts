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

type FloatArray = Float64Array | Float32Array;

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
export const dasum = nblas.dasum;
export const sasum = nblas.sasum;
export const dzasum = nblas.dzasum;
export const scasum = nblas.scasum;
export const asum = (x: FloatArray): number =>
  nblas[`${prefix(x)}asum`](x.length, x, 1);

/**
 * vector-vector operation defined as
 * y := a * x + y
 */
export const daxpy = nblas.daxpy;
export const saxpy = nblas.saxpy;
export const zaxpy = nblas.zaxpy;
export const caxpy = nblas.caxpy;
export const axpy = (x: FloatArray, y: FloatArray, a: number = 1.0): void =>
  nblas[`${prefix(x)}axpy`](x.length, a, x, 1, y, 1);

/**
 * vector-vector operation defined as
 * y = x
 */
export const dcopy = nblas.dcopy;
export const scopy = nblas.scopy;
export const zcopy = nblas.zcopy;
export const ccopy = nblas.ccopy;
export const copy = (x: FloatArray, y: FloatArray): void =>
  nblas[`${prefix(x)}copy`](x.length, x, 1, y, 1);

/**
 * vector-vector reduction operation defined as
 * res = \sum_i=0^n{x_i * y_i}
 */
export const ddot = nblas.ddot;
export const sdot = nblas.sdot;
export const dot = (x: FloatArray, y: FloatArray): number =>
  nblas[`${prefix(x)}dot`](x.length, x, 1, y, 1);

/**
 * vector reduction operation defined as
 * res = ||x||
 */
export const dnrm2 = nblas.dnrm2;
export const snrm2 = nblas.snrm2;
export const dznrm2 = nblas.dznrm2;
export const scnrm2 = nblas.scnrm2;
export const nrm2 = (x: FloatArray): number =>
  nblas[`${prefix(x)}nrm2`](x.length, x, 1);

/**
 * rotation of points in the plane
 */
export const drot = nblas.drot;
export const srot = nblas.srot;
export const rot = (x: FloatArray, y: FloatArray, c: number, s: number): void =>
  nblas[`${prefix(x)}rot`](x.length, x, 1, y, 1, c, s);

/**
 * computes the parameters for a Givens rotation
 */
export const drotg = nblas.drotg;
export const srotg = nblas.srotg;
export const rotg = (a: FloatArray, b: FloatArray, c: FloatArray, s: FloatArray): void =>
  nblas[`${prefix(a)}rotg`](a, b, c, s);

/**
 * performs modified Givens rotation of points in the plane
 */
export const drotm = nblas.drotm;
export const srotm = nblas.srotm;
export const rotm = (x: FloatArray, y: FloatArray, param: FloatArray): void =>
  nblas[`${prefix(x)}rotm`](x.length, x, 1, y, 1, param);

/**
 * computes the parameters for a modified Givens rotation.
 */
export const drotmg = nblas.drotmg;
export const srotmg = nblas.srotmg;
export const rotmg = (d1: FloatArray, d2: FloatArray, x1: FloatArray, y1: FloatArray, param: FloatArray): void =>
  nblas[`${prefix(d1)}rotmg`](d1, d2, x1, y1, param);

/**
 * vector operation defined as
 * x = a * x
 */
export const dscal = nblas.dscal;
export const sscal = nblas.sscal;
export const zscal = nblas.zscal;
export const cscal = nblas.cscal;
export const scal = (x: FloatArray, a: number): void =>
  nblas[`${prefix(x)}scal`](x.length, a, x, 1);

/**
 * given two vectors x and y, the vectors y and x swapped, each replacing the other.
 */
export const dswap = nblas.dswap;
export const sswap = nblas.sswap;
export const zswap = nblas.zswap;
export const cswap = nblas.cswap;
export const swap = (x: FloatArray, y: FloatArray): void =>
  nblas[`${prefix(x)}swap`](x.length, x, 1, y, 1);

/**
 * finds the index of the element with maximum absolute value.
 */
export const idamax = nblas.idamax;
export const isamax = nblas.isamax;
export const izamax = nblas.izamax;
export const icamax = nblas.icamax;
export const iamax = (x: FloatArray): number =>
  nblas[`i${prefix(x)}amax`](x.length, x, 1);

// BLAS Level 2 Routines

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general band matrix with kl sub-diagonals and ku super-diagonals
 */
export const dgbmv = nblas.dgbmv;
export const sgbmv = nblas.sgbmv;
export const zgbmv = nblas.zgbmv;
export const cgbmv = nblas.cgbmv;
export const gbmv = (a: FloatArray, x: FloatArray, y: FloatArray, kl: number = 0, ku: number = 0, alpha: number = 1.0, beta: number = 0.0, trans: MatrixTrans = NoTrans): void =>
  nblas[`${prefix(x)}gbmv`](trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general matrix
 */
export const dgemv = nblas.dgemv;
export const sgemv = nblas.sgemv;
export const zgemv = nblas.zgemv;
export const cgemv = nblas.cgemv;
export const gemv = (a: FloatArray, x: FloatArray, y: FloatArray, alpha: number = 1.0, beta: number = 0.0, trans: MatrixTrans = NoTrans): void =>
  nblas[`${prefix(x)}gemv`](trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + A
 * where A is a general matrix
 */
export const dger = nblas.dger;
export const sger = nblas.sger;
export const ger = (a: FloatArray, x: FloatArray, y: FloatArray, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}ger`](x.length, y.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric band matrix with k super-diagonals
 */
export const dsbmv = nblas.dsbmv;
export const ssbmv = nblas.ssbmv;
export const sbmv = (a: FloatArray, x: FloatArray, y: FloatArray, k: number = 0, uplo: MatrixUpperLower = Upper, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(x)}sbmv`](uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspmv = nblas.dspmv;
export const sspmv = nblas.sspmv;
export const spmv = (ap: FloatArray, x: FloatArray, y: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(x)}spmv`](uplo, x.length, alpha, ap, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspr = nblas.dspr;
export const sspr = nblas.sspr;
export const spr = (ap: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}spr`](uplo, x.length, alpha, x, 1, ap);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspr2 = nblas.dspr2;
export const sspr2 = nblas.sspr2;
export const spr2 = (ap: FloatArray, x: FloatArray, y: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}spr2`](uplo, x.length, alpha, x, 1, y, 1, ap);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric matrix
 */
export const dsymv = nblas.dsymv;
export const ssymv = nblas.ssymv;
export const symv = (a: FloatArray, x: FloatArray, y: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(x)}symv`](uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix
 */
export const dsyr = nblas.dsyr;
export const ssyr = nblas.ssyr;
export const syr = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}syr`](uplo, x.length, alpha, x, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix
 */
export const dsyr2 = nblas.dsyr2;
export const ssyr2 = nblas.ssyr2;
export const syr2 = (a: FloatArray, x: FloatArray, y: FloatArray, uplo: MatrixUpperLower = Upper, alpha: number = 1.0): void =>
  nblas[`${prefix(x)}syr2`](uplo, x.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const dtbmv = nblas.dtbmv;
export const stbmv = nblas.stbmv;
export const ztbmv = nblas.ztbmv;
export const ctbmv = nblas.ctbmv;
export const tbmv = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}tbmv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const dtbsv = nblas.dtbsv;
export const stbsv = nblas.stbsv;
export const ztbsv = nblas.ztbsv;
export const ctbsv = nblas.ctbsv;
export const tbsv = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}tbsv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const dtpmv = nblas.dtpmv;
export const stpmv = nblas.stpmv;
export const ztpmv = nblas.ztpmv;
export const ctpmv = nblas.ctpmv;
export const tpmv = (ap: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}tpmv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const dtpsv = nblas.dtpsv;
export const stpsv = nblas.stpsv;
export const ztpsv = nblas.ztpsv;
export const ctpsv = nblas.ctpsv;
export const tpsv = (ap: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}tpsv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrmv = nblas.dtrmv;
export const strmv = nblas.strmv;
export const ztrmv = nblas.ztrmv;
export const ctrmv = nblas.ctrmv;
export const trmv = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}trmv`](uplo, trans, diag, x.length, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrsv = nblas.dtrsv;
export const strsv = nblas.strsv;
export const ztrsv = nblas.ztrsv;
export const ctrsv = nblas.ctrsv;
export const trsv = (a: FloatArray, x: FloatArray, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
  nblas[`${prefix(x)}trsv`](uplo, trans, diag, x.length, a, x.length, x, 1);

// BLAS Level 3 Routines

/**
 * computes a scalar-matrix-matrix product and adds the result to a scalar-matrix product defined as
 * C := alpha * op(A) * op(B) + beta * C
 */
export const dgemm = nblas.dgemm;
export const sgemm = nblas.sgemm;
export const zgemm = nblas.zgemm;
export const cgemm = nblas.cgemm;
export const gemm = (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number, k: number, transa: MatrixTrans = NoTrans, transb: MatrixTrans = NoTrans, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(a)}gemm`](transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one symmetric matrix and adds the result to a scalar-matrix product defined as
 * C := alpha * A * B + beta * C
 * or
 * C := alpha * B * A + beta * C
 * where A is a symmetric matrix
 */
export const dsymm = nblas.dsymm;
export const ssymm = nblas.ssymm;
export const zsymm = nblas.zsymm;
export const csymm = nblas.csymm;
export const symm = (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number, side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(a)}symm`](side, uplo, m, n, alpha, a, m, b, n, beta, c, m);

/**
 * performs a rank-k matrix-matrix operation for a symmetric matrix C using a general matrix A defined as
 * C := alpha * A * A' + beta * C
 * or
 * C := alpha * A' * A + beta * C
 * where C is a symmetric matrix
 */
export const dsyrk = nblas.dsyrk;
export const ssyrk = nblas.ssyrk;
export const zsyrk = nblas.zsyrk;
export const csyrk = nblas.csyrk;
export const syrk = (a: FloatArray, c: FloatArray, n: FloatArray, k: number, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(a)}syrk`](uplo, trans, n, k, alpha, a, n, beta, c, n);

/**
 * perform a rank-2k matrix-matrix operation for a symmetric matrix C using general matrices A and B defined as
 * C := alpha * A * B' + alpha * B * A' + beta * C
 * or
 * C := alpha * A' * B + alpha * B' * A + beta * C
 * where C is a symmetric matrix
 */
export const dsyr2k = nblas.dsyr2k;
export const ssyr2k = nblas.ssyr2k;
export const zsyr2k = nblas.zsyr2k;
export const csyr2k = nblas.csyr2k;
export const syr2k = (a: FloatArray, b: FloatArray, c: FloatArray, n: number, k: number, uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1.0, beta: number = 0.0): void =>
  nblas[`${prefix(a)}syr2k`](uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one triangular matrix defined as
 * B := alpha * op(A) * B
 * or
 * B := alpha * B * op(A)
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrmm = nblas.dtrmm;
export const strmm = nblas.strmm;
export const ztrmm = nblas.ztrmm;
export const ctrmm = nblas.ctrmm;
export const trmm = (a: FloatArray, b: FloatArray, m: number, n: number, side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1.0): void =>
  nblas[`${prefix(a)}trmm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);

/**
 * solves one of the following matrix equations
 * op(A) * X = alpha * B
 * or
 * X * op(A) = alpha * B
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrsm = nblas.dtrsm;
export const strsm = nblas.strsm;
export const ztrsm = nblas.ztrsm;
export const ctrsm = nblas.ctrsm;
export const trsm = (a: FloatArray, b: FloatArray, m: number, n: number, side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1.0): void =>
  nblas[`${prefix(a)}trsm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
