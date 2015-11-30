#include "rot.h"

NAN_METHOD(drot) {
	unsigned int n = info[0]->Uint32Value();
	assert(info[1]->IsFloat64Array());
	void *x_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[2]->Uint32Value();
	assert(info[3]->IsFloat64Array());
	void *y_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	unsigned int inc_y = info[4]->Uint32Value();
	double s = info[5]->NumberValue();
	cblas_drot(n, x, inc_x, y, inc_y, s);
}

NAN_METHOD(srot) {
	unsigned int n = info[0]->Uint32Value();
	assert(info[1]->IsFloat32Array());
	void *x_data = info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[2]->Uint32Value();
	assert(info[3]->IsFloat32Array());
	void *y_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	unsigned int inc_y = info[4]->Uint32Value();
	float s = info[5]->NumberValue();
	cblas_srot(n, x, inc_x, y, inc_y, s);
}
