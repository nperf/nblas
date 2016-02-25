(function () {
  'use strict';

  var nblas = require('./build/Release/addon');

  // from enums declared in functions/cblas.h
  nblas.NoTrans = 111;
  nblas.Trans = 112;
  nblas.ConjTrans = 113;

  nblas.Upper = 121;
  nblas.Lower = 122;

  nblas.NonUnit = 131;
  nblas.Unit = 132;

  nblas.Left = 141;
  nblas.Right = 142;

  // enforce strict type checking
  function typeCheck(array) {
    if (array.constructor === Float64Array)
      return true;
    else if (array.constructor === Float32Array)
      return false;

    throw new Error('invalid type!');
  }

  // BLAS Level 1 Routines and Functions
  nblas.asum = function (x) {
    return typeCheck(x) ?
      nblas.dasum(x.length, x, 1) :
      nblas.sasum(x.length, x, 1);
  };

  nblas.axpy = function (x, y, alpha) {
    alpha = alpha || 1.0;
    return typeCheck(x) ?
      nblas.daxpy(x.length, alpha, x, 1, y, 1) :
      nblas.saxpy(x.length, alpha, x, 1, y, 1);
  };

  nblas.copy = function (x, y) {
    return typeCheck(x) ?
      nblas.dcopy(x.length, x, 1, y, 1) :
      nblas.scopy(x.length, x, 1, y, 1);
  };

  nblas.dot = function (x, y) {
    return typeCheck(x) ?
      nblas.ddot(x.length, x, 1, y, 1) :
      nblas.sdot(x.length, x, 1, y, 1);
  };

  nblas.nrm2 = function (x) {
    return typeCheck(x) ?
      nblas.dnrm2(x.length, x, 1) :
      nblas.snrm2(x.length, x, 1);
  };

  nblas.rot = function (x, y, c, s) {
    return typeCheck(x) ?
      nblas.drot(x.length, x, 1, y, 1, c, s) :
      nblas.srot(x.length, x, 1, y, 1, c, s);
  };

  nblas.rotg = function (x, y, c, s) {
    return typeCheck(x) ?
      nblas.drotg(x, y, c, s) :
      nblas.srotg(x, y, c, s);
  };

  nblas.rotm = function (x, y, param) {
    return typeCheck(x) ?
      nblas.drotm(x.length, x, 1, y, 1, param) :
      nblas.srotm(x.length, x, 1, y, 1, param);
  };

  nblas.rotmg = function (d1, d2, x1, y1, param) {
    return typeCheck(x) ?
      nblas.drotmg(d1, d2, x1, y1, param) :
      nblas.srotmg(d1, d2, x1, y1, param);
  };

  nblas.scal = function (x, alpha) {
    return typeCheck(x) ?
      nblas.dscal(x.length, alpha, x, 1) :
      nblas.sscal(x.length, alpha, x, 1);
  };

  nblas.swap = function (x, y) {
    return typeCheck(x) ?
      nblas.dswap(x.length, x, 1, y, 1) :
      nblas.sswap(x.length, x, 1, y, 1);
  };

  nblas.iamax = function (x) {
    return typeCheck(x) ?
      nblas.idamax(x.length, x, 1) :
      nblas.isamax(x.length, x, 1);
  };

  nblas.iamin = function (x) {
    return typeCheck(x) ?
      nblas.idamin(x.length, x, 1) :
      nblas.isamin(x.length, x, 1);
  };

  // BLAS Level 2 Routines
  nblas.gbmv = function (a, x, y, kl, ku, alpha, beta, trans) {
    trans = trans || nblas.NoTrans;
    kl = kl || 0;
    ku = ku || 0;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(a) ?
      nblas.dgbmv(trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1) :
      nblas.sgbmv(trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);
  };

  nblas.gemv = function (a, x, y, alpha, beta, trans) {
    trans = trans || nblas.NoTrans;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(a) ?
      nblas.dgemv(trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1) :
      nblas.sgemv(trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);
  };

  nblas.ger = function (a, x, y, alpha) {
    alpha = alpha || 1.0;
    return typeCheck(a) ?
      nblas.dger(x.length, y.length, alpha, x, 1, y, 1, a, x.length) :
      nblas.sger(x.length, y.length, alpha, x, 1, y, 1, a, x.length);
  };

  nblas.sbmv = function (a, x, y, k, uplo, alpha, beta) {
    uplo = uplo || nblas.Upper;
    k = k || 0;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(a) ?
      nblas.dsbmv(uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1) :
      nblas.ssbmv(uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);
  };

  nblas.spmv = function (ap, x, y, uplo, alpha, beta) {
    uplo = uplo || nblas.Upper;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(ap) ?
      nblas.dspmv(uplo, x.length, alpha, ap, x, 1, beta, y, 1) :
      nblas.sspmv(uplo, x.length, alpha, ap, x, 1, beta, y, 1);
  };

  nblas.spr = function (ap, x, uplo, alpha) {
    uplo = uplo || nblas.Upper;
    alpha = alpha || 1.0;
    return typeCheck(ap) ?
      nblas.dspr(uplo, x.length, alpha, x, 1, ap) :
      nblas.sspr(uplo, x.length, alpha, x, 1, ap);
  };

  nblas.spr2 = function (ap, x, y, uplo, alpha) {
    uplo = uplo || nblas.Upper;
    alpha = alpha || 1.0;
    return typeCheck(ap) ?
      nblas.dspr2(uplo, x.length, alpha, x, 1, y, 1, ap) :
      nblas.sspr2(uplo, x.length, alpha, x, 1, y, 1, ap);
  };

  nblas.symv = function (a, x, y, uplo, alpha, beta) {
    uplo = uplo || nblas.Upper;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(a) ?
      nblas.dsymv(uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1) :
      nblas.ssymv(uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);
  };

  nblas.syr = function (a, x, uplo, alpha) {
    uplo = uplo || nblas.Upper;
    alpha = alpha || 1.0;
    return typeCheck(a) ?
      nblas.dsyr(uplo, x.length, alpha, x, 1, a, x.length) :
      nblas.ssyr(uplo, x.length, alpha, x, 1, a, x.length);
  };

  nblas.syr2 = function (a, x, y, uplo, alpha) {
    uplo = uplo || nblas.Upper;
    alpha = alpha || 1.0;
    return typeCheck(a) ?
      nblas.dsyr2(uplo, x.length, alpha, x, 1, y, 1, a, x.length) :
      nblas.ssyr2(uplo, x.length, alpha, x, 1, y, 1, a, x.length);
  };

  nblas.tbmv = function (a, x, y, uplo, trans, diag) {
    uplo = uplo || nblas.Upper;
    trans = trans || nblas.NoTrans;
    diag = diag || nblas.NonUnit;
    return typeCheck(a) ?
      nblas.dtbmv(uplo, trans, diag, x.length, 0, a, x.length, x, 1) :
      nblas.stbmv(uplo, trans, diag, x.length, 0, a, x.length, x, 1);
  };

  nblas.tbsv = function (a, x, uplo, trans, diag) {
    uplo = uplo || nblas.Upper;
    trans = trans || nblas.NoTrans;
    diag = diag || nblas.NonUnit;
    return typeCheck(a) ?
      nblas.dtbsv(uplo, trans, diag, x.length, 0, a, x.length, x, 1) :
      nblas.stbsv(uplo, trans, diag, x.length, 0, a, x.length, x, 1);
  };

  nblas.tpmv = function (ap, x, uplo, trans, diag) {
    uplo = uplo || nblas.Upper;
    trans = trans || nblas.NoTrans;
    diag = diag || nblas.NonUnit;
    return typeCheck(ap) ?
      nblas.dtpmv(uplo, trans, diag, x.length, ap, x, 1) :
      nblas.stpmv(uplo, trans, diag, x.length, ap, x, 1);
  };

  nblas.tpsv = function (ap, x, uplo, trans, diag) {
    uplo = uplo || nblas.Upper;
    trans = trans || nblas.NoTrans;
    diag = diag || nblas.NonUnit;
    return typeCheck(ap) ?
      nblas.dtpsv(uplo, trans, diag, x.length, ap, x, 1) :
      nblas.stpsv(uplo, trans, diag, x.length, ap, x, 1);
  };

  nblas.trmv = function (a, x, uplo, trans, diag) {
    uplo = uplo || nblas.Upper;
    trans = trans || nblas.NoTrans;
    diag = diag || nblas.NonUnit;
    return typeCheck(a) ?
      nblas.dtrmv(uplo, trans, diag, x.length, a, x.length, x, 1) :
      nblas.strmv(uplo, trans, diag, x.length, a, x.length, x, 1);
  };

  nblas.trsv = function (a, x, uplo, trans, diag) {
    uplo = uplo || nblas.Upper;
    trans = trans || nblas.NoTrans;
    diag = diag || nblas.NonUnit;
    return typeCheck(a) ?
      nblas.dtrsv(uplo, trans, diag, x.length, a, x.length, x, 1) :
      nblas.strsv(uplo, trans, diag, x.length, a, x.length, x, 1);
  };

  // BLAS Level 3 Routines
  nblas.gemm = function (a, b, c, m, n, k, transa, transb, alpha, beta) {
    transa = transa || nblas.NoTrans;
    transb = transb || nblas.NoTrans;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(a) ?
      nblas.dgemm(transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n) :
      nblas.sgemm(transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);
  };

  nblas.symm = function (a, b, c, m, n, side, uplo, alpha, beta) {
    side = side || nblas.Left;
    uplo = uplo || nblas.Upper;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(a) ?
      nblas.dsymm(side, uplo, m, n, alpha, a, m, b, n, beta, c, m) :
      nblas.ssymm(side, uplo, m, n, alpha, a, m, b, n, beta, c, m);
  };

  nblas.syrk = function (a, c, n, k, uplo, trans, alpha, beta) {
    uplo = uplo || nblas.Upper;
    trans = trans || nblas.NoTrans;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(a) ?
      nblas.dsyrk(uplo, trans, n, k, alpha, a, n, beta, c, n) :
      nblas.ssyrk(uplo, trans, n, k, alpha, a, n, beta, c, n);
  };

  nblas.syr2k = function (a, b, c, n, k, uplo, trans, alpha, beta) {
    uplo = uplo || nblas.Upper;
    trans = trans || nblas.NoTrans;
    alpha = alpha || 1.0;
    beta = beta || 0.0;
    return typeCheck(a) ?
      nblas.dsyr2k(uplo, trans, n, k, alpha, a, n, b, n, beta, c, n) :
      nblas.ssyr2k(uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);
  };

  nblas.trmm = function (a, b, m, n, side, uplo, transa, diag, alpha) {
    side = side || nblas.Left;
    uplo = uplo || nblas.Upper;
    transa = transa || nblas.NoTrans;
    diag = diag || nblas.NonUnit;
    alpha = alpha || 1.0;
    return typeCheck(a) ?
      nblas.dtrmm(side, uplo, transa, diag, m, n, alpha, a, m, b, m) :
      nblas.strmm(side, uplo, transa, diag, m, n, alpha, a, m, b, m);
  };

  nblas.trsm = function (a, b, m, n, side, uplo, transa, diag, alpha) {
    side = side || nblas.Left;
    uplo = uplo || nblas.Upper;
    transa = transa || nblas.NoTrans;
    diag = diag || nblas.NonUnit;
    alpha = alpha || 1.0;
    return typeCheck(a) ?
      nblas.dtrsm(side, uplo, transa, diag, m, n, alpha, a, m, b, m) :
      nblas.strsm(side, uplo, transa, diag, m, n, alpha, a, m, b, m);
  };

  module.exports = nblas;
}());
