#include "addon.h"

using v8::String;
using v8::FunctionTemplate;

using Nan::GetFunction;
using Nan::New;
using Nan::Set;

NAN_MODULE_INIT(init) {
  // LAPACK Matrix Factorization Routines
  Set(target, New<String>("dgetrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dgetrf)).ToLocalChecked());
  Set(target, New<String>("sgetrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sgetrf)).ToLocalChecked());
  Set(target, New<String>("dgbtrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dgbtrf)).ToLocalChecked());
  Set(target, New<String>("sgbtrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sgbtrf)).ToLocalChecked());
  Set(target, New<String>("dgttrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dgttrf)).ToLocalChecked());
  Set(target, New<String>("sgttrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sgttrf)).ToLocalChecked());
  Set(target, New<String>("ddttrfb").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ddttrfb)).ToLocalChecked());
  Set(target, New<String>("sdttrfb").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sdttrfb)).ToLocalChecked());
  Set(target, New<String>("dpotrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dpotrf)).ToLocalChecked());
  Set(target, New<String>("spotrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(spotrf)).ToLocalChecked());
  Set(target, New<String>("dpstrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dpstrf)).ToLocalChecked());
  Set(target, New<String>("spstrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(spstrf)).ToLocalChecked());
  Set(target, New<String>("dpftrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dpftrf)).ToLocalChecked());
  Set(target, New<String>("spftrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(spftrf)).ToLocalChecked());
  Set(target, New<String>("dpptrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dpptrf)).ToLocalChecked());
  Set(target, New<String>("spptrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(spptrf)).ToLocalChecked());
  Set(target, New<String>("dpbtrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dpbtrf)).ToLocalChecked());
  Set(target, New<String>("spbtrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(spbtrf)).ToLocalChecked());
  Set(target, New<String>("dpttrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dpttrf)).ToLocalChecked());
  Set(target, New<String>("spttrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(spttrf)).ToLocalChecked());
  Set(target, New<String>("dsytrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsytrf)).ToLocalChecked());
  Set(target, New<String>("ssytrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssytrf)).ToLocalChecked());
  Set(target, New<String>("dsptrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsptrf)).ToLocalChecked());
  Set(target, New<String>("ssptrf").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssptrf)).ToLocalChecked());
}

NODE_MODULE(addon, init)
