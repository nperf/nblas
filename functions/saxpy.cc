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

  void *a_data = info[2].As<Float32Array>()->Buffer()->GetContents().Data(),
       *b_data = info[4].As<Float32Array>()->Buffer()->GetContents().Data();

  float *a = reinterpret_cast<float*>(a_data),
        *b = reinterpret_cast<float*>(b_data);

  cblas_saxpy(n, alpha, a, inc_x, b, inc_y);
}
