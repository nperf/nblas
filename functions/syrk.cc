#include "syrk.h"

NAN_METHOD(dsyrk) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int trans = info[1]->Uint32Value();
	unsigned int n = info[2]->Uint32Value();
	unsigned int k = info[3]->Uint32Value();
	double alpha = info[4]->NumberValue();
	assert(info[5]->IsFloat64Array());
	void *a_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[6]->Uint32Value();
	double beta = info[7]->NumberValue();
	assert(info[8]->IsFloat64Array());
	void *c_data = info[8].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *c = reinterpret_cast<double*>(c_data);
	unsigned int ldc = info[9]->Uint32Value();
	cblas_dsyrk(101, uplo, trans, n, k, alpha, a, lda, beta, c, ldc);
}

NAN_METHOD(ssyrk) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int trans = info[1]->Uint32Value();
	unsigned int n = info[2]->Uint32Value();
	unsigned int k = info[3]->Uint32Value();
	float alpha = info[4]->NumberValue();
	assert(info[5]->IsFloat32Array());
	void *a_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[6]->Uint32Value();
	float beta = info[7]->NumberValue();
	assert(info[8]->IsFloat32Array());
	void *c_data = info[8].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *c = reinterpret_cast<float*>(c_data);
	unsigned int ldc = info[9]->Uint32Value();
	cblas_ssyrk(101, uplo, trans, n, k, alpha, a, lda, beta, c, ldc);
}
