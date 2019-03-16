import {
  FloatArray,
  INBlas,
  MatrixLeftRight,
  MatrixTrans,
  MatrixUnit,
  MatrixUpperLower,
} from './types';
import { prefix } from './util';

let nblas: INBlas;
try {
  nblas = require('../build/Release/addon');
} catch (_) {
  nblas = require('./nblas');
}

// From enums declared in functions/cblas.h
export const NoTrans: MatrixTrans = 111;
export const Trans: MatrixTrans = 112;
export const ConjTrans: MatrixTrans = 113;

export const Upper: MatrixUpperLower = 121;
export const Lower: MatrixUpperLower = 122;

export const NonUnit: MatrixUnit = 131;
export const Unit: MatrixUnit = 132;

export const Left: MatrixLeftRight = 141;
export const Right: MatrixLeftRight = 142;

// BLAS Level 1 Routines and Functions

/**
 * sum of the magnitudes of elements of a real vector
 * res = \sum_i=0^n{|x_i|}
 */
export const dasum: typeof nblas.dasum = nblas.dasum;
export const sasum: typeof nblas.sasum = nblas.sasum;
export const dzasum: typeof nblas.dzasum = nblas.dzasum;
export const scasum: typeof nblas.scasum = nblas.scasum;
export const asum: typeof nblas.asum =
  (x: FloatArray): number =>
    nblas[`${prefix(x)}asum`](x.length, x, 1);

/**
 * vector-vector operation defined as
 * y := a * x + y
 */
export const daxpy: typeof nblas.daxpy = nblas.daxpy;
export const saxpy: typeof nblas.saxpy = nblas.saxpy;
export const zaxpy: typeof nblas.zaxpy = nblas.zaxpy;
export const caxpy: typeof nblas.caxpy = nblas.caxpy;
export const axpy: typeof nblas.axpy =
  (x: FloatArray, y: FloatArray, a: number = 1): void =>
    nblas[`${prefix(x)}axpy`](x.length, a, x, 1, y, 1);

/**
 * vector-vector operation defined as
 * y = x
 */
export const dcopy: typeof nblas.dcopy = nblas.dcopy;
export const scopy: typeof nblas.scopy = nblas.scopy;
export const zcopy: typeof nblas.zcopy = nblas.zcopy;
export const ccopy: typeof nblas.ccopy = nblas.ccopy;
export const copy: typeof nblas.copy =
  (x: FloatArray, y: FloatArray): void =>
    nblas[`${prefix(x)}copy`](x.length, x, 1, y, 1);

/**
 * vector-vector reduction operation defined as
 * res = \sum_i=0^n{x_i * y_i}
 */
export const ddot: typeof nblas.ddot = nblas.ddot;
export const sdot: typeof nblas.sdot = nblas.sdot;
export const dot: typeof nblas.dot =
  (x: FloatArray, y: FloatArray): number =>
    nblas[`${prefix(x)}dot`](x.length, x, 1, y, 1);

/**
 * vector reduction operation defined as
 * res = ||x||
 */
export const dnrm2: typeof nblas.dnrm2 = nblas.dnrm2;
export const snrm2: typeof nblas.snrm2 = nblas.snrm2;
export const dznrm2: typeof nblas.dznrm2 = nblas.dznrm2;
export const scnrm2: typeof nblas.scnrm2 = nblas.scnrm2;
export const nrm2: typeof nblas.nrm2 =
  (x: FloatArray): number =>
    nblas[`${prefix(x)}nrm2`](x.length, x, 1);

/**
 * rotation of points in the plane
 */
export const drot: typeof nblas.drot = nblas.drot;
export const srot: typeof nblas.srot = nblas.srot;
export const rot: typeof nblas.rot =
  (x: FloatArray, y: FloatArray, c: number, s: number): void =>
    nblas[`${prefix(x)}rot`](x.length, x, 1, y, 1, c, s);

/**
 * computes the parameters for a Givens rotation
 */
export const drotg: typeof nblas.drotg = nblas.drotg;
export const srotg: typeof nblas.srotg = nblas.srotg;
export const rotg: typeof nblas.rotg =
  (a: FloatArray, b: FloatArray, c: FloatArray, s: FloatArray): void =>
    nblas[`${prefix(a)}rotg`](a, b, c, s);

/**
 * performs modified Givens rotation of points in the plane
 */
export const drotm: typeof nblas.drotm = nblas.drotm;
export const srotm: typeof nblas.srotm = nblas.srotm;
export const rotm: typeof nblas.rotm =
  (x: FloatArray, y: FloatArray, param: FloatArray): void =>
    nblas[`${prefix(x)}rotm`](x.length, x, 1, y, 1, param);

/**
 * computes the parameters for a modified Givens rotation.
 */
export const drotmg: typeof nblas.drotmg = nblas.drotmg;
export const srotmg: typeof nblas.srotmg = nblas.srotmg;
export const rotmg: typeof nblas.rotmg =
  (d1: FloatArray, d2: FloatArray, x1: FloatArray, y1: FloatArray, param: FloatArray): void =>
    nblas[`${prefix(d1)}rotmg`](d1, d2, x1, y1, param);

/**
 * vector operation defined as
 * x = a * x
 */
export const dscal: typeof nblas.dscal = nblas.dscal;
export const sscal: typeof nblas.sscal = nblas.sscal;
export const zscal: typeof nblas.zscal = nblas.zscal;
export const cscal: typeof nblas.cscal = nblas.cscal;
export const scal: typeof nblas.scal =
  (x: FloatArray, a: number): void =>
    nblas[`${prefix(x)}scal`](x.length, a, x, 1);

/**
 * given two vectors x and y, the vectors y and x swapped, each replacing the other.
 */
export const dswap: typeof nblas.dswap = nblas.dswap;
export const sswap: typeof nblas.sswap = nblas.sswap;
export const zswap: typeof nblas.zswap = nblas.zswap;
export const cswap: typeof nblas.cswap = nblas.cswap;
export const swap: typeof nblas.swap =
  (x: FloatArray, y: FloatArray): void =>
    nblas[`${prefix(x)}swap`](x.length, x, 1, y, 1);

/**
 * finds the index of the element with maximum absolute value.
 */
export const idamax: typeof nblas.idamax = nblas.idamax;
export const isamax: typeof nblas.isamax = nblas.isamax;
export const izamax: typeof nblas.izamax = nblas.izamax;
export const icamax: typeof nblas.icamax = nblas.icamax;
export const iamax: typeof nblas.iamax =
  (x: FloatArray): number =>
    nblas[`i${prefix(x)}amax`](x.length, x, 1);

// BLAS Level 2 Routines

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general band matrix with kl sub-diagonals and ku super-diagonals
 */
export const dgbmv: typeof nblas.dgbmv = nblas.dgbmv;
export const sgbmv: typeof nblas.sgbmv = nblas.sgbmv;
export const zgbmv: typeof nblas.zgbmv = nblas.zgbmv;
export const cgbmv: typeof nblas.cgbmv = nblas.cgbmv;
export const gbmv: typeof nblas.gbmv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   kl: number = 0, ku: number = 0, alpha: number = 1, beta: number = 0, trans: MatrixTrans = NoTrans): void =>
    nblas[`${prefix(x)}gbmv`](trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a general matrix
 */
export const dgemv: typeof nblas.dgemv = nblas.dgemv;
export const sgemv: typeof nblas.sgemv = nblas.sgemv;
export const zgemv: typeof nblas.zgemv = nblas.zgemv;
export const cgemv: typeof nblas.cgemv = nblas.cgemv;
export const gemv: typeof nblas.gemv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   alpha: number = 1, beta: number = 0, trans: MatrixTrans = NoTrans): void =>
    nblas[`${prefix(x)}gemv`](trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + A
 * where A is a general matrix
 */
export const dger: typeof nblas.dger = nblas.dger;
export const sger: typeof nblas.sger = nblas.sger;
export const ger: typeof nblas.ger =
  (a: FloatArray, x: FloatArray, y: FloatArray, alpha: number = 1): void =>
    nblas[`${prefix(x)}ger`](x.length, y.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric band matrix with k super-diagonals
 */
export const dsbmv: typeof nblas.dsbmv = nblas.dsbmv;
export const ssbmv: typeof nblas.ssbmv = nblas.ssbmv;
export const sbmv: typeof nblas.sbmv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   k: number = 0, uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nblas[`${prefix(x)}sbmv`](uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * or
 * y := alpha * A' * x + beta * y
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspmv: typeof nblas.dspmv = nblas.dspmv;
export const sspmv: typeof nblas.sspmv = nblas.sspmv;
export const spmv: typeof nblas.spmv =
  (ap: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nblas[`${prefix(x)}spmv`](uplo, x.length, alpha, ap, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspr: typeof nblas.dspr = nblas.dspr;
export const sspr: typeof nblas.sspr = nblas.sspr;
export const spr: typeof nblas.spr =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nblas[`${prefix(x)}spr`](uplo, x.length, alpha, x, 1, ap);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix, supplied in packed form
 */
export const dspr2: typeof nblas.dspr2 = nblas.dspr2;
export const sspr2: typeof nblas.sspr2 = nblas.sspr2;
export const spr2: typeof nblas.spr2 =
  (ap: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nblas[`${prefix(x)}spr2`](uplo, x.length, alpha, x, 1, y, 1, ap);

/**
 * matrix-vector operation defined as
 * y := alpha * A * x + beta * y
 * where A is a symmetric matrix
 */
export const dsymv: typeof nblas.dsymv = nblas.dsymv;
export const ssymv: typeof nblas.ssymv = nblas.ssymv;
export const symv: typeof nblas.symv =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nblas[`${prefix(x)}symv`](uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);

/**
 * matrix-vector operation defined as
 * A := alpha * x * x' + A
 * where A is a symmetric matrix
 */
export const dsyr: typeof nblas.dsyr = nblas.dsyr;
export const ssyr: typeof nblas.ssyr = nblas.ssyr;
export const syr: typeof nblas.syr =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nblas[`${prefix(x)}syr`](uplo, x.length, alpha, x, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * A := alpha * x * y' + alpha * y * x' + A
 * where A is a symmetric matrix
 */
export const dsyr2: typeof nblas.dsyr2 = nblas.dsyr2;
export const ssyr2: typeof nblas.ssyr2 = nblas.ssyr2;
export const syr2: typeof nblas.syr2 =
  (a: FloatArray, x: FloatArray, y: FloatArray,
   uplo: MatrixUpperLower = Upper, alpha: number = 1): void =>
    nblas[`${prefix(x)}syr2`](uplo, x.length, alpha, x, 1, y, 1, a, x.length);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const dtbmv: typeof nblas.dtbmv = nblas.dtbmv;
export const stbmv: typeof nblas.stbmv = nblas.stbmv;
export const ztbmv: typeof nblas.ztbmv = nblas.ztbmv;
export const ctbmv: typeof nblas.ctbmv = nblas.ctbmv;
export const tbmv: typeof nblas.tbmv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nblas[`${prefix(x)}tbmv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular band matrix, with k + 1 diagonals
 */
export const dtbsv: typeof nblas.dtbsv = nblas.dtbsv;
export const stbsv: typeof nblas.stbsv = nblas.stbsv;
export const ztbsv: typeof nblas.ztbsv = nblas.ztbsv;
export const ctbsv: typeof nblas.ctbsv = nblas.ctbsv;
export const tbsv: typeof nblas.tbsv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nblas[`${prefix(x)}tbsv`](uplo, trans, diag, x.length, 0, a, x.length, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const dtpmv: typeof nblas.dtpmv = nblas.dtpmv;
export const stpmv: typeof nblas.stpmv = nblas.stpmv;
export const ztpmv: typeof nblas.ztpmv = nblas.ztpmv;
export const ctpmv: typeof nblas.ctpmv = nblas.ctpmv;
export const tpmv: typeof nblas.tpmv =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nblas[`${prefix(x)}tpmv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix, supplied in packed form
 */
export const dtpsv: typeof nblas.dtpsv = nblas.dtpsv;
export const stpsv: typeof nblas.stpsv = nblas.stpsv;
export const ztpsv: typeof nblas.ztpsv = nblas.ztpsv;
export const ctpsv: typeof nblas.ctpsv = nblas.ctpsv;
export const tpsv: typeof nblas.tpsv =
  (ap: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nblas[`${prefix(x)}tpsv`](uplo, trans, diag, x.length, ap, x, 1);

/**
 * matrix-vector operation defined as
 * x := A * x
 * or
 * x := A' * x
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrmv: typeof nblas.dtrmv = nblas.dtrmv;
export const strmv: typeof nblas.strmv = nblas.strmv;
export const ztrmv: typeof nblas.ztrmv = nblas.ztrmv;
export const ctrmv: typeof nblas.ctrmv = nblas.ctrmv;
export const trmv: typeof nblas.trmv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nblas[`${prefix(x)}trmv`](uplo, trans, diag, x.length, a, x.length, x, 1);

/**
 * solves one of the following systems of equations
 * A * x = b
 * or
 * A' * x = b
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrsv: typeof nblas.dtrsv = nblas.dtrsv;
export const strsv: typeof nblas.strsv = nblas.strsv;
export const ztrsv: typeof nblas.ztrsv = nblas.ztrsv;
export const ctrsv: typeof nblas.ctrsv = nblas.ctrsv;
export const trsv: typeof nblas.trsv =
  (a: FloatArray, x: FloatArray,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit): void =>
    nblas[`${prefix(x)}trsv`](uplo, trans, diag, x.length, a, x.length, x, 1);

// BLAS Level 3 Routines

/**
 * computes a scalar-matrix-matrix product and adds the result to a scalar-matrix product defined as
 * C := alpha * op(A) * op(B) + beta * C
 */
export const dgemm: typeof nblas.dgemm = nblas.dgemm;
export const sgemm: typeof nblas.sgemm = nblas.sgemm;
export const zgemm: typeof nblas.zgemm = nblas.zgemm;
export const cgemm: typeof nblas.cgemm = nblas.cgemm;
export const gemm: typeof nblas.gemm =
  (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number, k: number,
   transa: MatrixTrans = NoTrans, transb: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nblas[`${prefix(a)}gemm`](transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one symmetric matrix and
 * adds the result to a scalar-matrix product defined as
 * C := alpha * A * B + beta * C
 * or
 * C := alpha * B * A + beta * C
 * where A is a symmetric matrix
 */
export const dsymm: typeof nblas.dsymm = nblas.dsymm;
export const ssymm: typeof nblas.ssymm = nblas.ssymm;
export const zsymm: typeof nblas.zsymm = nblas.zsymm;
export const csymm: typeof nblas.csymm = nblas.csymm;
export const symm: typeof nblas.symm =
  (a: FloatArray, b: FloatArray, c: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper, alpha: number = 1, beta: number = 0): void =>
    nblas[`${prefix(a)}symm`](side, uplo, m, n, alpha, a, m, b, n, beta, c, m);

/**
 * performs a rank-k matrix-matrix operation for a symmetric matrix C using a general matrix A defined as
 * C := alpha * A * A' + beta * C
 * or
 * C := alpha * A' * A + beta * C
 * where C is a symmetric matrix
 */
export const dsyrk: typeof nblas.dsyrk = nblas.dsyrk;
export const ssyrk: typeof nblas.ssyrk = nblas.ssyrk;
export const zsyrk: typeof nblas.zsyrk = nblas.zsyrk;
export const csyrk: typeof nblas.csyrk = nblas.csyrk;
export const syrk: typeof nblas.syrk =
  (a: FloatArray, c: FloatArray, n: FloatArray, k: number,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nblas[`${prefix(a)}syrk`](uplo, trans, n, k, alpha, a, n, beta, c, n);

/**
 * perform a rank-2k matrix-matrix operation for a symmetric matrix C using general matrices A and B defined as
 * C := alpha * A * B' + alpha * B * A' + beta * C
 * or
 * C := alpha * A' * B + alpha * B' * A + beta * C
 * where C is a symmetric matrix
 */
export const dsyr2k: typeof nblas.dsyr2k = nblas.dsyr2k;
export const ssyr2k: typeof nblas.ssyr2k = nblas.ssyr2k;
export const zsyr2k: typeof nblas.zsyr2k = nblas.zsyr2k;
export const csyr2k: typeof nblas.csyr2k = nblas.csyr2k;
export const syr2k: typeof nblas.syr2k =
  (a: FloatArray, b: FloatArray, c: FloatArray, n: number, k: number,
   uplo: MatrixUpperLower = Upper, trans: MatrixTrans = NoTrans, alpha: number = 1, beta: number = 0): void =>
    nblas[`${prefix(a)}syr2k`](uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);

/**
 * computes a scalar-matrix-matrix product with one triangular matrix defined as
 * B := alpha * op(A) * B
 * or
 * B := alpha * B * op(A)
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrmm: typeof nblas.dtrmm = nblas.dtrmm;
export const strmm: typeof nblas.strmm = nblas.strmm;
export const ztrmm: typeof nblas.ztrmm = nblas.ztrmm;
export const ctrmm: typeof nblas.ctrmm = nblas.ctrmm;
export const trmm: typeof nblas.trmm =
  (a: FloatArray, b: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper,
   transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1): void =>
    nblas[`${prefix(a)}trmm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);

/**
 * solves one of the following matrix equations
 * op(A) * X = alpha * B
 * or
 * X * op(A) = alpha * B
 * where A is a unit or non-unit upper or lower triangular matrix
 */
export const dtrsm: typeof nblas.dtrsm = nblas.dtrsm;
export const strsm: typeof nblas.strsm = nblas.strsm;
export const ztrsm: typeof nblas.ztrsm = nblas.ztrsm;
export const ctrsm: typeof nblas.ctrsm = nblas.ctrsm;
export const trsm: typeof nblas.trsm =
  (a: FloatArray, b: FloatArray, m: number, n: number,
   side: MatrixLeftRight = Left, uplo: MatrixUpperLower = Upper,
   transa: MatrixTrans = NoTrans, diag: MatrixUnit = NonUnit, alpha: number = 1): void =>
    nblas[`${prefix(a)}trsm`](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
