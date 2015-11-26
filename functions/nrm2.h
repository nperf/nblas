#ifndef NRM2_H
#define NRM2_H

#include <nan.h>

NAN_METHOD(dnrm2);
extern "C" double cblas_dnrm2 (
  const int n,
  const double *x,
  const int inc_x
);

NAN_METHOD(snrm2);
extern "C" float cblas_snrm2 (
  const int n,
  const float *x,
  const int inc_x
);

#endif
