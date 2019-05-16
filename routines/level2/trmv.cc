#include "cblas.h"
#include "routines.h"

void dtrmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1].As<v8::Integer>()->Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2].As<v8::Integer>()->Value());
	const int n = info[3].As<v8::Integer>()->Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int lda = info[5].As<v8::Integer>()->Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int inc_x = info[7].As<v8::Integer>()->Value();
	cblas_dtrmv(CblasRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void strmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1].As<v8::Integer>()->Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2].As<v8::Integer>()->Value());
	const int n = info[3].As<v8::Integer>()->Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int lda = info[5].As<v8::Integer>()->Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int inc_x = info[7].As<v8::Integer>()->Value();
	cblas_strmv(CblasRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void ztrmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1].As<v8::Integer>()->Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2].As<v8::Integer>()->Value());
	const int n = info[3].As<v8::Integer>()->Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int lda = info[5].As<v8::Integer>()->Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int inc_x = info[7].As<v8::Integer>()->Value();
	cblas_ztrmv(CblasRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

void ctrmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1].As<v8::Integer>()->Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2].As<v8::Integer>()->Value());
	const int n = info[3].As<v8::Integer>()->Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int lda = info[5].As<v8::Integer>()->Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int inc_x = info[7].As<v8::Integer>()->Value();
	cblas_ctrmv(CblasRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}
