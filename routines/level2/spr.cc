#include "cblas.h"
#include "routines.h"

void dspr(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const double alpha = info[2]->NumberValue();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int inc_x = info[4]->Uint32Value();
	double *ap = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	cblas_dspr(CblasRowMajor, uplo, n, alpha, x, inc_x, ap);
}

void sspr(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const float alpha = info[2]->NumberValue();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_x = info[4]->Uint32Value();
	float *ap = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	cblas_sspr(CblasRowMajor, uplo, n, alpha, x, inc_x, ap);
}
