#include "cblas.h"
#include "decl.h"

NAN_METHOD(dgbmv) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0]->Uint32Value());
	const int m = info[1]->Uint32Value();
	const int n = info[2]->Uint32Value();
	const int kl = info[3]->Uint32Value();
	const int ku = info[4]->Uint32Value();
	const double alpha = info[5]->NumberValue();
	assert(info[6]->IsFloat64Array());
	void *a_data = info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *a = reinterpret_cast<double*>(a_data);
	const int lda = info[7]->Uint32Value();
	assert(info[8]->IsFloat64Array());
	void *x_data = info[8].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[9]->Uint32Value();
	const double beta = info[10]->NumberValue();
	assert(info[11]->IsFloat64Array());
	void *y_data = info[11].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	const int inc_y = info[12]->Uint32Value();
	cblas_dgbmv(CblasRowMajor, trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

NAN_METHOD(sgbmv) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0]->Uint32Value());
	const int m = info[1]->Uint32Value();
	const int n = info[2]->Uint32Value();
	const int kl = info[3]->Uint32Value();
	const int ku = info[4]->Uint32Value();
	const float alpha = info[5]->NumberValue();
	assert(info[6]->IsFloat32Array());
	void *a_data = info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *a = reinterpret_cast<float*>(a_data);
	const int lda = info[7]->Uint32Value();
	assert(info[8]->IsFloat32Array());
	void *x_data = info[8].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[9]->Uint32Value();
	const float beta = info[10]->NumberValue();
	assert(info[11]->IsFloat32Array());
	void *y_data = info[11].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	const int inc_y = info[12]->Uint32Value();
	cblas_sgbmv(CblasRowMajor, trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}
