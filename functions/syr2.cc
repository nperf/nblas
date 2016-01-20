#include "cblas.h"
#include "decl.h"

NAN_METHOD(dsyr2) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const double alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat64Array());
	void *x_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[4]->Uint32Value();
	assert(info[5]->IsFloat64Array());
	void *y_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *y = reinterpret_cast<double*>(y_data);
	const int inc_y = info[6]->Uint32Value();
	assert(info[7]->IsFloat64Array());
	void *a_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	const int lda = info[8]->Uint32Value();
	cblas_dsyr2(CblasRowMajor, uplo, n, alpha, x, inc_x, y, inc_y, a, lda);
}

NAN_METHOD(ssyr2) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const float alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat32Array());
	void *x_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[4]->Uint32Value();
	assert(info[5]->IsFloat32Array());
	void *y_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *y = reinterpret_cast<float*>(y_data);
	const int inc_y = info[6]->Uint32Value();
	assert(info[7]->IsFloat32Array());
	void *a_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	const int lda = info[8]->Uint32Value();
	cblas_ssyr2(CblasRowMajor, uplo, n, alpha, x, inc_x, y, inc_y, a, lda);
}
