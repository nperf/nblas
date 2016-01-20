#include "cblas.h"
#include "decl.h"

NAN_METHOD(dgemv) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0]->Uint32Value());
	const int m = info[1]->Uint32Value();
	const int n = info[2]->Uint32Value();
	const double alpha = info[3]->NumberValue();
	assert(info[4]->IsFloat64Array());
	void *a_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *a = reinterpret_cast<double*>(a_data);
	const int lda = info[5]->Uint32Value();
	assert(info[6]->IsFloat64Array());
	void *x_data = info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[7]->Uint32Value();
	const double beta = info[8]->NumberValue();
	assert(info[9]->IsFloat64Array());
	void *y_data = info[9].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	const int inc_y = info[10]->Uint32Value();
	cblas_dgemv(CblasRowMajor, trans, m, n, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

NAN_METHOD(sgemv) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0]->Uint32Value());
	const int m = info[1]->Uint32Value();
	const int n = info[2]->Uint32Value();
	const float alpha = info[3]->NumberValue();
	assert(info[4]->IsFloat32Array());
	void *a_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *a = reinterpret_cast<float*>(a_data);
	const int lda = info[5]->Uint32Value();
	assert(info[6]->IsFloat32Array());
	void *x_data = info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[7]->Uint32Value();
	const float beta = info[8]->NumberValue();
	assert(info[9]->IsFloat32Array());
	void *y_data = info[9].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	const int inc_y = info[10]->Uint32Value();
	cblas_sgemv(CblasRowMajor, trans, m, n, alpha, a, lda, x, inc_x, beta, y, inc_y);
}
