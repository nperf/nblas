#include "cblas.h"
#include "routines.h"

void dtpmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const double *ap = reinterpret_cast<double*>(info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	double *x = reinterpret_cast<double*>(info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[6]->Uint32Value();
	cblas_dtpmv(CblasRowMajor, uplo, trans, diag, n, ap, x, inc_x);
}

void stpmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const float *ap = reinterpret_cast<float*>(info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	float *x = reinterpret_cast<float*>(info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[6]->Uint32Value();
	cblas_stpmv(CblasRowMajor, uplo, trans, diag, n, ap, x, inc_x);
}
