#include "addon.h"

using Nan::GetFunction;
using Nan::New;
using Nan::Set;

using std::vector;

NAN_METHOD(ddot) {
  unsigned int n = info[0]->Uint32Value();
  void *a_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();
  void *b_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
  double *a = reinterpret_cast<double*>(a_data);
  double *b = reinterpret_cast<double*>(b_data);
  double res = cblas_ddot(n, a, 1, b, 1);

  info.GetReturnValue().Set(New<v8::Number>(res));
}

NAN_MODULE_INIT(init) {
  Set(target,
    New<v8::String>("ddot").ToLocalChecked(),
    GetFunction(New<v8::FunctionTemplate>(ddot)).ToLocalChecked()
  );
}

NODE_MODULE(addon, init)
