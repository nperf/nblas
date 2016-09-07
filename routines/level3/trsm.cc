#include "cblas.h"
#include "routines.h"

void dtrsm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0]->Uint32Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1]->Uint32Value());
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[2]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[3]->Uint32Value());
	const int m = info[4]->Uint32Value();
	const int n = info[5]->Uint32Value();
	const double alpha = info[6]->NumberValue();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int lda = info[8]->Uint32Value();
	double *b = reinterpret_cast<double*>(GET_CONTENTS(info[9].As<v8::Float64Array>()));
	const int ldb = info[10]->Uint32Value();
	cblas_dtrsm(CblasRowMajor, side, uplo, transa, diag, m, n, alpha, a, lda, b, ldb);
}

void strsm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0]->Uint32Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1]->Uint32Value());
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[2]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[3]->Uint32Value());
	const int m = info[4]->Uint32Value();
	const int n = info[5]->Uint32Value();
	const float alpha = info[6]->NumberValue();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int lda = info[8]->Uint32Value();
	float *b = reinterpret_cast<float*>(GET_CONTENTS(info[9].As<v8::Float32Array>()));
	const int ldb = info[10]->Uint32Value();
	cblas_strsm(CblasRowMajor, side, uplo, transa, diag, m, n, alpha, a, lda, b, ldb);
}
