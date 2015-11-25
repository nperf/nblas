#ifndef DDOT_H
#define DDOT_H

#include <nan.h>

NAN_METHOD(ddot);
extern "C" double cblas_ddot(
  const int n,
  const double *x,
  const int inc_x,
  const double *y,
  const int inc_y
);

#endif
