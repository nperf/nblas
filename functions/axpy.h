#ifndef AXPY_H
#define AXPY_H

#include <nan.h>

NAN_METHOD(daxpy);
extern "C" void cblas_daxpy (
  const int n,
  const double alpha,
  const double *x,
  const int inc_x,
  const double *y,
  const int inc_y
);

NAN_METHOD(saxpy);
extern "C" void cblas_saxpy (
  const int n,
  const float alpha,
  const float *x,
  const int inc_x,
  const float *y,
  const int inc_y
);

#endif
