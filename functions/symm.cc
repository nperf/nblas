#include "cblas.h"
#include "decl.h"

NAN_METHOD(dsymm) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0]->Uint32Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1]->Uint32Value());
	const int m = info[2]->Uint32Value();
	const int n = info[3]->Uint32Value();
	const double alpha = info[4]->NumberValue();
	assert(info[5]->IsFloat64Array());
	void *a_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *a = reinterpret_cast<double*>(a_data);
	const int lda = info[6]->Uint32Value();
	assert(info[7]->IsFloat64Array());
	void *b_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *b = reinterpret_cast<double*>(b_data);
	const int ldb = info[8]->Uint32Value();
	const double beta = info[9]->NumberValue();
	assert(info[10]->IsFloat64Array());
	void *c_data = info[10].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *c = reinterpret_cast<double*>(c_data);
	const int ldc = info[11]->Uint32Value();
	cblas_dsymm(CblasRowMajor, side, uplo, m, n, alpha, a, lda, b, ldb, beta, c, ldc);
}

NAN_METHOD(ssymm) {
	const enum CBLAS_SIDE side = static_cast<CBLAS_SIDE>(info[0]->Uint32Value());
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[1]->Uint32Value());
	const int m = info[2]->Uint32Value();
	const int n = info[3]->Uint32Value();
	const float alpha = info[4]->NumberValue();
	assert(info[5]->IsFloat32Array());
	void *a_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *a = reinterpret_cast<float*>(a_data);
	const int lda = info[6]->Uint32Value();
	assert(info[7]->IsFloat32Array());
	void *b_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *b = reinterpret_cast<float*>(b_data);
	const int ldb = info[8]->Uint32Value();
	const float beta = info[9]->NumberValue();
	assert(info[10]->IsFloat32Array());
	void *c_data = info[10].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *c = reinterpret_cast<float*>(c_data);
	const int ldc = info[11]->Uint32Value();
	cblas_ssymm(CblasRowMajor, side, uplo, m, n, alpha, a, lda, b, ldb, beta, c, ldc);
}
