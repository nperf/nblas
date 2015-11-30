#include "tbmv.h"

NAN_METHOD(dtbmv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int trans = info[1]->Uint32Value();
	unsigned int diag = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	unsigned int k = info[4]->Uint32Value();
	assert(info[5]->IsFloat64Array());
	void *a_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[6]->Uint32Value();
	assert(info[7]->IsFloat64Array());
	void *x_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[8]->Uint32Value();
	cblas_dtbmv(101, uplo, trans, diag, n, k, a, lda, x, inc_x);
}

NAN_METHOD(stbmv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int trans = info[1]->Uint32Value();
	unsigned int diag = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	unsigned int k = info[4]->Uint32Value();
	assert(info[5]->IsFloat32Array());
	void *a_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[6]->Uint32Value();
	assert(info[7]->IsFloat32Array());
	void *x_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[8]->Uint32Value();
	cblas_stbmv(101, uplo, trans, diag, n, k, a, lda, x, inc_x);
}
