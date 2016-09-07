#include "cblas.h"
#include "routines.h"

void drotg(const v8::FunctionCallbackInfo<v8::Value>& info) {
	double *a = reinterpret_cast<double*>(GET_CONTENTS(info[0].As<v8::Float64Array>()));
	double *b = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	double *c = reinterpret_cast<double*>(GET_CONTENTS(info[2].As<v8::Float64Array>()));
	double *s = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	cblas_drotg(a, b, c, s);
}

void srotg(const v8::FunctionCallbackInfo<v8::Value>& info) {
	float *a = reinterpret_cast<float*>(GET_CONTENTS(info[0].As<v8::Float32Array>()));
	float *b = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	float *c = reinterpret_cast<float*>(GET_CONTENTS(info[2].As<v8::Float32Array>()));
	float *s = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	cblas_srotg(a, b, c, s);
}
