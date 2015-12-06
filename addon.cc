#include "addon.h"

using v8::String;
using v8::FunctionTemplate;

using Nan::GetFunction;
using Nan::New;
using Nan::Set;

NAN_MODULE_INIT(init) {
  Set(target, New<String>("dasum").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dasum)).ToLocalChecked());
  Set(target, New<String>("sasum").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sasum)).ToLocalChecked());
  Set(target, New<String>("daxpy").ToLocalChecked(), GetFunction(New<FunctionTemplate>(daxpy)).ToLocalChecked());
  Set(target, New<String>("saxpy").ToLocalChecked(), GetFunction(New<FunctionTemplate>(saxpy)).ToLocalChecked());
  Set(target, New<String>("dcopy").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dcopy)).ToLocalChecked());
  Set(target, New<String>("scopy").ToLocalChecked(), GetFunction(New<FunctionTemplate>(scopy)).ToLocalChecked());
  Set(target, New<String>("ddot").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ddot)).ToLocalChecked());
  Set(target, New<String>("sdot").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sdot)).ToLocalChecked());
  Set(target, New<String>("dsdot").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsdot)).ToLocalChecked());
  Set(target, New<String>("sdsdot").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sdsdot)).ToLocalChecked());
  Set(target, New<String>("dnrm2").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dnrm2)).ToLocalChecked());
  Set(target, New<String>("snrm2").ToLocalChecked(), GetFunction(New<FunctionTemplate>(snrm2)).ToLocalChecked());
  Set(target, New<String>("drot").ToLocalChecked(), GetFunction(New<FunctionTemplate>(drot)).ToLocalChecked());
  Set(target, New<String>("srot").ToLocalChecked(), GetFunction(New<FunctionTemplate>(srot)).ToLocalChecked());
  Set(target, New<String>("drotg").ToLocalChecked(), GetFunction(New<FunctionTemplate>(drotg)).ToLocalChecked());
  Set(target, New<String>("srotg").ToLocalChecked(), GetFunction(New<FunctionTemplate>(srotg)).ToLocalChecked());
  Set(target, New<String>("drotm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(drotm)).ToLocalChecked());
  Set(target, New<String>("srotm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(srotm)).ToLocalChecked());
  Set(target, New<String>("drotmg").ToLocalChecked(), GetFunction(New<FunctionTemplate>(drotmg)).ToLocalChecked());
  Set(target, New<String>("srotmg").ToLocalChecked(), GetFunction(New<FunctionTemplate>(srotmg)).ToLocalChecked());
  Set(target, New<String>("dscal").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dscal)).ToLocalChecked());
  Set(target, New<String>("sscal").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sscal)).ToLocalChecked());
  Set(target, New<String>("dswap").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dswap)).ToLocalChecked());
  Set(target, New<String>("sswap").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sswap)).ToLocalChecked());
  Set(target, New<String>("idamax").ToLocalChecked(), GetFunction(New<FunctionTemplate>(idamax)).ToLocalChecked());
  Set(target, New<String>("isamax").ToLocalChecked(), GetFunction(New<FunctionTemplate>(isamax)).ToLocalChecked());

  Set(target, New<String>("dgbmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dgbmv)).ToLocalChecked());
  Set(target, New<String>("sgbmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sgbmv)).ToLocalChecked());
  Set(target, New<String>("dgemv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dgemv)).ToLocalChecked());
  Set(target, New<String>("sgemv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sgemv)).ToLocalChecked());
  Set(target, New<String>("dger").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dger)).ToLocalChecked());
  Set(target, New<String>("sger").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sger)).ToLocalChecked());
  Set(target, New<String>("dsbmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsbmv)).ToLocalChecked());
  Set(target, New<String>("ssbmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssbmv)).ToLocalChecked());
  Set(target, New<String>("dspmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dspmv)).ToLocalChecked());
  Set(target, New<String>("sspmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sspmv)).ToLocalChecked());
  Set(target, New<String>("dspr").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dspr)).ToLocalChecked());
  Set(target, New<String>("sspr").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sspr)).ToLocalChecked());
  Set(target, New<String>("dspr2").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dspr2)).ToLocalChecked());
  Set(target, New<String>("sspr2").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sspr2)).ToLocalChecked());
  Set(target, New<String>("dsymv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsymv)).ToLocalChecked());
  Set(target, New<String>("ssymv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssymv)).ToLocalChecked());
  Set(target, New<String>("dsyr").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsyr)).ToLocalChecked());
  Set(target, New<String>("ssyr").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssyr)).ToLocalChecked());
  Set(target, New<String>("dsyr2").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsyr2)).ToLocalChecked());
  Set(target, New<String>("ssyr2").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssyr2)).ToLocalChecked());
  Set(target, New<String>("dtbmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dtbmv)).ToLocalChecked());
  Set(target, New<String>("stbmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(stbmv)).ToLocalChecked());
  Set(target, New<String>("dtbsv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dtbsv)).ToLocalChecked());
  Set(target, New<String>("stbsv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(stbsv)).ToLocalChecked());
  Set(target, New<String>("dtpmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dtpmv)).ToLocalChecked());
  Set(target, New<String>("stpmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(stpmv)).ToLocalChecked());
  Set(target, New<String>("dtpsv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dtpsv)).ToLocalChecked());
  Set(target, New<String>("stpsv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(stpsv)).ToLocalChecked());
  Set(target, New<String>("dtrmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dtrmv)).ToLocalChecked());
  Set(target, New<String>("strmv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(strmv)).ToLocalChecked());
  Set(target, New<String>("dtrsv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dtrsv)).ToLocalChecked());
  Set(target, New<String>("strsv").ToLocalChecked(), GetFunction(New<FunctionTemplate>(strsv)).ToLocalChecked());

  Set(target, New<String>("dgemm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dgemm)).ToLocalChecked());
  Set(target, New<String>("sgemm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(sgemm)).ToLocalChecked());
  Set(target, New<String>("dsymm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsymm)).ToLocalChecked());
  Set(target, New<String>("ssymm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssymm)).ToLocalChecked());
  Set(target, New<String>("dsyrk").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsyrk)).ToLocalChecked());
  Set(target, New<String>("ssyrk").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssyrk)).ToLocalChecked());
  Set(target, New<String>("dsyr2k").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dsyr2k)).ToLocalChecked());
  Set(target, New<String>("ssyr2k").ToLocalChecked(), GetFunction(New<FunctionTemplate>(ssyr2k)).ToLocalChecked());
  Set(target, New<String>("dtrmm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dtrmm)).ToLocalChecked());
  Set(target, New<String>("strmm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(strmm)).ToLocalChecked());
  Set(target, New<String>("dtrsm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(dtrsm)).ToLocalChecked());
  Set(target, New<String>("strsm").ToLocalChecked(), GetFunction(New<FunctionTemplate>(strsm)).ToLocalChecked());
}

NODE_MODULE(addon, init)
