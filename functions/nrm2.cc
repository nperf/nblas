#include "nrm2.h"

using v8::Float64Array;
using v8::Float32Array;
using v8::Number;
using Nan::New;

NAN_METHOD(dnrm2) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[2]->Uint32Value();

  assert(info[1]->IsFloat64Array());

  void *x_data = info[1].As<Float64Array>()->Buffer()->GetContents().Data();
  double *x = reinterpret_cast<double*>(x_data);

  info.GetReturnValue().Set(
    New<Number>(cblas_dnrm2(n, x, inc_x))
  );
}

NAN_METHOD(snrm2) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[2]->Uint32Value();

  assert(info[1]->IsFloat32Array());

  void *x_data = info[1].As<Float32Array>()->Buffer()->GetContents().Data();
  float *x = reinterpret_cast<float*>(x_data);

  info.GetReturnValue().Set(
    New<Number>(cblas_snrm2(n, x, inc_x))
  );
}
