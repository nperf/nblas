#include "cblas.h"
#include "routines.h"

void idamax(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	info.GetReturnValue().Set(
		v8::Number::New(info.GetIsolate(), cblas_idamax(n, x, inc_x))
	);
}

void isamax(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	info.GetReturnValue().Set(
		v8::Number::New(info.GetIsolate(), cblas_isamax(n, x, inc_x))
	);
}

void izamax(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[1].As<v8::Float64Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	info.GetReturnValue().Set(
		v8::Number::New(info.GetIsolate(), cblas_izamax(n, x, inc_x))
	);
}

void icamax(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const int n = info[0].As<v8::Integer>()->Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[1].As<v8::Float32Array>()));
	const int inc_x = info[2].As<v8::Integer>()->Value();
	info.GetReturnValue().Set(
		v8::Number::New(info.GetIsolate(), cblas_icamax(n, x, inc_x))
	);
}
