#include "getrf.h"

NAN_METHOD(dgetrf) {
	unsigned int m = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	assert(info[2]->IsFloat64Array());
	void *a_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[3]->Uint32Value();
	void *ipiv_data = info[4].As<v8::Int32Array>()->Buffer()->GetContents().Data();
	int *ipiv = reinterpret_cast<int*>(ipiv_data);
	int **i = NULL;
	clapack_dgetrf(m, n, a, lda, ipiv, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

NAN_METHOD(sgetrf) {
	unsigned int m = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	assert(info[2]->IsFloat32Array());
	void *a_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[3]->Uint32Value();
	void *ipiv_data = info[4].As<v8::Int32Array>()->Buffer()->GetContents().Data();
	int *ipiv = reinterpret_cast<int*>(ipiv_data);
	int **i = NULL;
	clapack_sgetrf(m, n, a, lda, ipiv, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}
