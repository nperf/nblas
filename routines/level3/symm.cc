#include "cblas.h"
#include "routines.h"

void dsymm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1].As<v8::Integer>()->Value());
	const int m = info[2].As<v8::Integer>()->Value();
	const int n = info[3].As<v8::Integer>()->Value();
	const double alpha = info[4].As<v8::Number>()->Value();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const int lda = info[6].As<v8::Integer>()->Value();
	const double *b = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int ldb = info[8].As<v8::Integer>()->Value();
	const double beta = info[9].As<v8::Number>()->Value();
	double *c = reinterpret_cast<double*>(GET_CONTENTS(info[10].As<v8::Float64Array>()));
	const int ldc = info[11].As<v8::Integer>()->Value();
	cblas_dsymm(CblasRowMajor, side, uplo, m, n, alpha, a, lda, b, ldb, beta, c, ldc);
}

void ssymm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1].As<v8::Integer>()->Value());
	const int m = info[2].As<v8::Integer>()->Value();
	const int n = info[3].As<v8::Integer>()->Value();
	const float alpha = info[4].As<v8::Number>()->Value();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const int lda = info[6].As<v8::Integer>()->Value();
	const float *b = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int ldb = info[8].As<v8::Integer>()->Value();
	const float beta = info[9].As<v8::Number>()->Value();
	float *c = reinterpret_cast<float*>(GET_CONTENTS(info[10].As<v8::Float32Array>()));
	const int ldc = info[11].As<v8::Integer>()->Value();
	cblas_ssymm(CblasRowMajor, side, uplo, m, n, alpha, a, lda, b, ldb, beta, c, ldc);
}

void zsymm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1].As<v8::Integer>()->Value());
	const int m = info[2].As<v8::Integer>()->Value();
	const int n = info[3].As<v8::Integer>()->Value();
	const double *alpha = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const int lda = info[6].As<v8::Integer>()->Value();
	const double *b = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	const int ldb = info[8].As<v8::Integer>()->Value();
	const double *beta = reinterpret_cast<double*>(GET_CONTENTS(info[9].As<v8::Float64Array>()));
	double *c = reinterpret_cast<double*>(GET_CONTENTS(info[10].As<v8::Float64Array>()));
	const int ldc = info[11].As<v8::Integer>()->Value();
	cblas_zsymm(CblasRowMajor, side, uplo, m, n, alpha, a, lda, b, ldb, beta, c, ldc);
}

void csymm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0].As<v8::Integer>()->Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1].As<v8::Integer>()->Value());
	const int m = info[2].As<v8::Integer>()->Value();
	const int n = info[3].As<v8::Integer>()->Value();
	const float *alpha = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const int lda = info[6].As<v8::Integer>()->Value();
	const float *b = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	const int ldb = info[8].As<v8::Integer>()->Value();
	const float *beta = reinterpret_cast<float*>(GET_CONTENTS(info[9].As<v8::Float32Array>()));
	float *c = reinterpret_cast<float*>(GET_CONTENTS(info[10].As<v8::Float32Array>()));
	const int ldc = info[11].As<v8::Integer>()->Value();
	cblas_csymm(CblasRowMajor, side, uplo, m, n, alpha, a, lda, b, ldb, beta, c, ldc);
}
