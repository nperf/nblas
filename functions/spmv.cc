#include "cblas.h"
#include "decl.h"

NAN_METHOD(dspmv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const double alpha = info[2]->NumberValue();
	const double *ap = reinterpret_cast<double*>(info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const double *x = reinterpret_cast<double*>(info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[5]->Uint32Value();
	const double beta = info[6]->NumberValue();
	double *y = reinterpret_cast<double*>(info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[8]->Uint32Value();
	cblas_dspmv(CblasRowMajor, uplo, n, alpha, ap, x, inc_x, beta, y, inc_y);
}

NAN_METHOD(sspmv) {
	const enum CBLAS_UPLO uplo = static_cast<CBLAS_UPLO>(info[0]->Uint32Value());
	const int n = info[1]->Uint32Value();
	const float alpha = info[2]->NumberValue();
	const float *ap = reinterpret_cast<float*>(info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const float *x = reinterpret_cast<float*>(info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[5]->Uint32Value();
	const float beta = info[6]->NumberValue();
	float *y = reinterpret_cast<float*>(info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[8]->Uint32Value();
	cblas_sspmv(CblasRowMajor, uplo, n, alpha, ap, x, inc_x, beta, y, inc_y);
}
