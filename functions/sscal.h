#ifndef SSCAL_H
#define SSCAL_H

#include <nan.h>

NAN_METHOD(sscal);
extern "C" void cblas_sscal (
  const int n,
  const float alpha,
  const float *x,
  const int inc_x
);

#endif
