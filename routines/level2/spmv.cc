#include "cblas.h"
#include "routines.h"

void dspmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0].As<v8::Integer>()->Value());
	const int n = info[1].As<v8::Integer>()->Value();
	const double alpha = info[2].As<v8::Number>()->Value();
	const double *ap = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int inc_x = info[5].As<v8::Integer>()->Value();
	const double beta = info[6].As<v8::Number>()->Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int inc_y = info[8].As<v8::Integer>()->Value();
	cblas_dspmv(CblasRowMajor, uplo, n, alpha, ap, x, inc_x, beta, y, inc_y);
}

void sspmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0].As<v8::Integer>()->Value());
	const int n = info[1].As<v8::Integer>()->Value();
	const float alpha = info[2].As<v8::Number>()->Value();
	const float *ap = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int inc_x = info[5].As<v8::Integer>()->Value();
	const float beta = info[6].As<v8::Number>()->Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int inc_y = info[8].As<v8::Integer>()->Value();
	cblas_sspmv(CblasRowMajor, uplo, n, alpha, ap, x, inc_x, beta, y, inc_y);
}
