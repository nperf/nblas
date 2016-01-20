#include "cblas.h"
#include "decl.h"

NAN_METHOD(dsdot) {
	const int n = info[0]->Uint32Value();
	const float *x = reinterpret_cast<float*>(info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[2]->Uint32Value();
	const float *y = reinterpret_cast<float*>(info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[4]->Uint32Value();
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(cblas_dsdot(n, x, inc_x, y, inc_y))
	);
}

NAN_METHOD(sdsdot) {
	const int n = info[0]->Uint32Value();
	const float alpha = info[1]->Uint32Value();
	const float *x = reinterpret_cast<float*>(info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[3]->Uint32Value();
	const float *y = reinterpret_cast<float*>(info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[5]->Uint32Value();
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(cblas_sdsdot(n, alpha, x, inc_x, y, inc_y))
	);
}
