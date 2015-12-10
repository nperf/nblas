#include "spr2.h"

NAN_METHOD(dspr2) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	double alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat64Array());
	void *x_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[4]->Uint32Value();
	assert(info[5]->IsFloat64Array());
	void *y_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	unsigned int inc_y = info[6]->Uint32Value();
	assert(info[7]->IsFloat64Array());
	void *ap_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *ap = reinterpret_cast<double*>(ap_data);
	cblas_dspr2(101, uplo, n, alpha, x, inc_x, y, inc_y, ap);
}

NAN_METHOD(sspr2) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	float alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat32Array());
	void *x_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[4]->Uint32Value();
	assert(info[5]->IsFloat32Array());
	void *y_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	unsigned int inc_y = info[6]->Uint32Value();
	assert(info[7]->IsFloat32Array());
	void *ap_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *ap = reinterpret_cast<float*>(ap_data);
	cblas_sspr2(101, uplo, n, alpha, x, inc_x, y, inc_y, ap);
}
