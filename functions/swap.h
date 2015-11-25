#ifndef SWAP_H
#define SWAP_H

#include <nan.h>

NAN_METHOD(dswap);
extern "C" void cblas_dswap (
  const int n,
  const double *x,
  const int inc_x,
  const double *y,
  const int inc_y
);

NAN_METHOD(sswap);
extern "C" void cblas_sswap (
  const int n,
  const float *x,
  const int inc_x,
  const float *y,
  const int inc_y
);

#endif
