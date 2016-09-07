#include "cblas.h"
#include "routines.h"

void drot(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	const int inc_x = info[2]->Uint32Value();
	double *y = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int inc_y = info[4]->Uint32Value();
	const double c = info[5]->NumberValue();
	const double s = info[6]->NumberValue();
	cblas_drot(n, x, inc_x, y, inc_y, c, s);
}

void srot(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const int inc_x = info[2]->Uint32Value();
	float *y = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_y = info[4]->Uint32Value();
	const float c = info[5]->NumberValue();
	const float s = info[6]->NumberValue();
	cblas_srot(n, x, inc_x, y, inc_y, c, s);
}
