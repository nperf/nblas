#include "tpsv.h"

NAN_METHOD(dtpsv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int trans = info[1]->Uint32Value();
	unsigned int diag = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	assert(info[4]->IsFloat64Array());
	void *ap_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *ap = reinterpret_cast<double*>(ap_data);
	assert(info[5]->IsFloat64Array());
	void *x_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[6]->Uint32Value();
	cblas_dtpsv(101, uplo, trans, diag, n, ap, x, inc_x);
}

NAN_METHOD(stpsv) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int trans = info[1]->Uint32Value();
	unsigned int diag = info[2]->Uint32Value();
	unsigned int n = info[3]->Uint32Value();
	assert(info[4]->IsFloat32Array());
	void *ap_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *ap = reinterpret_cast<float*>(ap_data);
	assert(info[5]->IsFloat32Array());
	void *x_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *x = reinterpret_cast<float*>(x_data);
	unsigned int inc_x = info[6]->Uint32Value();
	cblas_stpsv(101, uplo, trans, diag, n, ap, x, inc_x);
}
