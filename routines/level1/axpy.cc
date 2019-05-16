#include "cblas.h"
#include "routines.h"

void daxpy(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const double alpha = info[1].As<v8::Number>()->Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[2].As<v8::Float64Array>()));
	const int inc_x = info[3].As<v8::Integer>()->Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int inc_y = info[5].As<v8::Integer>()->Value();
	cblas_daxpy(n, alpha, x, inc_x, y, inc_y);
}

void saxpy(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const float alpha = info[1].As<v8::Number>()->Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[2].As<v8::Float32Array>()));
	const int inc_x = info[3].As<v8::Integer>()->Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int inc_y = info[5].As<v8::Integer>()->Value();
	cblas_saxpy(n, alpha, x, inc_x, y, inc_y);
}

void zaxpy(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const double *alpha = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[2].As<v8::Float64Array>()));
	const int inc_x = info[3].As<v8::Integer>()->Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	const int inc_y = info[5].As<v8::Integer>()->Value();
	cblas_zaxpy(n, alpha, x, inc_x, y, inc_y);
}

void caxpy(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const float *alpha = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[2].As<v8::Float32Array>()));
	const int inc_x = info[3].As<v8::Integer>()->Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int inc_y = info[5].As<v8::Integer>()->Value();
	cblas_caxpy(n, alpha, x, inc_x, y, inc_y);
}
