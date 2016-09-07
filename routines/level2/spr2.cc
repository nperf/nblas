#include "cblas.h"
#include "routines.h"

void dspr2(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const double alpha = info[2]->NumberValue();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int inc_x = info[4]->Uint32Value();
	const double *y = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	const int inc_y = info[6]->Uint32Value();
	double *ap = reinterpret_cast<double*>(GET_CONTENTS(info[7].As<v8::Float64Array>()));
	cblas_dspr2(CblasRowMajor, uplo, n, alpha, x, inc_x, y, inc_y, ap);
}

void sspr2(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const float alpha = info[2]->NumberValue();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_x = info[4]->Uint32Value();
	const float *y = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	const int inc_y = info[6]->Uint32Value();
	float *ap = reinterpret_cast<float*>(GET_CONTENTS(info[7].As<v8::Float32Array>()));
	cblas_sspr2(CblasRowMajor, uplo, n, alpha, x, inc_x, y, inc_y, ap);
}
