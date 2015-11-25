#ifndef DSCAL_H
#define DSCAL_H

#include <nan.h>

NAN_METHOD(dscal);
extern "C" void cblas_dscal (
  const int n,
  const double alpha,
  const double *x,
  const int inc_x
);

#endif
