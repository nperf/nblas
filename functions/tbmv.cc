#include "cblas.h"
#include "decl.h"

NAN_METHOD(dtbmv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const int k = info[4]->Uint32Value();
	assert(info[5]->IsFloat64Array());
	void *a_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *a = reinterpret_cast<double*>(a_data);
	const int lda = info[6]->Uint32Value();
	assert(info[7]->IsFloat64Array());
	void *x_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[8]->Uint32Value();
	cblas_dtbmv(CblasRowMajor, uplo, trans, diag, n, k, a, lda, x, inc_x);
}

NAN_METHOD(stbmv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const int k = info[4]->Uint32Value();
	assert(info[5]->IsFloat32Array());
	void *a_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *a = reinterpret_cast<float*>(a_data);
	const int lda = info[6]->Uint32Value();
	assert(info[7]->IsFloat32Array());
	void *x_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[8]->Uint32Value();
	cblas_stbmv(CblasRowMajor, uplo, trans, diag, n, k, a, lda, x, inc_x);
}
