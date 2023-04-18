"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dswap = exports.scal = exports.cscal = exports.zscal = exports.sscal = exports.dscal = exports.rotmg = exports.srotmg = exports.drotmg = exports.rotm = exports.srotm = exports.drotm = exports.rotg = exports.srotg = exports.drotg = exports.rot = exports.srot = exports.drot = exports.nrm2 = exports.scnrm2 = exports.dznrm2 = exports.snrm2 = exports.dnrm2 = exports.dot = exports.sdot = exports.ddot = exports.copy = exports.ccopy = exports.zcopy = exports.scopy = exports.dcopy = exports.axpy = exports.caxpy = exports.zaxpy = exports.saxpy = exports.daxpy = exports.asum = exports.scasum = exports.dzasum = exports.sasum = exports.dasum = exports.Right = exports.Left = exports.Unit = exports.NonUnit = exports.Lower = exports.Upper = exports.ConjTrans = exports.Trans = exports.NoTrans = void 0;
exports.stbsv = exports.dtbsv = exports.tbmv = exports.ctbmv = exports.ztbmv = exports.stbmv = exports.dtbmv = exports.syr2 = exports.ssyr2 = exports.dsyr2 = exports.syr = exports.ssyr = exports.dsyr = exports.symv = exports.ssymv = exports.dsymv = exports.spr2 = exports.sspr2 = exports.dspr2 = exports.spr = exports.sspr = exports.dspr = exports.spmv = exports.sspmv = exports.dspmv = exports.sbmv = exports.ssbmv = exports.dsbmv = exports.ger = exports.sger = exports.dger = exports.gemv = exports.cgemv = exports.zgemv = exports.sgemv = exports.dgemv = exports.gbmv = exports.cgbmv = exports.zgbmv = exports.sgbmv = exports.dgbmv = exports.iamax = exports.icamax = exports.izamax = exports.isamax = exports.idamax = exports.swap = exports.cswap = exports.zswap = exports.sswap = void 0;
exports.strsm = exports.dtrsm = exports.trmm = exports.ctrmm = exports.ztrmm = exports.strmm = exports.dtrmm = exports.syr2k = exports.csyr2k = exports.zsyr2k = exports.ssyr2k = exports.dsyr2k = exports.syrk = exports.csyrk = exports.zsyrk = exports.ssyrk = exports.dsyrk = exports.symm = exports.csymm = exports.zsymm = exports.ssymm = exports.dsymm = exports.gemm = exports.cgemm = exports.zgemm = exports.sgemm = exports.dgemm = exports.trsv = exports.ctrsv = exports.ztrsv = exports.strsv = exports.dtrsv = exports.trmv = exports.ctrmv = exports.ztrmv = exports.strmv = exports.dtrmv = exports.tpsv = exports.ctpsv = exports.ztpsv = exports.stpsv = exports.dtpsv = exports.tpmv = exports.ctpmv = exports.ztpmv = exports.stpmv = exports.dtpmv = exports.tbsv = exports.ctbsv = exports.ztbsv = void 0;
exports.trsm = exports.ctrsm = exports.ztrsm = void 0;
var util_1 = require("./util");
var nblas;
try {
    nblas = require('../build/Release/nblas');
}
catch (_) {
    nblas = require('./nblas');
}
exports.NoTrans = 111;
exports.Trans = 112;
exports.ConjTrans = 113;
exports.Upper = 121;
exports.Lower = 122;
exports.NonUnit = 131;
exports.Unit = 132;
exports.Left = 141;
exports.Right = 142;
exports.dasum = nblas.dasum;
exports.sasum = nblas.sasum;
exports.dzasum = nblas.dzasum;
exports.scasum = nblas.scasum;
var asum = function (x) {
    return nblas["".concat((0, util_1.prefix)(x), "asum")](x.length, x, 1);
};
exports.asum = asum;
exports.daxpy = nblas.daxpy;
exports.saxpy = nblas.saxpy;
exports.zaxpy = nblas.zaxpy;
exports.caxpy = nblas.caxpy;
var axpy = function (x, y, a) {
    if (a === void 0) { a = 1; }
    return nblas["".concat((0, util_1.prefix)(x), "axpy")](x.length, a, x, 1, y, 1);
};
exports.axpy = axpy;
exports.dcopy = nblas.dcopy;
exports.scopy = nblas.scopy;
exports.zcopy = nblas.zcopy;
exports.ccopy = nblas.ccopy;
var copy = function (x, y) {
    return nblas["".concat((0, util_1.prefix)(x), "copy")](x.length, x, 1, y, 1);
};
exports.copy = copy;
exports.ddot = nblas.ddot;
exports.sdot = nblas.sdot;
var dot = function (x, y) {
    return nblas["".concat((0, util_1.prefix)(x), "dot")](x.length, x, 1, y, 1);
};
exports.dot = dot;
exports.dnrm2 = nblas.dnrm2;
exports.snrm2 = nblas.snrm2;
exports.dznrm2 = nblas.dznrm2;
exports.scnrm2 = nblas.scnrm2;
var nrm2 = function (x) {
    return nblas["".concat((0, util_1.prefix)(x), "nrm2")](x.length, x, 1);
};
exports.nrm2 = nrm2;
exports.drot = nblas.drot;
exports.srot = nblas.srot;
var rot = function (x, y, c, s) {
    return nblas["".concat((0, util_1.prefix)(x), "rot")](x.length, x, 1, y, 1, c, s);
};
exports.rot = rot;
exports.drotg = nblas.drotg;
exports.srotg = nblas.srotg;
var rotg = function (a, b, c, s) {
    return nblas["".concat((0, util_1.prefix)(a), "rotg")](a, b, c, s);
};
exports.rotg = rotg;
exports.drotm = nblas.drotm;
exports.srotm = nblas.srotm;
var rotm = function (x, y, param) {
    return nblas["".concat((0, util_1.prefix)(x), "rotm")](x.length, x, 1, y, 1, param);
};
exports.rotm = rotm;
exports.drotmg = nblas.drotmg;
exports.srotmg = nblas.srotmg;
var rotmg = function (d1, d2, x1, y1, param) {
    return nblas["".concat((0, util_1.prefix)(d1), "rotmg")](d1, d2, x1, y1, param);
};
exports.rotmg = rotmg;
exports.dscal = nblas.dscal;
exports.sscal = nblas.sscal;
exports.zscal = nblas.zscal;
exports.cscal = nblas.cscal;
var scal = function (x, a) {
    return nblas["".concat((0, util_1.prefix)(x), "scal")](x.length, a, x, 1);
};
exports.scal = scal;
exports.dswap = nblas.dswap;
exports.sswap = nblas.sswap;
exports.zswap = nblas.zswap;
exports.cswap = nblas.cswap;
var swap = function (x, y) {
    return nblas["".concat((0, util_1.prefix)(x), "swap")](x.length, x, 1, y, 1);
};
exports.swap = swap;
exports.idamax = nblas.idamax;
exports.isamax = nblas.isamax;
exports.izamax = nblas.izamax;
exports.icamax = nblas.icamax;
var iamax = function (x) {
    return nblas["i".concat((0, util_1.prefix)(x), "amax")](x.length, x, 1);
};
exports.iamax = iamax;
exports.dgbmv = nblas.dgbmv;
exports.sgbmv = nblas.sgbmv;
exports.zgbmv = nblas.zgbmv;
exports.cgbmv = nblas.cgbmv;
var gbmv = function (a, x, y, kl, ku, alpha, beta, trans) {
    if (kl === void 0) { kl = 0; }
    if (ku === void 0) { ku = 0; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    if (trans === void 0) { trans = exports.NoTrans; }
    return nblas["".concat((0, util_1.prefix)(x), "gbmv")](trans, x.length, y.length, kl, ku, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.gbmv = gbmv;
exports.dgemv = nblas.dgemv;
exports.sgemv = nblas.sgemv;
exports.zgemv = nblas.zgemv;
exports.cgemv = nblas.cgemv;
var gemv = function (a, x, y, alpha, beta, trans) {
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    if (trans === void 0) { trans = exports.NoTrans; }
    return nblas["".concat((0, util_1.prefix)(x), "gemv")](trans, x.length, y.length, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.gemv = gemv;
exports.dger = nblas.dger;
exports.sger = nblas.sger;
var ger = function (a, x, y, alpha) {
    if (alpha === void 0) { alpha = 1; }
    return nblas["".concat((0, util_1.prefix)(x), "ger")](x.length, y.length, alpha, x, 1, y, 1, a, x.length);
};
exports.ger = ger;
exports.dsbmv = nblas.dsbmv;
exports.ssbmv = nblas.ssbmv;
var sbmv = function (a, x, y, k, uplo, alpha, beta) {
    if (k === void 0) { k = 0; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas["".concat((0, util_1.prefix)(x), "sbmv")](uplo, x.length, k, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.sbmv = sbmv;
exports.dspmv = nblas.dspmv;
exports.sspmv = nblas.sspmv;
var spmv = function (ap, x, y, uplo, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas["".concat((0, util_1.prefix)(x), "spmv")](uplo, x.length, alpha, ap, x, 1, beta, y, 1);
};
exports.spmv = spmv;
exports.dspr = nblas.dspr;
exports.sspr = nblas.sspr;
var spr = function (ap, x, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nblas["".concat((0, util_1.prefix)(x), "spr")](uplo, x.length, alpha, x, 1, ap);
};
exports.spr = spr;
exports.dspr2 = nblas.dspr2;
exports.sspr2 = nblas.sspr2;
var spr2 = function (ap, x, y, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nblas["".concat((0, util_1.prefix)(x), "spr2")](uplo, x.length, alpha, x, 1, y, 1, ap);
};
exports.spr2 = spr2;
exports.dsymv = nblas.dsymv;
exports.ssymv = nblas.ssymv;
var symv = function (a, x, y, uplo, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas["".concat((0, util_1.prefix)(x), "symv")](uplo, x.length, alpha, a, x.length, x, 1, beta, y, 1);
};
exports.symv = symv;
exports.dsyr = nblas.dsyr;
exports.ssyr = nblas.ssyr;
var syr = function (a, x, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nblas["".concat((0, util_1.prefix)(x), "syr")](uplo, x.length, alpha, x, 1, a, x.length);
};
exports.syr = syr;
exports.dsyr2 = nblas.dsyr2;
exports.ssyr2 = nblas.ssyr2;
var syr2 = function (a, x, y, uplo, alpha) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    return nblas["".concat((0, util_1.prefix)(x), "syr2")](uplo, x.length, alpha, x, 1, y, 1, a, x.length);
};
exports.syr2 = syr2;
exports.dtbmv = nblas.dtbmv;
exports.stbmv = nblas.stbmv;
exports.ztbmv = nblas.ztbmv;
exports.ctbmv = nblas.ctbmv;
var tbmv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas["".concat((0, util_1.prefix)(x), "tbmv")](uplo, trans, diag, x.length, 0, a, x.length, x, 1);
};
exports.tbmv = tbmv;
exports.dtbsv = nblas.dtbsv;
exports.stbsv = nblas.stbsv;
exports.ztbsv = nblas.ztbsv;
exports.ctbsv = nblas.ctbsv;
var tbsv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas["".concat((0, util_1.prefix)(x), "tbsv")](uplo, trans, diag, x.length, 0, a, x.length, x, 1);
};
exports.tbsv = tbsv;
exports.dtpmv = nblas.dtpmv;
exports.stpmv = nblas.stpmv;
exports.ztpmv = nblas.ztpmv;
exports.ctpmv = nblas.ctpmv;
var tpmv = function (ap, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas["".concat((0, util_1.prefix)(x), "tpmv")](uplo, trans, diag, x.length, ap, x, 1);
};
exports.tpmv = tpmv;
exports.dtpsv = nblas.dtpsv;
exports.stpsv = nblas.stpsv;
exports.ztpsv = nblas.ztpsv;
exports.ctpsv = nblas.ctpsv;
var tpsv = function (ap, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas["".concat((0, util_1.prefix)(x), "tpsv")](uplo, trans, diag, x.length, ap, x, 1);
};
exports.tpsv = tpsv;
exports.dtrmv = nblas.dtrmv;
exports.strmv = nblas.strmv;
exports.ztrmv = nblas.ztrmv;
exports.ctrmv = nblas.ctrmv;
var trmv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas["".concat((0, util_1.prefix)(x), "trmv")](uplo, trans, diag, x.length, a, x.length, x, 1);
};
exports.trmv = trmv;
exports.dtrsv = nblas.dtrsv;
exports.strsv = nblas.strsv;
exports.ztrsv = nblas.ztrsv;
exports.ctrsv = nblas.ctrsv;
var trsv = function (a, x, uplo, trans, diag) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    return nblas["".concat((0, util_1.prefix)(x), "trsv")](uplo, trans, diag, x.length, a, x.length, x, 1);
};
exports.trsv = trsv;
exports.dgemm = nblas.dgemm;
exports.sgemm = nblas.sgemm;
exports.zgemm = nblas.zgemm;
exports.cgemm = nblas.cgemm;
var gemm = function (a, b, c, m, n, k, transa, transb, alpha, beta) {
    if (transa === void 0) { transa = exports.NoTrans; }
    if (transb === void 0) { transb = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas["".concat((0, util_1.prefix)(a), "gemm")](transa, transb, m, n, k, alpha, a, k, b, n, beta, c, n);
};
exports.gemm = gemm;
exports.dsymm = nblas.dsymm;
exports.ssymm = nblas.ssymm;
exports.zsymm = nblas.zsymm;
exports.csymm = nblas.csymm;
var symm = function (a, b, c, m, n, side, uplo, alpha, beta) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas["".concat((0, util_1.prefix)(a), "symm")](side, uplo, m, n, alpha, a, m, b, n, beta, c, m);
};
exports.symm = symm;
exports.dsyrk = nblas.dsyrk;
exports.ssyrk = nblas.ssyrk;
exports.zsyrk = nblas.zsyrk;
exports.csyrk = nblas.csyrk;
var syrk = function (a, c, n, k, uplo, trans, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas["".concat((0, util_1.prefix)(a), "syrk")](uplo, trans, n, k, alpha, a, n, beta, c, n);
};
exports.syrk = syrk;
exports.dsyr2k = nblas.dsyr2k;
exports.ssyr2k = nblas.ssyr2k;
exports.zsyr2k = nblas.zsyr2k;
exports.csyr2k = nblas.csyr2k;
var syr2k = function (a, b, c, n, k, uplo, trans, alpha, beta) {
    if (uplo === void 0) { uplo = exports.Upper; }
    if (trans === void 0) { trans = exports.NoTrans; }
    if (alpha === void 0) { alpha = 1; }
    if (beta === void 0) { beta = 0; }
    return nblas["".concat((0, util_1.prefix)(a), "syr2k")](uplo, trans, n, k, alpha, a, n, b, n, beta, c, n);
};
exports.syr2k = syr2k;
exports.dtrmm = nblas.dtrmm;
exports.strmm = nblas.strmm;
exports.ztrmm = nblas.ztrmm;
exports.ctrmm = nblas.ctrmm;
var trmm = function (a, b, m, n, side, uplo, transa, diag, alpha) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (transa === void 0) { transa = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    if (alpha === void 0) { alpha = 1; }
    return nblas["".concat((0, util_1.prefix)(a), "trmm")](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
};
exports.trmm = trmm;
exports.dtrsm = nblas.dtrsm;
exports.strsm = nblas.strsm;
exports.ztrsm = nblas.ztrsm;
exports.ctrsm = nblas.ctrsm;
var trsm = function (a, b, m, n, side, uplo, transa, diag, alpha) {
    if (side === void 0) { side = exports.Left; }
    if (uplo === void 0) { uplo = exports.Upper; }
    if (transa === void 0) { transa = exports.NoTrans; }
    if (diag === void 0) { diag = exports.NonUnit; }
    if (alpha === void 0) { alpha = 1; }
    return nblas["".concat((0, util_1.prefix)(a), "trsm")](side, uplo, transa, diag, m, n, alpha, a, m, b, m);
};
exports.trsm = trsm;
