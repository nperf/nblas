#include "swap.h"

using v8::Float64Array;
using v8::Float32Array;
using v8::Number;
using Nan::New;

NAN_METHOD(dswap) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[2]->Uint32Value(),
               inc_y = info[4]->Uint32Value();

  assert(info[1]->IsFloat64Array());
  assert(info[3]->IsFloat64Array());

  void *x_data = info[1].As<Float64Array>()->Buffer()->GetContents().Data(),
       *y_data = info[3].As<Float64Array>()->Buffer()->GetContents().Data();

  double *x = reinterpret_cast<double*>(x_data),
         *y = reinterpret_cast<double*>(y_data);

  cblas_dswap(n, x, inc_x, y, inc_y);
}

NAN_METHOD(sswap) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[2]->Uint32Value(),
               inc_y = info[4]->Uint32Value();

  assert(info[1]->IsFloat32Array());
  assert(info[3]->IsFloat32Array());

  void *x_data = info[1].As<Float32Array>()->Buffer()->GetContents().Data(),
       *y_data = info[3].As<Float32Array>()->Buffer()->GetContents().Data();

  float *x = reinterpret_cast<float*>(x_data),
        *y = reinterpret_cast<float*>(y_data);

  cblas_sswap(n, x, inc_x, y, inc_y);
}
