#include "cblas.h"
#include "routines.h"

void dswap(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	double *x = reinterpret_cast<double*>(info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[2]->Uint32Value();
	double *y = reinterpret_cast<double*>(info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[4]->Uint32Value();
	cblas_dswap(n, x, inc_x, y, inc_y);
}

void sswap(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	float *x = reinterpret_cast<float*>(info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[2]->Uint32Value();
	float *y = reinterpret_cast<float*>(info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[4]->Uint32Value();
	cblas_sswap(n, x, inc_x, y, inc_y);
}
