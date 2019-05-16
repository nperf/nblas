#include "cblas.h"
#include "routines.h"

void dgemm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE transb = static_cast<CBLAS_TRANSPOSE>(info[1].As<v8::Integer>()->Value());
	const int m = info[2].As<v8::Integer>()->Value();
	const int n = info[3].As<v8::Integer>()->Value();
	const int k = info[4].As<v8::Integer>()->Value();
	const double alpha = info[5].As<v8::Number>()->Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int lda = info[7].As<v8::Integer>()->Value();
	const double *b = reinterpret_cast<double*>(GET_CONTENTS(info[8].As<v8::Float64Array>()));
	const int ldb = info[9].As<v8::Integer>()->Value();
	const double beta = info[10].As<v8::Number>()->Value();
	double *c = reinterpret_cast<double*>(info[11].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int ldc = info[12].As<v8::Integer>()->Value();
	cblas_dgemm(CblasRowMajor, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc);
}

void sgemm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE transb = static_cast<CBLAS_TRANSPOSE>(info[1].As<v8::Integer>()->Value());
	const int m = info[2].As<v8::Integer>()->Value();
	const int n = info[3].As<v8::Integer>()->Value();
	const int k = info[4].As<v8::Integer>()->Value();
	const float alpha = info[5].As<v8::Number>()->Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int lda = info[7].As<v8::Integer>()->Value();
	const float *b = reinterpret_cast<float*>(GET_CONTENTS(info[8].As<v8::Float32Array>()));
	const int ldb = info[9].As<v8::Integer>()->Value();
	const float beta = info[10].As<v8::Number>()->Value();
	float *c = reinterpret_cast<float*>(info[11].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int ldc = info[12].As<v8::Integer>()->Value();
	cblas_sgemm(CblasRowMajor, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc);
}

void zgemm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE transb = static_cast<CBLAS_TRANSPOSE>(info[1].As<v8::Integer>()->Value());
	const int m = info[2].As<v8::Integer>()->Value();
	const int n = info[3].As<v8::Integer>()->Value();
	const int k = info[4].As<v8::Integer>()->Value();
	const double *alpha = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int lda = info[7].As<v8::Integer>()->Value();
	const double *b = reinterpret_cast<double*>(GET_CONTENTS(info[8].As<v8::Float64Array>()));
	const int ldb = info[9].As<v8::Integer>()->Value();
	const double *beta = reinterpret_cast<double*>(info[10].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	double *c = reinterpret_cast<double*>(info[11].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int ldc = info[12].As<v8::Integer>()->Value();
	cblas_zgemm(CblasRowMajor, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc);
}

void cgemm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_TRANSPOSE transb = static_cast<CBLAS_TRANSPOSE>(info[1].As<v8::Integer>()->Value());
	const int m = info[2].As<v8::Integer>()->Value();
	const int n = info[3].As<v8::Integer>()->Value();
	const int k = info[4].As<v8::Integer>()->Value();
	const float *alpha = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int lda = info[7].As<v8::Integer>()->Value();
	const float *b = reinterpret_cast<float*>(GET_CONTENTS(info[8].As<v8::Float32Array>()));
	const int ldb = info[9].As<v8::Integer>()->Value();
	const float *beta = reinterpret_cast<float*>(info[10].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	float *c = reinterpret_cast<float*>(info[11].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int ldc = info[12].As<v8::Integer>()->Value();
	cblas_cgemm(CblasRowMajor, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc);
}
