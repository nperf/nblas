#ifndef DAXPY_H
#define DAXPY_H

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

#endif
