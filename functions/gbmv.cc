#include "gbmv.h"

NAN_METHOD(dgbmv) {
	unsigned int trans = info[0]->Uint32Value();
	unsigned int m = info[1]->Uint32Value();
	unsigned int n = info[2]->Uint32Value();
	unsigned int kl = info[3]->Uint32Value();
	unsigned int ku = info[4]->Uint32Value();
	double alpha = info[5]->NumberValue();
	assert(info[6]->IsFloat64Array());
	void *a_data = info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[7]->Uint32Value();
	assert(info[8]->IsFloat64Array());
	void *x_data = info[8].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[9]->Uint32Value();
	double beta = info[10]->NumberValue();
	assert(info[11]->IsFloat64Array());
	void *y_data = info[11].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	unsigned int inc_y = info[12]->Uint32Value();
	cblas_dgbmv(trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

NAN_METHOD(sgbmv) {
	unsigned int trans = info[0]->Uint32Value();
	unsigned int m = info[1]->Uint32Value();
	unsigned int n = info[2]->Uint32Value();
	unsigned int kl = info[3]->Uint32Value();
	unsigned int ku = info[4]->Uint32Value();
	float alpha = info[5]->NumberValue();
	assert(info[6]->IsFloat32Array());
	void *a_data = info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[7]->Uint32Value();
	assert(info[8]->IsFloat32Array());
	void *x_data = info[8].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[9]->Uint32Value();
	float beta = info[10]->NumberValue();
	assert(info[11]->IsFloat32Array());
	void *y_data = info[11].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	unsigned int inc_y = info[12]->Uint32Value();
	cblas_sgbmv(trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}
