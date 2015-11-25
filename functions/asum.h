#ifndef ASUM_H
#define ASUM_H

#include <nan.h>

NAN_METHOD(dasum);
extern "C" double cblas_dasum (
  const int n,
  const double *x,
  const int inc_x
);

NAN_METHOD(sasum);
extern "C" float cblas_sasum (
  const int n,
  const float *x,
  const int inc_x
);

#endif
