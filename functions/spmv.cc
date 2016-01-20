#include "cblas.h"
#include "decl.h"

NAN_METHOD(dspmv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const double alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat64Array());
	void *ap_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *ap = reinterpret_cast<double*>(ap_data);
	assert(info[4]->IsFloat64Array());
	void *x_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	const double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[5]->Uint32Value();
	const double beta = info[6]->NumberValue();
	assert(info[7]->IsFloat64Array());
	void *y_data = info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *y = reinterpret_cast<double*>(y_data);
	const int inc_y = info[8]->Uint32Value();
	cblas_dspmv(CblasRowMajor, uplo, n, alpha, ap, x, inc_x, beta, y, inc_y);
}

NAN_METHOD(sspmv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const float alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat32Array());
	void *ap_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *ap = reinterpret_cast<float*>(ap_data);
	assert(info[4]->IsFloat32Array());
	void *x_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	const float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[5]->Uint32Value();
	const float beta = info[6]->NumberValue();
	assert(info[7]->IsFloat32Array());
	void *y_data = info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *y = reinterpret_cast<float*>(y_data);
	const int inc_y = info[8]->Uint32Value();
	cblas_sspmv(CblasRowMajor, uplo, n, alpha, ap, x, inc_x, beta, y, inc_y);
}
