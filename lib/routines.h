#ifndef ROUTINES_H
#define ROUTINES_H

#include <node.h>

#if V8_MAJOR_VERSION < 8
  #define GET_CONTENTS(view) \
  (static_cast<unsigned char*>(view->Buffer()->GetContents().Data()) + view->ByteOffset())
#else
  #define GET_CONTENTS(view) \
  (static_cast<unsigned char*>(view->Buffer()->GetBackingStore()->Data()) + view->ByteOffset())
#endif

void dasum(const v8::FunctionCallbackInfo<v8::Value>& info);
void sasum(const v8::FunctionCallbackInfo<v8::Value>& info);
void dzasum(const v8::FunctionCallbackInfo<v8::Value>& info);
void scasum(const v8::FunctionCallbackInfo<v8::Value>& info);
void daxpy(const v8::FunctionCallbackInfo<v8::Value>& info);
void saxpy(const v8::FunctionCallbackInfo<v8::Value>& info);
void zaxpy(const v8::FunctionCallbackInfo<v8::Value>& info);
void caxpy(const v8::FunctionCallbackInfo<v8::Value>& info);
void dcopy(const v8::FunctionCallbackInfo<v8::Value>& info);
void scopy(const v8::FunctionCallbackInfo<v8::Value>& info);
void zcopy(const v8::FunctionCallbackInfo<v8::Value>& info);
void ccopy(const v8::FunctionCallbackInfo<v8::Value>& info);
void ddot(const v8::FunctionCallbackInfo<v8::Value>& info);
void sdot(const v8::FunctionCallbackInfo<v8::Value>& info);
void dsdot(const v8::FunctionCallbackInfo<v8::Value>& info);
void sdsdot(const v8::FunctionCallbackInfo<v8::Value>& info);
void dnrm2(const v8::FunctionCallbackInfo<v8::Value>& info);
void snrm2(const v8::FunctionCallbackInfo<v8::Value>& info);
void dznrm2(const v8::FunctionCallbackInfo<v8::Value>& info);
void scnrm2(const v8::FunctionCallbackInfo<v8::Value>& info);
void drot(const v8::FunctionCallbackInfo<v8::Value>& info);
void srot(const v8::FunctionCallbackInfo<v8::Value>& info);
void drotg(const v8::FunctionCallbackInfo<v8::Value>& info);
void srotg(const v8::FunctionCallbackInfo<v8::Value>& info);
void drotm(const v8::FunctionCallbackInfo<v8::Value>& info);
void srotm(const v8::FunctionCallbackInfo<v8::Value>& info);
void drotmg(const v8::FunctionCallbackInfo<v8::Value>& info);
void srotmg(const v8::FunctionCallbackInfo<v8::Value>& info);
void dscal(const v8::FunctionCallbackInfo<v8::Value>& info);
void sscal(const v8::FunctionCallbackInfo<v8::Value>& info);
void zscal(const v8::FunctionCallbackInfo<v8::Value>& info);
void cscal(const v8::FunctionCallbackInfo<v8::Value>& info);
void dswap(const v8::FunctionCallbackInfo<v8::Value>& info);
void sswap(const v8::FunctionCallbackInfo<v8::Value>& info);
void zswap(const v8::FunctionCallbackInfo<v8::Value>& info);
void cswap(const v8::FunctionCallbackInfo<v8::Value>& info);
void idamax(const v8::FunctionCallbackInfo<v8::Value>& info);
void isamax(const v8::FunctionCallbackInfo<v8::Value>& info);
void izamax(const v8::FunctionCallbackInfo<v8::Value>& info);
void icamax(const v8::FunctionCallbackInfo<v8::Value>& info);

void dgbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void sgbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void zgbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void cgbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dgemv(const v8::FunctionCallbackInfo<v8::Value>& info);
void sgemv(const v8::FunctionCallbackInfo<v8::Value>& info);
void zgemv(const v8::FunctionCallbackInfo<v8::Value>& info);
void cgemv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dger(const v8::FunctionCallbackInfo<v8::Value>& info);
void sger(const v8::FunctionCallbackInfo<v8::Value>& info);
void dsbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ssbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dspmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void sspmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dspr(const v8::FunctionCallbackInfo<v8::Value>& info);
void sspr(const v8::FunctionCallbackInfo<v8::Value>& info);
void dspr2(const v8::FunctionCallbackInfo<v8::Value>& info);
void sspr2(const v8::FunctionCallbackInfo<v8::Value>& info);
void dsymv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ssymv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dsyr(const v8::FunctionCallbackInfo<v8::Value>& info);
void ssyr(const v8::FunctionCallbackInfo<v8::Value>& info);
void dsyr2(const v8::FunctionCallbackInfo<v8::Value>& info);
void ssyr2(const v8::FunctionCallbackInfo<v8::Value>& info);
void dtbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void stbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ztbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ctbmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dtbsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void stbsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ztbsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ctbsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dtpmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void stpmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ztpmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ctpmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dtpsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void stpsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ztpsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ctpsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dtrmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void strmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ztrmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ctrmv(const v8::FunctionCallbackInfo<v8::Value>& info);
void dtrsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void strsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ztrsv(const v8::FunctionCallbackInfo<v8::Value>& info);
void ctrsv(const v8::FunctionCallbackInfo<v8::Value>& info);

void dgemm(const v8::FunctionCallbackInfo<v8::Value>& info);
void sgemm(const v8::FunctionCallbackInfo<v8::Value>& info);
void zgemm(const v8::FunctionCallbackInfo<v8::Value>& info);
void cgemm(const v8::FunctionCallbackInfo<v8::Value>& info);
void dsymm(const v8::FunctionCallbackInfo<v8::Value>& info);
void ssymm(const v8::FunctionCallbackInfo<v8::Value>& info);
void zsymm(const v8::FunctionCallbackInfo<v8::Value>& info);
void csymm(const v8::FunctionCallbackInfo<v8::Value>& info);
void dsyrk(const v8::FunctionCallbackInfo<v8::Value>& info);
void ssyrk(const v8::FunctionCallbackInfo<v8::Value>& info);
void zsyrk(const v8::FunctionCallbackInfo<v8::Value>& info);
void csyrk(const v8::FunctionCallbackInfo<v8::Value>& info);
void dsyr2k(const v8::FunctionCallbackInfo<v8::Value>& info);
void ssyr2k(const v8::FunctionCallbackInfo<v8::Value>& info);
void zsyr2k(const v8::FunctionCallbackInfo<v8::Value>& info);
void csyr2k(const v8::FunctionCallbackInfo<v8::Value>& info);
void dtrmm(const v8::FunctionCallbackInfo<v8::Value>& info);
void strmm(const v8::FunctionCallbackInfo<v8::Value>& info);
void ztrmm(const v8::FunctionCallbackInfo<v8::Value>& info);
void ctrmm(const v8::FunctionCallbackInfo<v8::Value>& info);
void dtrsm(const v8::FunctionCallbackInfo<v8::Value>& info);
void strsm(const v8::FunctionCallbackInfo<v8::Value>& info);
void ztrsm(const v8::FunctionCallbackInfo<v8::Value>& info);
void ctrsm(const v8::FunctionCallbackInfo<v8::Value>& info);

#endif
