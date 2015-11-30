#include "axpy.h"

NAN_METHOD(daxpy) {
	unsigned int n = info[0]->Uint32Value();
	double alpha = info[1]->NumberValue();
	assert(info[2]->IsFloat64Array());
	void *x_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[3]->Uint32Value();
	assert(info[4]->IsFloat64Array());
	void *y_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	unsigned int inc_y = info[5]->Uint32Value();
	cblas_daxpy(n, alpha, x, inc_x, y, inc_y);
}

NAN_METHOD(saxpy) {
	unsigned int n = info[0]->Uint32Value();
	float alpha = info[1]->NumberValue();
	assert(info[2]->IsFloat32Array());
	void *x_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[3]->Uint32Value();
	assert(info[4]->IsFloat32Array());
	void *y_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	unsigned int inc_y = info[5]->Uint32Value();
	cblas_saxpy(n, alpha, x, inc_x, y, inc_y);
}
