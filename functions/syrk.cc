#include "cblas.h"
#include "decl.h"

NAN_METHOD(dsyrk) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const int n = info[2]->Uint32Value();
	const int k = info[3]->Uint32Value();
	const double alpha = info[4]->NumberValue();
	assert(info[5]->IsFloat64Array());
	void *a_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *a = reinterpret_cast<double*>(a_data);
	const int lda = info[6]->Uint32Value();
	const double beta = info[7]->NumberValue();
	assert(info[8]->IsFloat64Array());
	void *c_data = info[8].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *c = reinterpret_cast<double*>(c_data);
	const int ldc = info[9]->Uint32Value();
	cblas_dsyrk(CblasRowMajor, uplo, trans, n, k, alpha, a, lda, beta, c, ldc);
}

NAN_METHOD(ssyrk) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[1]->Uint32Value());
	const int n = info[2]->Uint32Value();
	const int k = info[3]->Uint32Value();
	const float alpha = info[4]->NumberValue();
	assert(info[5]->IsFloat32Array());
	void *a_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *a = reinterpret_cast<float*>(a_data);
	const int lda = info[6]->Uint32Value();
	const float beta = info[7]->NumberValue();
	assert(info[8]->IsFloat32Array());
	void *c_data = info[8].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *c = reinterpret_cast<float*>(c_data);
	const int ldc = info[9]->Uint32Value();
	cblas_ssyrk(CblasRowMajor, uplo, trans, n, k, alpha, a, lda, beta, c, ldc);
}
