#include "cblas.h"
#include "routines.h"

void dtrmm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[2].As<v8::Integer>()->Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[3].As<v8::Integer>()->Value());
	const int m = info[4].As<v8::Integer>()->Value();
	const int n = info[5].As<v8::Integer>()->Value();
	const double alpha = info[6].As<v8::Number>()->Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int lda = info[8].As<v8::Integer>()->Value();
	double *b = reinterpret_cast<double*>(GET_CONTENTS(info[9].As<v8::Float64Array>()));
	const int ldb = info[10].As<v8::Integer>()->Value();
	cblas_dtrmm(CblasRowMajor, side, uplo, transa, diag, m, n, alpha, a, lda, b, ldb);
}

void strmm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[2].As<v8::Integer>()->Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[3].As<v8::Integer>()->Value());
	const int m = info[4].As<v8::Integer>()->Value();
	const int n = info[5].As<v8::Integer>()->Value();
	const float alpha = info[6].As<v8::Number>()->Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int lda = info[8].As<v8::Integer>()->Value();
	float *b = reinterpret_cast<float*>(GET_CONTENTS(info[9].As<v8::Float32Array>()));
	const int ldb = info[10].As<v8::Integer>()->Value();
	cblas_strmm(CblasRowMajor, side, uplo, transa, diag, m, n, alpha, a, lda, b, ldb);
}

void ztrmm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[2].As<v8::Integer>()->Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[3].As<v8::Integer>()->Value());
	const int m = info[4].As<v8::Integer>()->Value();
	const int n = info[5].As<v8::Integer>()->Value();
	const double *alpha = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int lda = info[8].As<v8::Integer>()->Value();
	double *b = reinterpret_cast<double*>(GET_CONTENTS(info[9].As<v8::Float64Array>()));
	const int ldb = info[10].As<v8::Integer>()->Value();
	cblas_ztrmm(CblasRowMajor, side, uplo, transa, diag, m, n, alpha, a, lda, b, ldb);
}

void ctrmm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[2].As<v8::Integer>()->Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[3].As<v8::Integer>()->Value());
	const int m = info[4].As<v8::Integer>()->Value();
	const int n = info[5].As<v8::Integer>()->Value();
	const float *alpha = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int lda = info[8].As<v8::Integer>()->Value();
	float *b = reinterpret_cast<float*>(GET_CONTENTS(info[9].As<v8::Float32Array>()));
	const int ldb = info[10].As<v8::Integer>()->Value();
	cblas_ctrmm(CblasRowMajor, side, uplo, transa, diag, m, n, alpha, a, lda, b, ldb);
}
