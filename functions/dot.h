#ifndef DOT_H
#define DOT_H

#include <nan.h>

NAN_METHOD(ddot);
extern "C" double cblas_ddot(
  const int n,
  const double *x,
  const int inc_x,
  const double *y,
  const int inc_y
);

NAN_METHOD(sdot);
extern "C" float cblas_sdot(
  const int n,
  const float *x,
  const int inc_x,
  const float *y,
  const int inc_y
);

#endif
