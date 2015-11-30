#include "iamax.h"

NAN_METHOD(idamax) {
	unsigned int n = info[0]->Uint32Value();
	assert(info[1]->IsFloat64Array());
	void *x_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[2]->Uint32Value();
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(cblas_idamax(n, x, inc_x))
	);
}

NAN_METHOD(isamax) {
	unsigned int n = info[0]->Uint32Value();
	assert(info[1]->IsFloat32Array());
	void *x_data = info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[2]->Uint32Value();
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(cblas_isamax(n, x, inc_x))
	);
}
