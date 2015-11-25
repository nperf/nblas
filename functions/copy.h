#ifndef COPY_H
#define COPY_H

#include <nan.h>

NAN_METHOD(dcopy);
extern "C" void cblas_dcopy (
  const int n,
  const double *x,
  const int inc_x,
  const double *y,
  const int inc_y
);

NAN_METHOD(scopy);
extern "C" void cblas_scopy (
  const int n,
  const float *x,
  const int inc_x,
  const float *y,
  const int inc_y
);

#endif
