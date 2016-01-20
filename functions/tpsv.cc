#include "cblas.h"
#include "decl.h"

NAN_METHOD(dtpsv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	assert(info[4]->IsFloat64Array());
	void *ap_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *ap = reinterpret_cast<double*>(ap_data);
	assert(info[5]->IsFloat64Array());
	void *x_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[6]->Uint32Value();
	cblas_dtpsv(CblasRowMajor, uplo, trans, diag, n, ap, x, inc_x);
}

NAN_METHOD(stpsv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const enum CBLAS_DIAG diag = static_cast<CBLAS_DIAG>(info[2]->Uint32Value());
	const int n = info[3]->Uint32Value();
	assert(info[4]->IsFloat32Array());
	void *ap_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *ap = reinterpret_cast<float*>(ap_data);
	assert(info[5]->IsFloat32Array());
	void *x_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[6]->Uint32Value();
	cblas_stpsv(CblasRowMajor, uplo, trans, diag, n, ap, x, inc_x);
}
