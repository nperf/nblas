#include "cblas.h"
#include "routines.h"

void dscal(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	const double alpha = info[1]->NumberValue();
	double *x = reinterpret_cast<double*>(GET_CONTENTS(info[2].As<v8::Float64Array>()));
	const int inc_x = info[3]->Uint32Value();
	cblas_dscal(n, alpha, x, inc_x);
}

void sscal(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	const float alpha = info[1]->NumberValue();
	float *x = reinterpret_cast<float*>(GET_CONTENTS(info[2].As<v8::Float32Array>()));
	const int inc_x = info[3]->Uint32Value();
	cblas_sscal(n, alpha, x, inc_x);
}
