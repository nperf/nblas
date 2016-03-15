#include "cblas.h"
#include "routines.h"

void dger(const v8::FunctionCallbackInfo<v8::Value>& info) {
	unsigned int m = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	const double alpha = info[2]->NumberValue();
	const double *x = reinterpret_cast<double*>(info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	unsigned int inc_x = info[4]->Uint32Value();
	const double *y = reinterpret_cast<double*>(info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	unsigned int inc_y = info[6]->Uint32Value();
	double *a = reinterpret_cast<double*>(info[7].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	unsigned int lda = info[8]->Uint32Value();
	cblas_dger(CblasRowMajor, m, n, alpha, x, inc_x, y, inc_y, a, lda);
}

void sger(const v8::FunctionCallbackInfo<v8::Value>& info) {
	unsigned int m = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	const float alpha = info[2]->NumberValue();
	const float *x = reinterpret_cast<float*>(info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	unsigned int inc_x = info[4]->Uint32Value();
	const float *y = reinterpret_cast<float*>(info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	unsigned int inc_y = info[6]->Uint32Value();
	float *a = reinterpret_cast<float*>(info[7].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	unsigned int lda = info[8]->Uint32Value();
	cblas_sger(CblasRowMajor, m, n, alpha, x, inc_x, y, inc_y, a, lda);
}
