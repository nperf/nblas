#include "trsm.h"

NAN_METHOD(dtrsm) {
	unsigned int side = info[0]->Uint32Value();
	unsigned int uplo = info[1]->Uint32Value();
	unsigned int transa = info[2]->Uint32Value();
	unsigned int diag = info[3]->Uint32Value();
	unsigned int m = info[4]->Uint32Value();
	unsigned int n = info[5]->Uint32Value();
	double alpha = info[6]->NumberValue();
	assert(info[7]->IsFloat64Array());
	void *a_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[8]->Uint32Value();
	assert(info[9]->IsFloat64Array());
	void *b_data = info[9].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *b = reinterpret_cast<double*>(b_data);
	unsigned int ldb = info[10]->Uint32Value();
	cblas_dtrsm(101, side, uplo, transa, diag, m, n, alpha, a, lda, b, ldb);
}

NAN_METHOD(strsm) {
	unsigned int side = info[0]->Uint32Value();
	unsigned int uplo = info[1]->Uint32Value();
	unsigned int transa = info[2]->Uint32Value();
	unsigned int diag = info[3]->Uint32Value();
	unsigned int m = info[4]->Uint32Value();
	unsigned int n = info[5]->Uint32Value();
	float alpha = info[6]->NumberValue();
	assert(info[7]->IsFloat32Array());
	void *a_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[8]->Uint32Value();
	assert(info[9]->IsFloat32Array());
	void *b_data = info[9].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *b = reinterpret_cast<float*>(b_data);
	unsigned int ldb = info[10]->Uint32Value();
	cblas_strsm(101, side, uplo, transa, diag, m, n, alpha, a, lda, b, ldb);
}
