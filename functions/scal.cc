#include "cblas.h"
#include "decl.h"

NAN_METHOD(dscal) {
	const int n = info[0]->Uint32Value();
	const double alpha = info[1]->NumberValue();
	assert(info[2]->IsFloat64Array());
	void *x_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	const int inc_x = info[3]->Uint32Value();
	cblas_dscal(n, alpha, x, inc_x);
}

NAN_METHOD(sscal) {
	const int n = info[0]->Uint32Value();
	const float alpha = info[1]->NumberValue();
	assert(info[2]->IsFloat32Array());
	void *x_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	const int inc_x = info[3]->Uint32Value();
	cblas_sscal(n, alpha, x, inc_x);
}
