#include "cblas.h"
#include "routines.h"

void dgbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0].As<v8::Integer>()->Value());
	const int m = info[1].As<v8::Integer>()->Value();
	const int n = info[2].As<v8::Integer>()->Value();
	const int kl = info[3].As<v8::Integer>()->Value();
	const int ku = info[4].As<v8::Integer>()->Value();
	const double alpha = info[5].As<v8::Number>()->Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int lda = info[7].As<v8::Integer>()->Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[8].As<v8::Float64Array>()));
	const int inc_x = info[9].As<v8::Integer>()->Value();
	const double beta = info[10].As<v8::Number>()->Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[11].As<v8::Float64Array>()));
	const int inc_y = info[12].As<v8::Integer>()->Value();
	cblas_dgbmv(CblasRowMajor, trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

void sgbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0].As<v8::Integer>()->Value());
	const int m = info[1].As<v8::Integer>()->Value();
	const int n = info[2].As<v8::Integer>()->Value();
	const int kl = info[3].As<v8::Integer>()->Value();
	const int ku = info[4].As<v8::Integer>()->Value();
	const float alpha = info[5].As<v8::Number>()->Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int lda = info[7].As<v8::Integer>()->Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[8].As<v8::Float32Array>()));
	const int inc_x = info[9].As<v8::Integer>()->Value();
	const float beta = info[10].As<v8::Number>()->Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[11].As<v8::Float32Array>()));
	const int inc_y = info[12].As<v8::Integer>()->Value();
	cblas_sgbmv(CblasRowMajor, trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

void zgbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0].As<v8::Integer>()->Value());
	const int m = info[1].As<v8::Integer>()->Value();
	const int n = info[2].As<v8::Integer>()->Value();
	const int kl = info[3].As<v8::Integer>()->Value();
	const int ku = info[4].As<v8::Integer>()->Value();
	const double *alpha = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int lda = info[7].As<v8::Integer>()->Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[8].As<v8::Float64Array>()));
	const int inc_x = info[9].As<v8::Integer>()->Value();
	const double *beta = reinterpret_cast<double*>(GET_CONTENTS(info[10].As<v8::Float64Array>()));
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[11].As<v8::Float64Array>()));
	const int inc_y = info[12].As<v8::Integer>()->Value();
	cblas_zgbmv(CblasRowMajor, trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

void cgbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0].As<v8::Integer>()->Value());
	const int m = info[1].As<v8::Integer>()->Value();
	const int n = info[2].As<v8::Integer>()->Value();
	const int kl = info[3].As<v8::Integer>()->Value();
	const int ku = info[4].As<v8::Integer>()->Value();
	const float *alpha = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int lda = info[7].As<v8::Integer>()->Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[8].As<v8::Float32Array>()));
	const int inc_x = info[9].As<v8::Integer>()->Value();
	const float *beta = reinterpret_cast<float*>(GET_CONTENTS(info[10].As<v8::Float32Array>()));
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[11].As<v8::Float32Array>()));
	const int inc_y = info[12].As<v8::Integer>()->Value();
	cblas_cgbmv(CblasRowMajor, trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}
