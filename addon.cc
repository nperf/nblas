#include "addon.h"
#include "functions/sdot.h"
#include "functions/ddot.h"
#include "functions/daxpy.h"
#include "functions/saxpy.h"

using v8::String;
using v8::FunctionTemplate;

using Nan::GetFunction;
using Nan::New;
using Nan::Set;

NAN_MODULE_INIT(init) {
  Set(target,
    New<String>("sdot").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(sdot)).ToLocalChecked()
  );
  Set(target,
    New<String>("ddot").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(ddot)).ToLocalChecked()
  );
  Set(target,
    New<String>("daxpy").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(daxpy)).ToLocalChecked()
  );
  Set(target,
    New<String>("saxpy").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(saxpy)).ToLocalChecked()
  );
}

NODE_MODULE(addon, init)
