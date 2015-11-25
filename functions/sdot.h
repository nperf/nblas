#ifndef SDOT_H
#define SDOT_H

#include <nan.h>

NAN_METHOD(sdot);
extern "C" float cblas_sdot(
  const int n,
  const float *x,
  const int inc_x,
  const float *y,
  const int inc_y
);

#endif
