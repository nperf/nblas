#include "symm.h"

NAN_METHOD(dsymm) {
	unsigned int side = info[0]->Uint32Value();
	unsigned int uplo = info[1]->Uint32Value();
	unsigned int m = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	double alpha = info[4]->NumberValue();
	assert(info[5]->IsFloat64Array());
	void *a_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[6]->Uint32Value();
	assert(info[7]->IsFloat64Array());
	void *b_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *b = reinterpret_cast<double*>(b_data);
	unsigned int ldb = info[8]->Uint32Value();
	double beta = info[9]->NumberValue();
	assert(info[10]->IsFloat64Array());
	void *c_data = info[10].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *c = reinterpret_cast<double*>(c_data);
	unsigned int ldc = info[11]->Uint32Value();
	cblas_dsymm(side, uplo, m, n, alpha, a, lda, b, ldb, beta, c, ldc);
}

NAN_METHOD(ssymm) {
	unsigned int side = info[0]->Uint32Value();
	unsigned int uplo = info[1]->Uint32Value();
	unsigned int m = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	float alpha = info[4]->NumberValue();
	assert(info[5]->IsFloat32Array());
	void *a_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[6]->Uint32Value();
	assert(info[7]->IsFloat32Array());
	void *b_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *b = reinterpret_cast<float*>(b_data);
	unsigned int ldb = info[8]->Uint32Value();
	float beta = info[9]->NumberValue();
	assert(info[10]->IsFloat32Array());
	void *c_data = info[10].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *c = reinterpret_cast<float*>(c_data);
	unsigned int ldc = info[11]->Uint32Value();
	cblas_ssymm(side, uplo, m, n, alpha, a, lda, b, ldb, beta, c, ldc);
}
