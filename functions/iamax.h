#ifndef IAMAX_H
#define IAMAX_H

#include <nan.h>

NAN_METHOD(idamax);
extern "C" int cblas_idamax (
  const int n,
  const double *x,
  const int inc_x
);

NAN_METHOD(isamax);
extern "C" int cblas_isamax (
  const int n,
  const float *x,
  const int inc_x
);

#endif
