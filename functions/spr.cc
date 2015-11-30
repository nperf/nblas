#include "spr.h"

NAN_METHOD(dspr) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	double alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat64Array());
	void *x_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[4]->Uint32Value();
	double ap = info[5]->NumberValue();
	cblas_dspr(uplo, n, alpha, x, inc_x, ap);
}

NAN_METHOD(sspr) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	float alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat32Array());
	void *x_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[4]->Uint32Value();
	float ap = info[5]->NumberValue();
	cblas_sspr(uplo, n, alpha, x, inc_x, ap);
}
