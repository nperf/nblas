#include "cblas.h"
#include "decl.h"

NAN_METHOD(daxpy) {
	const int n = info[0]->Uint32Value();
	const double alpha = info[1]->NumberValue();
	const double *x = reinterpret_cast<double*>(info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[3]->Uint32Value();
	double *y = reinterpret_cast<double*>(info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[5]->Uint32Value();
	cblas_daxpy(n, alpha, x, inc_x, y, inc_y);
}

NAN_METHOD(saxpy) {
	const int n = info[0]->Uint32Value();
	const float alpha = info[1]->NumberValue();
	const float *x = reinterpret_cast<float*>(info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[3]->Uint32Value();
	float *y = reinterpret_cast<float*>(info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_y = info[5]->Uint32Value();
	cblas_saxpy(n, alpha, x, inc_x, y, inc_y);
}
