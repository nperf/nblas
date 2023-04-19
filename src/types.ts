export type FloatArray = Float64Array | Float32Array;
export type MatrixTrans = 111 | 112 | 113;
export type MatrixUpperLower = 121 | 122;
export type MatrixUnit = 131 | 132;
export type MatrixLeftRight = 141 | 142;

export interface INBlas {
  [key: string]: any;

  dasum(n: number, x: Float64Array, incx: number): number;
  sasum(n: number, x: Float32Array, incx: number): number;
  dzasum(n: number, x: Float64Array, incx: number): number;
  scasum(n: number, x: Float32Array, incx: number): number;
  daxpy(
    n: number,
    alpha: number,
    x: Float64Array,
    incx: number,
    y: Float64Array,
    incy: number
  ): void;
  saxpy(
    n: number,
    alpha: number,
    x: Float32Array,
    incx: number,
    y: Float32Array,
    incy: number
  ): void;
  zaxpy(
    n: number,
    alpha: Float64Array,
    x: Float64Array,
    incx: number,
    y: Float64Array,
    incy: number
  ): void;
  caxpy(
    n: number,
    alpha: Float32Array,
    x: Float32Array,
    incx: number,
    y: Float32Array,
    incy: number
  ): void;
  dcopy(n: number, x: Float64Array, incx: number, y: Float64Array, incy: number): void;
  scopy(n: number, x: Float32Array, incx: number, y: Float32Array, incy: number): void;
  zcopy(n: number, x: Float64Array, incx: number, y: Float64Array, incy: number): void;
  ccopy(n: number, x: Float32Array, incx: number, y: Float32Array, incy: number): void;
  ddot(n: number, x: Float64Array, incx: number, y: Float64Array, incy: number): number;
  sdot(n: number, x: Float32Array, incx: number, y: Float32Array, incy: number): number;
  dnrm2(n: number, x: Float64Array, incx: number): number;
  snrm2(n: number, x: Float32Array, incx: number): number;
  dznrm2(n: number, x: Float64Array, incx: number): number;
  scnrm2(n: number, x: Float32Array, incx: number): number;
  drot(
    n: number,
    x: Float64Array,
    incx: number,
    y: Float64Array,
    incy: number,
    c: number,
    s: number
  ): void;
  srot(
    n: number,
    x: Float32Array,
    incx: number,
    y: Float32Array,
    incy: number,
    c: number,
    s: number
  ): void;
  drotg(a: Float64Array, b: Float64Array, c: Float64Array, s: Float64Array): void;
  srotg(a: Float32Array, b: Float32Array, c: Float32Array, s: Float32Array): void;
  drotm(n: number, x: Float64Array, incx: number, y: Float64Array, incy: number): void;
  srotm(n: number, x: Float32Array, incx: number, y: Float32Array, incy: number): void;
  drotmg(
    d1: Float64Array,
    d2: Float64Array,
    x1: Float64Array,
    y1: Float64Array,
    param: Float64Array
  ): void;
  srotmg(
    d1: Float32Array,
    d2: Float32Array,
    x1: Float32Array,
    y1: Float32Array,
    param: Float32Array
  ): void;
  dscal(n: number, a: number, x: Float64Array, incx: number): void;
  sscal(n: number, a: number, x: Float32Array, incx: number): void;
  zscal(n: number, a: Float64Array, x: Float64Array, incx: number): void;
  cscal(n: number, a: Float32Array, x: Float32Array, incx: number): void;
  dswap(n: number, x: Float64Array, incx: number, y: Float64Array, incy: number): void;
  sswap(n: number, x: Float32Array, incx: number, y: Float32Array, incy: number): void;
  zswap(n: number, x: Float64Array, incx: number, y: Float64Array, incy: number): void;
  cswap(n: number, x: Float32Array, incx: number, y: Float32Array, incy: number): void;
  idamax(n: number, x: Float64Array, incx: number): number;
  isamax(n: number, x: Float32Array, incx: number): number;
  izamax(n: number, x: Float64Array, incx: number): number;
  icamax(n: number, x: Float32Array, incx: number): number;

  // tslint:disable: max-line-length
  dgbmv(
    trans: MatrixTrans,
    m: number,
    n: number,
    kl: number,
    ku: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number,
    beta: number,
    y: Float64Array,
    incy: number
  ): void;
  sgbmv(
    trans: MatrixTrans,
    m: number,
    n: number,
    kl: number,
    ku: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number,
    beta: number,
    y: Float32Array,
    incy: number
  ): void;
  zgbmv(
    trans: MatrixTrans,
    m: number,
    n: number,
    kl: number,
    ku: number,
    alpha: Float64Array,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number,
    beta: Float64Array,
    y: Float64Array,
    incy: number
  ): void;
  cgbmv(
    trans: MatrixTrans,
    m: number,
    n: number,
    kl: number,
    ku: number,
    alpha: Float32Array,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number,
    beta: Float32Array,
    y: Float32Array,
    incy: number
  ): void;
  dgemv(
    trans: MatrixTrans,
    m: number,
    n: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number,
    beta: number,
    y: Float64Array,
    incy: number
  ): void;
  sgemv(
    trans: MatrixTrans,
    m: number,
    n: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number,
    beta: number,
    y: Float32Array,
    incy: number
  ): void;
  zgemv(
    trans: MatrixTrans,
    m: number,
    n: number,
    alpha: Float64Array,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number,
    beta: Float64Array,
    y: Float64Array,
    incy: number
  ): void;
  cgemv(
    trans: MatrixTrans,
    m: number,
    n: number,
    alpha: Float32Array,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number,
    beta: Float32Array,
    y: Float32Array,
    incy: number
  ): void;
  dger(
    m: number,
    n: number,
    alpha: number,
    x: Float64Array,
    incx: number,
    y: Float64Array,
    incy: number,
    a: Float64Array,
    lda: number
  ): void;
  sger(
    m: number,
    n: number,
    alpha: number,
    x: Float32Array,
    incx: number,
    y: Float32Array,
    incy: number,
    a: Float32Array,
    lda: number
  ): void;
  dsbmv(
    uplo: MatrixUpperLower,
    n: number,
    k: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number,
    beta: number,
    y: Float64Array,
    incy: number
  ): void;
  ssbmv(
    uplo: MatrixUpperLower,
    n: number,
    k: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number,
    beta: number,
    y: Float32Array,
    incy: number
  ): void;
  dspmv(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    ap: Float64Array,
    x: Float64Array,
    incx: number,
    beta: number,
    y: Float64Array,
    incy: number
  ): void;
  sspmv(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    ap: Float32Array,
    x: Float32Array,
    incx: number,
    beta: number,
    y: Float32Array,
    incy: number
  ): void;
  dspr(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    x: Float64Array,
    incx: number,
    ap: Float64Array
  ): void;
  sspr(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    x: Float32Array,
    incx: number,
    ap: Float32Array
  ): void;
  dspr2(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    x: Float64Array,
    incx: number,
    y: Float64Array,
    incy: number,
    ap: Float64Array
  ): void;
  sspr2(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    x: Float32Array,
    incx: number,
    y: Float32Array,
    incy: number,
    ap: Float32Array
  ): void;
  dsymv(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number,
    beta: number,
    y: Float64Array,
    incy: number
  ): void;
  ssymv(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number,
    beta: number,
    y: Float32Array,
    incy: number
  ): void;
  dsyr(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    x: Float64Array,
    incx: number,
    a: Float64Array,
    lda: number
  ): void;
  ssyr(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    x: Float32Array,
    incx: number,
    a: Float32Array,
    lda: number
  ): void;
  dsyr2(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    x: Float64Array,
    incx: number,
    y: Float64Array,
    incy: number,
    a: Float64Array,
    lda: number
  ): void;
  ssyr2(
    uplo: MatrixUpperLower,
    n: number,
    alpha: number,
    x: Float32Array,
    incx: number,
    y: Float32Array,
    incy: number,
    a: Float32Array,
    lda: number
  ): void;
  dtbmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    k: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number
  ): void;
  stbmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    k: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number
  ): void;
  ztbmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    k: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number
  ): void;
  ctbmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    k: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number
  ): void;
  dtbsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    k: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number
  ): void;
  stbsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    k: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number
  ): void;
  ztbsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    k: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number
  ): void;
  ctbsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    k: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number
  ): void;
  dtpmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    ap: Float64Array,
    x: Float64Array,
    incx: number
  ): void;
  stpmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    ap: Float32Array,
    x: Float32Array,
    incx: number
  ): void;
  ztpmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    ap: Float64Array,
    x: Float64Array,
    incx: number
  ): void;
  ctpmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    ap: Float32Array,
    x: Float32Array,
    incx: number
  ): void;
  dtpsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    ap: Float64Array,
    x: Float64Array,
    incx: number
  ): void;
  stpsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    ap: Float32Array,
    x: Float32Array,
    incx: number
  ): void;
  ztpsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    ap: Float64Array,
    x: Float64Array,
    incx: number
  ): void;
  ctpsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    ap: Float32Array,
    x: Float32Array,
    incx: number
  ): void;
  dtrmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number
  ): void;
  strmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number
  ): void;
  ztrmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number
  ): void;
  ctrmv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number
  ): void;
  dtrsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number
  ): void;
  strsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number
  ): void;
  ztrsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    a: Float64Array,
    lda: number,
    x: Float64Array,
    incx: number
  ): void;
  ctrsv(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    diag: MatrixUnit,
    n: number,
    a: Float32Array,
    lda: number,
    x: Float32Array,
    incx: number
  ): void;

  dgemm(
    transa: MatrixTrans,
    transb: MatrixTrans,
    m: number,
    n: number,
    k: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number,
    beta: number,
    c: Float64Array,
    ldc: number
  ): void;
  sgemm(
    transa: MatrixTrans,
    transb: MatrixTrans,
    m: number,
    n: number,
    k: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number,
    beta: number,
    c: Float32Array,
    ldc: number
  ): void;
  zgemm(
    transa: MatrixTrans,
    transb: MatrixTrans,
    m: number,
    n: number,
    k: number,
    alpha: Float64Array,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number,
    beta: Float64Array,
    c: Float64Array,
    ldc: number
  ): void;
  cgemm(
    transa: MatrixTrans,
    transb: MatrixTrans,
    m: number,
    n: number,
    k: number,
    alpha: Float32Array,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number,
    beta: Float32Array,
    c: Float32Array,
    ldc: number
  ): void;
  dsymm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    m: number,
    n: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number,
    beta: number,
    c: Float64Array,
    ldc: number
  ): void;
  ssymm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    m: number,
    n: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number,
    beta: number,
    c: Float32Array,
    ldc: number
  ): void;
  zsymm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    m: number,
    n: number,
    alpha: Float64Array,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number,
    beta: Float64Array,
    c: Float64Array,
    ldc: number
  ): void;
  csymm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    m: number,
    n: number,
    alpha: Float32Array,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number,
    beta: Float32Array,
    c: Float32Array,
    ldc: number
  ): void;
  dsyrk(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    n: number,
    k: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    beta: number,
    c: Float64Array,
    ldc: number
  ): void;
  ssyrk(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    n: number,
    k: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    beta: number,
    c: Float32Array,
    ldc: number
  ): void;
  zsyrk(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    n: number,
    k: number,
    alpha: Float64Array,
    a: Float64Array,
    lda: number,
    beta: Float64Array,
    c: Float64Array,
    ldc: number
  ): void;
  csyrk(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    n: number,
    k: number,
    alpha: Float32Array,
    a: Float32Array,
    lda: number,
    beta: Float32Array,
    c: Float32Array,
    ldc: number
  ): void;
  dsyr2k(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    n: number,
    k: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number,
    beta: number,
    c: Float64Array,
    ldc: number
  ): void;
  ssyr2k(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    n: number,
    k: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number,
    beta: number,
    c: Float32Array,
    ldc: number
  ): void;
  zsyr2k(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    n: number,
    k: number,
    alpha: Float64Array,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number,
    beta: Float64Array,
    c: Float64Array,
    ldc: number
  ): void;
  csyr2k(
    uplo: MatrixUpperLower,
    trans: MatrixTrans,
    n: number,
    k: number,
    alpha: Float32Array,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number,
    beta: Float32Array,
    c: Float32Array,
    ldc: number
  ): void;
  dtrmm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    transa: MatrixTrans,
    diag: MatrixUnit,
    m: number,
    n: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number
  ): void;
  strmm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    transa: MatrixTrans,
    diag: MatrixUnit,
    m: number,
    n: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number
  ): void;
  ztrmm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    transa: MatrixTrans,
    diag: MatrixUnit,
    m: number,
    n: number,
    alpha: Float64Array,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number
  ): void;
  ctrmm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    transa: MatrixTrans,
    diag: MatrixUnit,
    m: number,
    n: number,
    alpha: Float32Array,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number
  ): void;
  dtrsm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    transa: MatrixTrans,
    diag: MatrixUnit,
    m: number,
    n: number,
    alpha: number,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number
  ): void;
  strsm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    transa: MatrixTrans,
    diag: MatrixUnit,
    m: number,
    n: number,
    alpha: number,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number
  ): void;
  ztrsm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    transa: MatrixTrans,
    diag: MatrixUnit,
    m: number,
    n: number,
    alpha: Float64Array,
    a: Float64Array,
    lda: number,
    b: Float64Array,
    ldb: number
  ): void;
  ctrsm(
    side: MatrixLeftRight,
    uplo: MatrixUpperLower,
    transa: MatrixTrans,
    diag: MatrixUnit,
    m: number,
    n: number,
    alpha: Float32Array,
    a: Float32Array,
    lda: number,
    b: Float32Array,
    ldb: number
  ): void;

  asum(x: FloatArray): number;
  axpy(x: FloatArray, y: FloatArray, a?: number): void;
  copy(x: FloatArray, y: FloatArray): void;
  dot(x: FloatArray, y: FloatArray): number;
  nrm2(x: FloatArray): number;
  rot(x: FloatArray, y: FloatArray, c: number, s: number): void;
  rotg(a: FloatArray, b: FloatArray, c: FloatArray, s: FloatArray): void;
  rotm(x: FloatArray, y: FloatArray, param: FloatArray): void;
  rotmg(d1: FloatArray, d2: FloatArray, x1: FloatArray, y1: FloatArray, param: FloatArray): void;
  scal(x: FloatArray, a: number): void;
  swap(x: FloatArray, y: FloatArray): void;
  iamax(x: FloatArray): number;
  gbmv(
    a: FloatArray,
    x: FloatArray,
    y: FloatArray,
    kl?: number,
    ku?: number,
    alpha?: number,
    beta?: number,
    trans?: MatrixTrans
  ): void;
  gemv(
    a: FloatArray,
    x: FloatArray,
    y: FloatArray,
    alpha?: number,
    beta?: number,
    trans?: MatrixTrans
  ): void;
  ger(a: FloatArray, x: FloatArray, y: FloatArray, alpha?: number): void;
  sbmv(
    a: FloatArray,
    x: FloatArray,
    y: FloatArray,
    k?: number,
    uplo?: MatrixUpperLower,
    alpha?: number,
    beta?: number
  ): void;
  spmv(
    ap: FloatArray,
    x: FloatArray,
    y: FloatArray,
    uplo?: MatrixUpperLower,
    alpha?: number,
    beta?: number
  ): void;
  spr(ap: FloatArray, x: FloatArray, uplo?: MatrixUpperLower, alpha?: number): void;
  spr2(ap: FloatArray, x: FloatArray, y: FloatArray, uplo?: MatrixUpperLower, alpha?: number): void;
  symv(
    a: FloatArray,
    x: FloatArray,
    y: FloatArray,
    uplo?: MatrixUpperLower,
    alpha?: number,
    beta?: number
  ): void;
  syr(a: FloatArray, x: FloatArray, uplo?: MatrixUpperLower, alpha?: number): void;
  syr2(a: FloatArray, x: FloatArray, y: FloatArray, uplo?: MatrixUpperLower, alpha?: number): void;
  tbmv(
    a: FloatArray,
    x: FloatArray,
    uplo?: MatrixUpperLower,
    trans?: MatrixTrans,
    diag?: MatrixUnit
  ): void;
  tbsv(
    a: FloatArray,
    x: FloatArray,
    uplo?: MatrixUpperLower,
    trans?: MatrixTrans,
    diag?: MatrixUnit
  ): void;
  tpmv(
    ap: FloatArray,
    x: FloatArray,
    uplo?: MatrixUpperLower,
    trans?: MatrixTrans,
    diag?: MatrixUnit
  ): void;
  tpsv(
    ap: FloatArray,
    x: FloatArray,
    uplo?: MatrixUpperLower,
    trans?: MatrixTrans,
    diag?: MatrixUnit
  ): void;
  trmv(
    a: FloatArray,
    x: FloatArray,
    uplo?: MatrixUpperLower,
    trans?: MatrixTrans,
    diag?: MatrixUnit
  ): void;
  trsv(
    a: FloatArray,
    x: FloatArray,
    uplo?: MatrixUpperLower,
    trans?: MatrixTrans,
    diag?: MatrixUnit
  ): void;
  gemm(
    a: FloatArray,
    b: FloatArray,
    c: FloatArray,
    m: number,
    n: number,
    k: number,
    transa?: MatrixTrans,
    transb?: MatrixTrans,
    alpha?: number,
    beta?: number
  ): void;
  symm(
    a: FloatArray,
    b: FloatArray,
    c: FloatArray,
    m: number,
    n: number,
    side?: MatrixLeftRight,
    uplo?: MatrixUpperLower,
    alpha?: number,
    beta?: number
  ): void;
  syrk(
    a: FloatArray,
    c: FloatArray,
    n: FloatArray,
    k: number,
    uplo?: MatrixUpperLower,
    trans?: MatrixTrans,
    alpha?: number,
    beta?: number
  ): void;
  syr2k(
    a: FloatArray,
    b: FloatArray,
    c: FloatArray,
    n: number,
    k: number,
    uplo?: MatrixUpperLower,
    trans?: MatrixTrans,
    alpha?: number,
    beta?: number
  ): void;
  trmm(
    a: FloatArray,
    b: FloatArray,
    m: number,
    n: number,
    side?: MatrixLeftRight,
    uplo?: MatrixUpperLower,
    transa?: MatrixTrans,
    diag?: MatrixUnit,
    alpha?: number
  ): void;
  trsm(
    a: FloatArray,
    b: FloatArray,
    m: number,
    n: number,
    side?: MatrixLeftRight,
    uplo?: MatrixUpperLower,
    transa?: MatrixTrans,
    diag?: MatrixUnit,
    alpha?: number
  ): void;
}
