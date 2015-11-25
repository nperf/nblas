#include "daxpy.h"

using v8::Float64Array;
using v8::Number;
using Nan::New;

NAN_METHOD(daxpy) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[3]->Uint32Value(),
               inc_y = info[5]->Uint32Value();
  double alpha = info[1]->NumberValue();

  assert(info[2]->IsFloat64Array());
  assert(info[4]->IsFloat64Array());

  void *a_data = info[2].As<Float64Array>()->Buffer()->GetContents().Data(),
       *b_data = info[4].As<Float64Array>()->Buffer()->GetContents().Data();

  double *a = reinterpret_cast<double*>(a_data),
         *b = reinterpret_cast<double*>(b_data);

  cblas_daxpy(n, alpha, a, inc_x, b, inc_y);
}
