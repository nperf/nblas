#include "trsv.h"

NAN_METHOD(dtrsv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int trans = info[1]->Uint32Value();
	unsigned int diag = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	assert(info[4]->IsFloat64Array());
	void *a_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[5]->Uint32Value();
	assert(info[6]->IsFloat64Array());
	void *x_data = info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[7]->Uint32Value();
	cblas_dtrsv(uplo, trans, diag, n, a, lda, x, inc_x);
}

NAN_METHOD(strsv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int trans = info[1]->Uint32Value();
	unsigned int diag = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	assert(info[4]->IsFloat32Array());
	void *a_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[5]->Uint32Value();
	assert(info[6]->IsFloat32Array());
	void *x_data = info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[7]->Uint32Value();
	cblas_strsv(uplo, trans, diag, n, a, lda, x, inc_x);
}
