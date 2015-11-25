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

  void *a_data = info[1].As<Float32Array>()->Buffer()->GetContents().Data(),
       *b_data = info[3].As<Float32Array>()->Buffer()->GetContents().Data();

  float *a = reinterpret_cast<float*>(a_data),
        *b = reinterpret_cast<float*>(b_data);

  info.GetReturnValue().Set(
    New<Number>(cblas_sdot(n, a, inc_x, b, inc_y))
  );
}
