#ifndef GEMM_H
#define GEMM_H

#include <nan.h>

NAN_METHOD(dgemm);
extern "C" void cblas_dgemm (
  // row-major: 101, col-major: 102
  const int order,
  // none: 111, transpose: 112, conjugate: 113, atlas: 114
  const int transpose_x,
  const int transpose_y,

  const int m, // rows in matrices x and z
  const int n, // cols in matrices y and z
  const int k, // cols in x; rows in y

  // scaling factor for the product of matrices x and y
  const double alpha,

  const double *x,
  const int ldx, // size of the first dimension of matrix x
  const double *y,
  const int ldy, // size of the first dimension of matrix y

  // scaling factor for the matrix z
  const double beta,

  const double *z,
  const int ldz // size of the first dimension of matrix z
);

NAN_METHOD(sgemm);
extern "C" void cblas_sgemm (
  const int order,
  const int transpose_x,
  const int transpose_y,
  const int m,
  const int n,
  const int k,
  const float alpha,
  const float *x,
  const int ldx,
  const float *y,
  const int ldy,
  const float beta,
  const float *z,
  const int ldz
);

#endif
