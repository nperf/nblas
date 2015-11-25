#include "saxpy.h"

using v8::Float32Array;
using v8::Number;
using Nan::New;

NAN_METHOD(saxpy) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[3]->Uint32Value(),
               inc_y = info[5]->Uint32Value();
  float alpha = info[1]->NumberValue();

  assert(info[2]->IsFloat32Array());
  assert(info[4]->IsFloat32Array());

  void *x_data = info[2].As<Float32Array>()->Buffer()->GetContents().Data(),
       *y_data = info[4].As<Float32Array>()->Buffer()->GetContents().Data();

  float *x = reinterpret_cast<float*>(x_data),
        *y = reinterpret_cast<float*>(y_data);

  cblas_saxpy(n, alpha, x, inc_x, y, inc_y);
}
