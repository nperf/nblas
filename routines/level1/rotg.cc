#include "cblas.h"
#include "routines.h"

void drotg(const v8::FunctionCallbackInfo<v8::Value>& info) {
	double *a = reinterpret_cast<double*>(info[0].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	double *b = reinterpret_cast<double*>(info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	double *c = reinterpret_cast<double*>(info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	double *s = reinterpret_cast<double*>(info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	cblas_drotg(a, b, c, s);
}

void srotg(const v8::FunctionCallbackInfo<v8::Value>& info) {
	float *a = reinterpret_cast<float*>(info[0].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	float *b = reinterpret_cast<float*>(info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	float *c = reinterpret_cast<float*>(info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	float *s = reinterpret_cast<float*>(info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	cblas_srotg(a, b, c, s);
}
