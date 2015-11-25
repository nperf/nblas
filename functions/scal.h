#ifndef SCAL_H
#define SCAL_H

#include <nan.h>

NAN_METHOD(dscal);
extern "C" void cblas_dscal (
  const int n,
  const double alpha,
  const double *x,
  const int inc_x
);

NAN_METHOD(sscal);
extern "C" void cblas_sscal (
  const int n,
  const float alpha,
  const float *x,
  const int inc_x
);

#endif
