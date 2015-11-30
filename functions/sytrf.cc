#include "sytrf.h"

NAN_METHOD(dsytrf) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	assert(info[2]->IsFloat64Array());
	void *a_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[3]->Uint32Value();
	assert(info[4]->IsInt32Array());
	void *ipiv_data = info[4].As<v8::Int32Array>()->Buffer()->GetContents().Data();
	int *ipiv = reinterpret_cast<int*>(ipiv_data);
	assert(info[5]->IsFloat64Array());
	void *work_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *work = reinterpret_cast<double*>(work_data);
	unsigned int lwork = info[6]->Uint32Value();
	int **i = NULL;
	clapack_dsytrf(uplo, n, a, lda, ipiv, work, lwork, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

NAN_METHOD(ssytrf) {
	unsigned int uplo = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	assert(info[2]->IsFloat64Array());
	void *a_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	unsigned int lda = info[3]->Uint32Value();
	assert(info[4]->IsInt32Array());
	void *ipiv_data = info[4].As<v8::Int32Array>()->Buffer()->GetContents().Data();
	int *ipiv = reinterpret_cast<int*>(ipiv_data);
	assert(info[5]->IsFloat64Array());
	void *work_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *work = reinterpret_cast<double*>(work_data);
	unsigned int lwork = info[6]->Uint32Value();
	int **i = NULL;
	clapack_ssytrf(uplo, n, a, lda, ipiv, work, lwork, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

