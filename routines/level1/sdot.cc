#include "cblas.h"
#include "routines.h"

void dsdot(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	const float *y = reinterpret_cast<float*>(GET_CONTENTS(info[3].As<v8::Float32Array>()));
	const int inc_y = info[4].As<v8::Integer>()->Value();
	info.GetReturnValue().Set(
		v8::Number::New(info.GetIsolate(), cblas_dsdot(n, x, inc_x, y, inc_y))
	);
}

void sdsdot(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const float alpha = info[1].As<v8::Integer>()->Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[2].As<v8::Float32Array>()));
	const int inc_x = info[3].As<v8::Integer>()->Value();
	const float *y = reinterpret_cast<float*>(GET_CONTENTS(info[4].As<v8::Float32Array>()));
	const int inc_y = info[5].As<v8::Integer>()->Value();
	info.GetReturnValue().Set(
		v8::Number::New(info.GetIsolate(), cblas_sdsdot(n, alpha, x, inc_x, y, inc_y))
	);
}
