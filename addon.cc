#include "addon.h"

using v8::String;
using v8::FunctionTemplate;

using Nan::GetFunction;
using Nan::New;
using Nan::Set;

NAN_MODULE_INIT(init) {
  Set(target, New<String>("sdot").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(sdot)).ToLocalChecked());
  Set(target, New<String>("ddot").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(ddot)).ToLocalChecked());

  Set(target, New<String>("daxpy").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(daxpy)).ToLocalChecked());
  Set(target, New<String>("saxpy").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(saxpy)).ToLocalChecked());

  Set(target, New<String>("dscal").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(dscal)).ToLocalChecked());
  Set(target, New<String>("sscal").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(sscal)).ToLocalChecked());

  Set(target, New<String>("dcopy").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(dcopy)).ToLocalChecked());
  Set(target, New<String>("scopy").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(scopy)).ToLocalChecked());

  Set(target, New<String>("dswap").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(dswap)).ToLocalChecked());
  Set(target, New<String>("sswap").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(sswap)).ToLocalChecked());
}

NODE_MODULE(addon, init)
