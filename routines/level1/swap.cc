#include "cblas.h"
#include "routines.h"

void dswap(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int inc_y = info[4].As<v8::Integer>()->Value();
	cblas_dswap(n, x, inc_x, y, inc_y);
}

void sswap(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_y = info[4].As<v8::Integer>()->Value();
	cblas_sswap(n, x, inc_x, y, inc_y);
}

void zswap(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int inc_y = info[4].As<v8::Integer>()->Value();
	cblas_zswap(n, x, inc_x, y, inc_y);
}

void cswap(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_y = info[4].As<v8::Integer>()->Value();
	cblas_cswap(n, x, inc_x, y, inc_y);
}
