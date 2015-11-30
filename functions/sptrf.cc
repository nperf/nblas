#include "sptrf.h"

NAN_METHOD(dsptrf) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	assert(info[2]->IsFloat64Array());
	void *ap_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *ap = reinterpret_cast<double*>(ap_data);
	assert(info[3]->IsInt32Array());
	void *ipiv_data = info[3].As<v8::Int32Array>()->Buffer()->GetContents().Data();
	int *ipiv = reinterpret_cast<int*>(ipiv_data);
	int **i = NULL;
	clapack_dsptrf(uplo, n, ap, ipiv, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

NAN_METHOD(ssptrf) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	assert(info[2]->IsFloat32Array());
	void *ap_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *ap = reinterpret_cast<float*>(ap_data);
	assert(info[3]->IsInt32Array());
	void *ipiv_data = info[3].As<v8::Int32Array>()->Buffer()->GetContents().Data();
	int *ipiv = reinterpret_cast<int*>(ipiv_data);
	int **i = NULL;
	clapack_ssptrf(uplo, n, ap, ipiv, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

