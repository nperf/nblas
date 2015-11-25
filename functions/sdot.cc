#include "sdot.h"

using v8::Float32Array;
using v8::Number;
using Nan::New;

NAN_METHOD(sdot) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[2]->Uint32Value(),
               inc_y = info[4]->Uint32Value();

  assert(info[1]->IsFloat32Array());
  assert(info[3]->IsFloat32Array());

  void *x_data = info[1].As<Float32Array>()->Buffer()->GetContents().Data(),
       *y_data = info[3].As<Float32Array>()->Buffer()->GetContents().Data();

  float *x = reinterpret_cast<float*>(x_data),
        *y = reinterpret_cast<float*>(y_data);

  info.GetReturnValue().Set(
    New<Number>(cblas_sdot(n, x, inc_x, y, inc_y))
  );
}
