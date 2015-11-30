#include "potrf.h"

NAN_METHOD(dpotrf) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	assert(info[2]->IsFloat64Array());
	void *a_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[3]->Uint32Value();
	int **i = NULL;
	clapack_dpotrf(uplo, n, a, lda, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

NAN_METHOD(spotrf) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	assert(info[2]->IsFloat32Array());
	void *a_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	unsigned int lda = info[3]->Uint32Value();
	int **i = NULL;
	clapack_spotrf(uplo, n, a, lda, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

