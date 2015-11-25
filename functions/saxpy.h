#ifndef SAXPY_H
#define SAXPY_H

#include <nan.h>

NAN_METHOD(saxpy);
extern "C" void cblas_saxpy (
  const int n,
  const float alpha,
  const float *x,
  const int inc_x,
  const float *y,
  const int inc_y
);

#endif
