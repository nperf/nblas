#include "cblas.h"
#include "decl.h"

NAN_METHOD(dgemm) {
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE transb = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const int m = info[2]->Uint32Value();
	const int n = info[3]->Uint32Value();
	const int k = info[4]->Uint32Value();
	const double alpha = info[5]->NumberValue();
	assert(info[6]->IsFloat64Array());
	void *a_data = info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *a = reinterpret_cast<double*>(a_data);
	const int lda = info[7]->Uint32Value();
	assert(info[8]->IsFloat64Array());
	void *b_data = info[8].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *b = reinterpret_cast<double*>(b_data);
	const int ldb = info[9]->Uint32Value();
	const double beta = info[10]->NumberValue();
	assert(info[11]->IsFloat64Array());
	void *c_data = info[11].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *c = reinterpret_cast<double*>(c_data);
	const int ldc = info[12]->Uint32Value();
	cblas_dgemm(CblasRowMajor, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc);
}

NAN_METHOD(sgemm) {
	const enum CBLAS_TRANSPOSE transa = static_cast<CBLAS_TRANSPOSE>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE transb = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const int m = info[2]->Uint32Value();
	const int n = info[3]->Uint32Value();
	const int k = info[4]->Uint32Value();
	const float alpha = info[5]->NumberValue();
	assert(info[6]->IsFloat32Array());
	void *a_data = info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *a = reinterpret_cast<float*>(a_data);
	const int lda = info[7]->Uint32Value();
	assert(info[8]->IsFloat32Array());
	void *b_data = info[8].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *b = reinterpret_cast<float*>(b_data);
	const int ldb = info[9]->Uint32Value();
	const float beta = info[10]->NumberValue();
	assert(info[11]->IsFloat32Array());
	void *c_data = info[11].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *c = reinterpret_cast<float*>(c_data);
	const int ldc = info[12]->Uint32Value();
	cblas_sgemm(CblasRowMajor, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc);
}
