#include "cblas.h"
#include "routines.h"

void dsymv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const double alpha = info[2]->NumberValue();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int lda = info[4]->Uint32Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const int inc_x = info[6]->Uint32Value();
	const double beta = info[7]->NumberValue();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[8].As<v8::Float64Array>()));
	const int inc_y = info[9]->Uint32Value();
	cblas_dsymv(CblasRowMajor, uplo, n, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

void ssymv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const float alpha = info[2]->NumberValue();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int lda = info[4]->Uint32Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const int inc_x = info[6]->Uint32Value();
	const float beta = info[7]->NumberValue();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[8].As<v8::Float32Array>()));
	const int inc_y = info[9]->Uint32Value();
	cblas_ssymv(CblasRowMajor, uplo, n, alpha, a, lda, x, inc_x, beta, y, inc_y);
}
