#include "cblas.h"
#include "routines.h"

void dgbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0]->Uint32Value());
	const int m = info[1]->Uint32Value();
	const int n = info[2]->Uint32Value();
	const int kl = info[3]->Uint32Value();
	const int ku = info[4]->Uint32Value();
	const double alpha = info[5]->NumberValue();
	const double *a = reinterpret_cast<double*>(GET_CONTENTS(info[6].As<v8::Float64Array>()));
	const int lda = info[7]->Uint32Value();
	const double *x = reinterpret_cast<double*>(GET_CONTENTS(info[8].As<v8::Float64Array>()));
	const int inc_x = info[9]->Uint32Value();
	const double beta = info[10]->NumberValue();
	double *y = reinterpret_cast<double*>(info[11].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[12]->Uint32Value();
	cblas_dgbmv(CblasRowMajor, trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}

void sgbmv(const v8::FunctionCallbackInfo<v8::Value>& info) {
	const enum CBLAS_TRANSPOSE trans = static_cast<CBLAS_TRANSPOSE>(info[0]->Uint32Value());
	const int m = info[1]->Uint32Value();
	const int n = info[2]->Uint32Value();
	const int kl = info[3]->Uint32Value();
	const int ku = info[4]->Uint32Value();
	const float alpha = info[5]->NumberValue();
	const float *a = reinterpret_cast<float*>(GET_CONTENTS(info[6].As<v8::Float32Array>()));
	const int lda = info[7]->Uint32Value();
	const float *x = reinterpret_cast<float*>(GET_CONTENTS(info[8].As<v8::Float32Array>()));
	const int inc_x = info[9]->Uint32Value();
	const float beta = info[10]->NumberValue();
	float *y = reinterpret_cast<float*>(info[11].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[12]->Uint32Value();
	cblas_sgbmv(CblasRowMajor, trans, m, n, kl, ku, alpha, a, lda, x, inc_x, beta, y, inc_y);
}
