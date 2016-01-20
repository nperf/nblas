#include "cblas.h"
#include "decl.h"

NAN_METHOD(dswap) {
	const int n = info[0]->Uint32Value();
	assert(info[1]->IsFloat64Array());
	void *x_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[2]->Uint32Value();
	assert(info[3]->IsFloat64Array());
	void *y_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	const int inc_y = info[4]->Uint32Value();
	cblas_dswap(n, x, inc_x, y, inc_y);
}

NAN_METHOD(sswap) {
	const int n = info[0]->Uint32Value();
	assert(info[1]->IsFloat32Array());
	void *x_data = info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[2]->Uint32Value();
	assert(info[3]->IsFloat32Array());
	void *y_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	const int inc_y = info[4]->Uint32Value();
	cblas_sswap(n, x, inc_x, y, inc_y);
}
