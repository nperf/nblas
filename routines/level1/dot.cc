#include "cblas.h"
#include "routines.h"

void ddot(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	const int inc_x = info[2]->Uint32Value();
	const double *y = reinterpret_cast<double*>(GET_CONTENTS(info[3].As<v8::Float64Array>()));
	const int inc_y = info[4]->Uint32Value();
	info.GetReturnValue().Set(
		v8::Number::New(info.GetIsolate(), cblas_ddot(n, x, inc_x, y, inc_y))
	);
}

void sdot(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0]->Uint32Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const int inc_x = info[2]->Uint32Value();
	const float *y = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_y = info[4]->Uint32Value();
	info.GetReturnValue().Set(
		v8::Number::New(info.GetIsolate(), cblas_sdot(n, x, inc_x, y, inc_y))
	);
}
