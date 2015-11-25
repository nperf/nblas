#include "sscal.h"

using v8::Float32Array;
using v8::Number;
using Nan::New;

NAN_METHOD(sscal) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[3]->Uint32Value();
  float alpha = info[1]->NumberValue();

  assert(info[2]->IsFloat32Array());

  void *x_data = info[2].As<Float32Array>()->Buffer()->GetContents().Data();
  float *x = reinterpret_cast<float*>(x_data);

  cblas_sscal(n, alpha, x, inc_x);
}
