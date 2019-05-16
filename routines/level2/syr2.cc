#include "cblas.h"
#include "routines.h"

void dsyr2(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0].As<v8::Integer>()->Value());
	const int n = info[1].As<v8::Integer>()->Value();
	const double alpha = info[2].As<v8::Number>()->Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int inc_x = info[4].As<v8::Integer>()->Value();
	const double *y = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const int inc_y = info[6].As<v8::Integer>()->Value();
	double *a = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int lda = info[8].As<v8::Integer>()->Value();
	cblas_dsyr2(CblasRowMajor, uplo, n, alpha, x, inc_x, y, inc_y, a, lda);
}

void ssyr2(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0].As<v8::Integer>()->Value());
	const int n = info[1].As<v8::Integer>()->Value();
	const float alpha = info[2].As<v8::Number>()->Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_x = info[4].As<v8::Integer>()->Value();
	const float *y = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const int inc_y = info[6].As<v8::Integer>()->Value();
	float *a = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int lda = info[8].As<v8::Integer>()->Value();
	cblas_ssyr2(CblasRowMajor, uplo, n, alpha, x, inc_x, y, inc_y, a, lda);
}
