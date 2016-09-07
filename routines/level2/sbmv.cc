#include "cblas.h"
#include "routines.h"

void dsbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const int k = info[2]->Uint32Value();
	const double alpha = info[3]->NumberValue();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int lda = info[5]->Uint32Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int inc_x = info[7]->Uint32Value();
	const double beta = info[8]->NumberValue();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[9].As<v8::Float64Array>()));
	const int inc_y = info[10]->Uint32Value();
	cblas_dsbmv(CblasRowMajor, uplo, n, k, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

void ssbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const int k = info[2]->Uint32Value();
	const float alpha = info[3]->NumberValue();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int lda = info[5]->Uint32Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int inc_x = info[7]->Uint32Value();
	const float beta = info[8]->NumberValue();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[9].As<v8::Float32Array>()));
	const int inc_y = info[10]->Uint32Value();
	cblas_ssbmv(CblasRowMajor, uplo, n, k, alpha, a, lda, x, inc_x, beta, y, inc_y);
}
