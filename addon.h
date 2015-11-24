#ifndef ADDON_H
#define ADDON_H

#include <vector>
#include <nan.h>

NAN_METHOD(ddot);

extern "C" double cblas_ddot(
  const int n,
  const double *x,
  const int inc_x,
  const double *y,
  const int inc_y
);

extern "C" void cblas_dscal(
  const int n,
  const double alpha,
  double *x,
  const int inc_x);

#endif
