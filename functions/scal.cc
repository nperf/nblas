#include "cblas.h"
#include "decl.h"

NAN_METHOD(dscal) {
	const int n = info[0]->Uint32Value();
	const double alpha = info[1]->NumberValue();
	double *x = reinterpret_cast<double*>(info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[3]->Uint32Value();
	cblas_dscal(n, alpha, x, inc_x);
}

NAN_METHOD(sscal) {
	const int n = info[0]->Uint32Value();
	const float alpha = info[1]->NumberValue();
	float *x = reinterpret_cast<float*>(info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data());
	const int inc_x = info[3]->Uint32Value();
	cblas_sscal(n, alpha, x, inc_x);
}
