#include "cblas.h"
#include "routines.h"

void drotm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int inc_y = info[4].As<v8::Integer>()->Value();
	const double *param = reinterpret_cast<double*>(GET_CONTENTS(info[5].As<v8::Float64Array>()));
	cblas_drotm(n, x, inc_x, y, inc_y, param);
}

void srotm(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_y = info[4].As<v8::Integer>()->Value();
	const float *param = reinterpret_cast<float*>(GET_CONTENTS(info[5].As<v8::Float32Array>()));
	cblas_srotm(n, x, inc_x, y, inc_y, param);
}
