#include "cblas.h"
#include "decl.h"

NAN_METHOD(dtrsv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	assert(info[4]->IsFloat64Array());
	void *a_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *a = reinterpret_cast<double*>(a_data);
	const int lda = info[5]->Uint32Value();
	assert(info[6]->IsFloat64Array());
	void *x_data = info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[7]->Uint32Value();
	cblas_dtrsv(CblasRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

NAN_METHOD(strsv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	assert(info[4]->IsFloat32Array());
	void *a_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *a = reinterpret_cast<float*>(a_data);
	const int lda = info[5]->Uint32Value();
	assert(info[6]->IsFloat32Array());
	void *x_data = info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[7]->Uint32Value();
	cblas_strsv(CblasRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}
