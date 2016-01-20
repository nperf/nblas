#include "cblas.h"
#include "decl.h"

NAN_METHOD(dtrsv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const double *a = reinterpret_cast<double*>(info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int lda = info[5]->Uint32Value();
	double *x = reinterpret_cast<double*>(info[6].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[7]->Uint32Value();
	cblas_dtrsv(CblasRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}

NAN_METHOD(strsv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	const float *a = reinterpret_cast<float*>(info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int lda = info[5]->Uint32Value();
	float *x = reinterpret_cast<float*>(info[6].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[7]->Uint32Value();
	cblas_strsv(CblasRowMajor, uplo, trans, diag, n, a, lda, x, inc_x);
}
