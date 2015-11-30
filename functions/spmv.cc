#include "spmv.h"

NAN_METHOD(dspmv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	double alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat64Array());
	void *ap_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *ap = reinterpret_cast<double*>(ap_data);
	assert(info[4]->IsFloat64Array());
	void *x_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[5]->Uint32Value();
	double beta = info[6]->NumberValue();
	assert(info[7]->IsFloat64Array());
	void *y_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	unsigned int inc_y = info[8]->Uint32Value();
	cblas_dspmv(101, uplo, n, alpha, ap, x, inc_x, beta, y, inc_y);
}

NAN_METHOD(sspmv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	float alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat32Array());
	void *ap_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *ap = reinterpret_cast<float*>(ap_data);
	assert(info[4]->IsFloat32Array());
	void *x_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[5]->Uint32Value();
	float beta = info[6]->NumberValue();
	assert(info[7]->IsFloat32Array());
	void *y_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	unsigned int inc_y = info[8]->Uint32Value();
	cblas_sspmv(101, uplo, n, alpha, ap, x, inc_x, beta, y, inc_y);
}
