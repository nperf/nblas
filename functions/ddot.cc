#include "ddot.h"

using v8::Float64Array;
using v8::Number;
using Nan::New;

NAN_METHOD(ddot) {
  unsigned int n = info[0]->Uint32Value(),
               inc_x = info[2]->Uint32Value(),
               inc_y = info[4]->Uint32Value();

  assert(info[1]->IsFloat64Array());
  assert(info[3]->IsFloat64Array());

  void *x_data = info[1].As<Float64Array>()->Buffer()->GetContents().Data(),
       *y_data = info[3].As<Float64Array>()->Buffer()->GetContents().Data();

  double *x = reinterpret_cast<double*>(x_data),
         *y = reinterpret_cast<double*>(y_data);

  info.GetReturnValue().Set(
    New<Number>(cblas_ddot(n, x, inc_x, y, inc_y))
  );
}
