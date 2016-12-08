#include "cblas.h"
#include "routines.h"

void drotmg(const v8::FunctionCallbackInfo<v8::Value>& info) {
	double *d1 = reinterpret_cast<double*>(GET_CONTENTS(info[0].As<v8::Float64Array>()));
	double *d2 = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	double *b1 = reinterpret_cast<double*>(GET_CONTENTS(info[2].As<v8::Float64Array>()));
	const double b2 = info[3]->NumberValue();
	double *param = reinterpret_cast<double*>(GET_CONTENTS(info[4].As<v8::Float64Array>()));
	cblas_drotmg(d1, d2, b1, b2, param);
}

void srotmg(const v8::FunctionCallbackInfo<v8::Value>& info) {
	float *d1 = reinterpret_cast<float*>(GET_CONTENTS(info[0].As<v8::Float32Array>()));
	float *d2 = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	float *b1 = reinterpret_cast<float*>(GET_CONTENTS(info[2].As<v8::Float32Array>()));
	const float b2 = info[3]->NumberValue();
	float *param = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	cblas_srotmg(d1, d2, b1, b2, param);
}
