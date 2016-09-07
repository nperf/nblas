#include "cblas.h"
#include "routines.h"

void daxpy(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	const double alpha = info[1]->NumberValue();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[2].As<v8::Float64Array>()));
	const int inc_x = info[3]->Uint32Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int inc_y = info[5]->Uint32Value();
	cblas_daxpy(n, alpha, x, inc_x, y, inc_y);
}

void saxpy(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	const float alpha = info[1]->NumberValue();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[2].As<v8::Float32Array>()));
	const int inc_x = info[3]->Uint32Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int inc_y = info[5]->Uint32Value();
	cblas_saxpy(n, alpha, x, inc_x, y, inc_y);
}
