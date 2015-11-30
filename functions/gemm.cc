#include "gemm.h"

NAN_METHOD(dgemm) {
	unsigned int transa = info[0]->Uint32Value();
	unsigned int transb = info[1]->Uint32Value();
	unsigned int m = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	unsigned int k = info[4]->Uint32Value();
	double alpha = info[5]->NumberValue();
	assert(info[6]->IsFloat64Array());
	void *a_data = info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[7]->Uint32Value();
	assert(info[8]->IsFloat64Array());
	void *b_data = info[8].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *b = reinterpret_cast<double*>(b_data);
	unsigned int ldb = info[9]->Uint32Value();
	double beta = info[10]->NumberValue();
	assert(info[11]->IsFloat64Array());
	void *c_data = info[11].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *c = reinterpret_cast<double*>(c_data);
	unsigned int ldc = info[12]->Uint32Value();
	cblas_dgemm(101, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc);
}

NAN_METHOD(sgemm) {
	unsigned int transa = info[0]->Uint32Value();
	unsigned int transb = info[1]->Uint32Value();
	unsigned int m = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	unsigned int k = info[4]->Uint32Value();
	float alpha = info[5]->NumberValue();
	assert(info[6]->IsFloat32Array());
	void *a_data = info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[7]->Uint32Value();
	assert(info[8]->IsFloat32Array());
	void *b_data = info[8].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *b = reinterpret_cast<float*>(b_data);
	unsigned int ldb = info[9]->Uint32Value();
	float beta = info[10]->NumberValue();
	assert(info[11]->IsFloat32Array());
	void *c_data = info[11].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *c = reinterpret_cast<float*>(c_data);
	unsigned int ldc = info[12]->Uint32Value();
	cblas_sgemm(101, transa, transb, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc);
}
