#include "cblas.h"
#include "routines.h"

void drotmg(const v8::FunctionCallbackInfo<v8::Value>& info) {
	double *d1 = reinterpret_cast<double*>(info[0].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	double *d2 = reinterpret_cast<double*>(info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	double *b1 = reinterpret_cast<double*>(info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const double b2 = info[3]->NumberValue();
	double *param = reinterpret_cast<double*>(info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	cblas_drotmg(d1, d2, b1, b2, param);
}

void srotmg(const v8::FunctionCallbackInfo<v8::Value>& info) {
	float *d1 = reinterpret_cast<float*>(info[0].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	float *d2 = reinterpret_cast<float*>(info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	float *b1 = reinterpret_cast<float*>(info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const float b2 = info[3]->NumberValue();
	float *param = reinterpret_cast<float*>(info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	cblas_srotmg(d1, d2, b1, b2, param);
}
