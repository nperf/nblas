#include "sbmv.h"

NAN_METHOD(dsbmv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	unsigned int k = info[2]->Uint32Value();
	double alpha = info[3]->NumberValue();
	assert(info[4]->IsFloat64Array());
	void *a_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[5]->Uint32Value();
	assert(info[6]->IsFloat64Array());
	void *x_data = info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[7]->Uint32Value();
	double beta = info[8]->NumberValue();
	assert(info[9]->IsFloat64Array());
	void *y_data = info[9].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	unsigned int inc_y = info[10]->Uint32Value();
	cblas_dsbmv(uplo, n, k, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

NAN_METHOD(ssbmv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	unsigned int k = info[2]->Uint32Value();
	float alpha = info[3]->NumberValue();
	assert(info[4]->IsFloat32Array());
	void *a_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[5]->Uint32Value();
	assert(info[6]->IsFloat32Array());
	void *x_data = info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[7]->Uint32Value();
	float beta = info[8]->NumberValue();
	assert(info[9]->IsFloat32Array());
	void *y_data = info[9].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	unsigned int inc_y = info[10]->Uint32Value();
	cblas_ssbmv(uplo, n, k, alpha, a, lda, x, inc_x, beta, y, inc_y);
}
