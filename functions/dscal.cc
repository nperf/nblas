#include "dscal.h"

using v8::Float64Array;
using v8::Number;
using Nan::New;

NAN_METHOD(dscal) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[3]->Uint32Value();
  double alpha = info[1]->NumberValue();

  assert(info[2]->IsFloat64Array());

  void *x_data = info[2].As<Float64Array>()->Buffer()->GetContents().Data();
  double *x = reinterpret_cast<double*>(x_data);

  cblas_dscal(n, alpha, x, inc_x);
}
