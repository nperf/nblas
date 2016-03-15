#include <node.h>
#include "routines.h"

void Init(v8::Local<v8::Object> exports) {
  NODE_SET_METHOD(exports, "dasum", dasum);
  NODE_SET_METHOD(exports, "sasum", sasum);
  NODE_SET_METHOD(exports, "daxpy", daxpy);
  NODE_SET_METHOD(exports, "saxpy", saxpy);
  NODE_SET_METHOD(exports, "dcopy", dcopy);
  NODE_SET_METHOD(exports, "scopy", scopy);
  NODE_SET_METHOD(exports, "ddot", ddot);
  NODE_SET_METHOD(exports, "sdot", sdot);
  NODE_SET_METHOD(exports, "dsdot", dsdot);
  NODE_SET_METHOD(exports, "sdsdot", sdsdot);
  NODE_SET_METHOD(exports, "dnrm2", dnrm2);
  NODE_SET_METHOD(exports, "snrm2", snrm2);
  NODE_SET_METHOD(exports, "drot", drot);
  NODE_SET_METHOD(exports, "srot", srot);
  NODE_SET_METHOD(exports, "drotg", drotg);
  NODE_SET_METHOD(exports, "srotg", srotg);
  NODE_SET_METHOD(exports, "drotm", drotm);
  NODE_SET_METHOD(exports, "srotm", srotm);
  NODE_SET_METHOD(exports, "drotmg", drotmg);
  NODE_SET_METHOD(exports, "srotmg", srotmg);
  NODE_SET_METHOD(exports, "dscal", dscal);
  NODE_SET_METHOD(exports, "sscal", sscal);
  NODE_SET_METHOD(exports, "dswap", dswap);
  NODE_SET_METHOD(exports, "sswap", sswap);
  NODE_SET_METHOD(exports, "idamax", idamax);
  NODE_SET_METHOD(exports, "isamax", isamax);

  NODE_SET_METHOD(exports, "dgbmv", dgbmv);
  NODE_SET_METHOD(exports, "sgbmv", sgbmv);
  NODE_SET_METHOD(exports, "dgemv", dgemv);
  NODE_SET_METHOD(exports, "sgemv", sgemv);
  NODE_SET_METHOD(exports, "dger", dger);
  NODE_SET_METHOD(exports, "sger", sger);
  NODE_SET_METHOD(exports, "dsbmv", dsbmv);
  NODE_SET_METHOD(exports, "ssbmv", ssbmv);
  NODE_SET_METHOD(exports, "dspmv", dspmv);
  NODE_SET_METHOD(exports, "sspmv", sspmv);
  NODE_SET_METHOD(exports, "dspr", dspr);
  NODE_SET_METHOD(exports, "sspr", sspr);
  NODE_SET_METHOD(exports, "dspr2", dspr2);
  NODE_SET_METHOD(exports, "sspr2", sspr2);
  NODE_SET_METHOD(exports, "dsymv", dsymv);
  NODE_SET_METHOD(exports, "ssymv", ssymv);
  NODE_SET_METHOD(exports, "dsyr", dsyr);
  NODE_SET_METHOD(exports, "ssyr", ssyr);
  NODE_SET_METHOD(exports, "dsyr2", dsyr2);
  NODE_SET_METHOD(exports, "ssyr2", ssyr2);
  NODE_SET_METHOD(exports, "dtbmv", dtbmv);
  NODE_SET_METHOD(exports, "stbmv", stbmv);
  NODE_SET_METHOD(exports, "dtbsv", dtbsv);
  NODE_SET_METHOD(exports, "stbsv", stbsv);
  NODE_SET_METHOD(exports, "dtpmv", dtpmv);
  NODE_SET_METHOD(exports, "stpmv", stpmv);
  NODE_SET_METHOD(exports, "dtpsv", dtpsv);
  NODE_SET_METHOD(exports, "stpsv", stpsv);
  NODE_SET_METHOD(exports, "dtrmv", dtrmv);
  NODE_SET_METHOD(exports, "strmv", strmv);
  NODE_SET_METHOD(exports, "dtrsv", dtrsv);
  NODE_SET_METHOD(exports, "strsv", strsv);

  NODE_SET_METHOD(exports, "dgemm", dgemm);
  NODE_SET_METHOD(exports, "sgemm", sgemm);
  NODE_SET_METHOD(exports, "dsymm", dsymm);
  NODE_SET_METHOD(exports, "ssymm", ssymm);
  NODE_SET_METHOD(exports, "dsyrk", dsyrk);
  NODE_SET_METHOD(exports, "ssyrk", ssyrk);
  NODE_SET_METHOD(exports, "dsyr2k", dsyr2k);
  NODE_SET_METHOD(exports, "ssyr2k", ssyr2k);
  NODE_SET_METHOD(exports, "dtrmm", dtrmm);
  NODE_SET_METHOD(exports, "strmm", strmm);
  NODE_SET_METHOD(exports, "dtrsm", dtrsm);
  NODE_SET_METHOD(exports, "strsm", strsm);
}

NODE_MODULE(addon, Init)
