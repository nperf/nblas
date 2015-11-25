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

  void *x_data = info[2].As<Float64Array>()->Buffer()->GetContents().Data(),
       *y_data = info[4].As<Float64Array>()->Buffer()->GetContents().Data();

  double *x = reinterpret_cast<double*>(x_data),
         *y = reinterpret_cast<double*>(y_data);

  cblas_daxpy(n, alpha, x, inc_x, y, inc_y);
}
