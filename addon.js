(function() {
  'use strict';

  var addon = require('./build/Release/addon');

  // BLAS Level 1 Routines and Functions
  addon.asum =
    (x) =>
      x.constructor === Float64Array ?
        addon.dasum(x.length, x, 1) :
        addon.sasum(x.length, x, 1);

  addon.axpy =
    (x, y, alpha) =>
      x.constructor === Float64Array ?
        addon.daxpy(x.length, alpha || 1.0, x, 1, y, 1) :
        addon.saxpy(x.length, alpha || 1.0, x, 1, y, 1);

  addon.copy =
    (x, y) =>
      x.constructor === Float64Array ?
        addon.dcopy(x.length, x, 1, y, 1) :
        addon.scopy(x.length, x, 1, y, 1);

  addon.dot =
    (x, y) =>
      x.constructor === Float64Array ?
        addon.ddot(x.length, x, 1, y, 1) :
        addon.sdot(x.length, x, 1, y, 1);

  /*
  addon._sdot =
    (sx, sy, sb) =>
      x.constructor === Float64Array ?
        addon.dsdot(x.length, sx, 1, sy, 1) :
        addon.sdsdot(x.length, sb || 1.0, sx, 1, sy, 1);
  */

  addon.nrm2 =
    (x) =>
      x.constructor === Float64Array ?
        addon.dnrm2(x.length, x, 1) :
        addon.snrm2(x.length, x, 1);

  addon.rot =
    (x, y, c, s) =>
      x.constructor === Float64Array ?
        addon.drot(x.length, x, 1, y, 1, c, s) :
        addon.srot(x.length, x, 1, y, 1, c, s);

  addon.rotg =
    (x, y, c, s) =>
      x.constructor === Float64Array ?
        addon.drotg(x, y, c, s) :
        addon.srotg(x, y, c, s);

  addon.rotm =
    (x, y, param) =>
      x.constructor === Float64Array ?
        addon.drotg(x.length, x, 1, y, 1, param) :
        addon.srotg(x.length, x, 1, y, 1, param);

  addon.rotmg =
    (d1, d2, x1, y1, param) =>
      x.constructor === Float64Array ?
        addon.drotg(d1, d2, x1, y1, param) :
        addon.srotg(d1, d2, x1, y1, param);

  addon.scal =
    (x, alpha) =>
      x.constructor === Float64Array ?
        addon.dscal(x.length, alpha, x, 1) :
        addon.sscal(x.length, alpha, x, 1);

  addon.swap =
    (x, y) =>
      x.constructor === Float64Array ?
        addon.dswap(x.length, x, 1, y, 1) :
        addon.sswap(x.length, x, 1, y, 1);

  addon.iamax =
    (x) =>
      x.constructor === Float64Array ?
        addon.idamax(x.length, x, 1) :
        addon.isamax(x.length, x, 1);

  addon.iamin =
    (x) =>
      x.constructor === Float64Array ?
        addon.idamin(x.length, x, 1) :
        addon.isamin(x.length, x, 1);

  // BLAS Level 2 Routines
  addon.gbmv =
    (a, x, y, kl, ku, alpha, beta, trans) =>
      a.constructor === Float64Array ?
        addon.dgbmv(trans || 111, x.length, y.length, kl || 0, ku || 0, alpha || 1.0, a, x.length, x, 1, beta || 1.0, y, 1) :
        addon.sgbmv(trans || 111, x.length, y.length, kl || 0, ku || 0, alpha || 1.0, a, x.length, x, 1, beta || 1.0, y, 1);

  addon.gemv =
    (a, x, y, alpha, beta, trans) =>
      a.constructor === Float64Array ?
        addon.dgemv(trans || 111, x.length, y.length, alpha || 1.0, a, x.length, x, 1, beta || 1.0, y, 1) :
        addon.sgemv(trans || 111, x.length, y.length, alpha || 1.0, a, x.length, x, 1, beta || 1.0, y, 1);

  addon.ger =
    (a, x, y, alpha) =>
      a.constructor === Float64Array ?
        addon.dger(x.length, y.length, alpha || 1.0, x, 1, y, 1, a, x.length) :
        addon.sger(x.length, y.length, alpha || 1.0, x, 1, y, 1, a, x.length);

  addon.sbmv =
    (a, x, y, k, uplo, alpha, beta) =>
      a.constructor === Float64Array ?
        addon.dsbmv(uplo || 121, x.length, k || 0, alpha || 1.0, a, x.length, x, 1, beta || 0.0, y, 1) :
        addon.ssbmv(uplo || 121, x.length, k || 0, alpha || 1.0, a, x.length, x, 1, beta || 0.0, y, 1);

  addon.spmv =
    (ap, x, y, uplo, alpha, beta) =>
      ap.constructor === Float64Array ?
        addon.dspmv(uplo || 121, x.length, alpha || 1.0, ap, x, 1, beta || 0.0, y, 1) :
        addon.sspmv(uplo || 121, x.length, alpha || 1.0, ap, x, 1, beta || 0.0, y, 1);

  addon.spr =
    (ap, x, uplo, alpha) =>
      ap.constructor === Float64Array ?
        addon.dspr(uplo || 121, x.length, alpha || 1.0, x, 1, ap) :
        addon.sspr(uplo || 121, x.length, alpha || 1.0, x, 1, ap);

  addon.spr2 =
    (ap, x, y, uplo, alpha) =>
      ap.constructor === Float64Array ?
        addon.dspr2(uplo || 121, x.length, alpha || 1.0, x, 1, y, 1, ap) :
        addon.sspr2(uplo || 121, x.length, alpha || 1.0, x, 1, y, 1, ap);

  addon.symv =
    (a, x, y, uplo, alpha, beta) =>
      a.constructor === Float64Array ?
        addon.dsymv(uplo || 121, x.length, alpha || 1.0, a, x.length, x, 1, beta || 1.0, y, 1) :
        addon.ssymv(uplo || 121, x.length, alpha || 1.0, a, x.length, x, 1, beta || 1.0, y, 1);

  addon.syr =
    (a, x, uplo, alpha) =>
      a.constructor === Float64Array ?
        addon.dsyr(uplo || 121, x.length, alpha || 1.0, x, 1, a, x.length) :
        addon.ssyr(uplo || 121, x.length, alpha || 1.0, x, 1, a, x.length);

  addon.syr2 =
    (a, x, y, uplo, alpha, beta) =>
      a.constructor === Float64Array ?
        addon.dsyr2(uplo || 121, x.length, alpha || 1.0, x, 1, y, 1, a, x.length) :
        addon.ssyr2(uplo || 121, x.length, alpha || 1.0, x, 1, y, 1, a, x.length);

  addon.tbmv =
    (a, x, y, uplo, trans, diag) =>
      a.constructor === Float64Array ?
        addon.dtbmv(uplo || 121, trans || 111, diag || 131, x.length, 0, a, x.length, x, 1) :
        addon.stbmv(uplo || 121, trans || 111, diag || 131, x.length, 0, a, x.length, x, 1);

  addon.tbsv =
    (a, x, uplo, trans, diag) =>
      a.constructor === Float64Array ?
        addon.dtbsv(uplo || 121, trans || 111, diag || 131, x.length, 0, a, x.length, x, 1) :
        addon.stbsv(uplo || 121, trans || 111, diag || 131, x.length, 0, a, x.length, x, 1);

  addon.tpmv =
    (ap, x, uplo, trans, diag) =>
      ap.constructor === Float64Array ?
        addon.dtpmv(uplo || 121, trans || 111, diag || 131, x.length, ap, x, 1) :
        addon.stpmv(uplo || 121, trans || 111, diag || 131, x.length, ap, x, 1);

  addon.tpsv =
    (ap, x, uplo, trans, diag) =>
      ap.constructor === Float64Array ?
        addon.dtpsv(uplo || 121, trans || 111, diag || 131, x.length, ap, x, 1) :
        addon.stpsv(uplo || 121, trans || 111, diag || 131, x.length, ap, x, 1);

  addon.trmv =
    (a, x, uplo, trans, diag) =>
      a.constructor === Float64Array ?
        addon.dtrmv(uplo || 121, trans || 111, diag || 131, x.length, a, x.length, x, 1) :
        addon.strmv(uplo || 121, trans || 111, diag || 131, x.length, a, x.length, x, 1);

  addon.trsv =
    (a, x, uplo, trans, diag) =>
      a.constructor === Float64Array ?
        addon.dtrsv(uplo || 121, trans || 111, diag || 131, x.length, a, x.length, x, 1) :
        addon.strsv(uplo || 121, trans || 111, diag || 131, x.length, a, x.length, x, 1);

  // BLAS Level 3 Routines
  addon.gemm =
    (a, b, c, m, n, k, transa, transb, alpha, beta) =>
      a.constructor === Float64Array ?
        addon.dgemm(transa || 111, transb || 111, m, n, k, alpha || 1.0, a, k, b, n, beta || 0.0, c, m) :
        addon.sgemm(transa || 111, transb || 111, m, n, k, alpha || 1.0, a, k, b, n, beta || 0.0, c, m);

  addon.symm =
    (a, b, c, m, n, side, uplo, alpha, beta) =>
      a.constructor === Float64Array ?
        addon.dsymm(side || 141, uplo || 121, m, n, alpha || 1.0, a, m, b, n, beta || 0.0, c, m) :
        addon.ssymm(side || 141, uplo || 121, m, n, alpha || 1.0, a, m, b, n, beta || 0.0, c, m);

  addon.syrk =
    (a, c, n, k, uplo, trans, alpha, beta) =>
      a.constructor === Float64Array ?
        addon.dsyrk(uplo || 121, trans || 111, n, k, alpha || 1.0, a, n, beta || 0.0, c, n) :
        addon.ssyrk(uplo || 121, trans || 111, n, k, alpha || 1.0, a, n, beta || 0.0, c, n);

  addon.syr2k =
    (a, b, c, n, k, uplo, trans, alpha, beta) =>
      a.constructor === Float64Array ?
        addon.dsyr2k(uplo || 121, trans || 111, n, k, alpha || 1.0, a, n, b, n, beta || 0.0, c, n) :
        addon.ssyr2k(uplo || 121, trans || 111, n, k, alpha || 1.0, a, n, b, n, beta || 0.0, c, n);

  addon.trmm =
    (a, b, m, n, side, uplo, transa, diag, alpha) =>
      a.constructor === Float64Array ?
        addon.dtrmm(side || 141, uplo || 121, transa || 111, diag || 131, m, n, alpha || 1.0, a, m, b, m) :
        addon.strmm(side || 141, uplo || 121, transa || 111, diag || 131, m, n, alpha || 1.0, a, m, b, m);

  addon.trsm =
    (a, b, m, n, side, uplo, transa, diag, alpha) =>
      a.constructor === Float64Array ?
        addon.dtrsm(side || 141, uplo || 121, transa || 111, diag || 131, m, n, alpha || 1.0, a, m, b, m) :
        addon.strsm(side || 141, uplo || 121, transa || 111, diag || 131, m, n, alpha || 1.0, a, m, b, m);

  module.exports = addon;
}());
