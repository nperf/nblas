#include "pftrf.h"

NAN_METHOD(dpftrf) {
	unsigned int transr = info[0]->Uint32Value();
	unsigned int uplo = info[1]->Uint32Value();
	unsigned int n = info[2]->Uint32Value();
	assert(info[3]->IsFloat64Array());
	void *a_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	int **i = NULL;
	clapack_dpftrf(transr, uplo, n, a, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

NAN_METHOD(spftrf) {
	unsigned int transr = info[0]->Uint32Value();
	unsigned int uplo = info[1]->Uint32Value();
	unsigned int n = info[2]->Uint32Value();
	assert(info[3]->IsFloat64Array());
	void *a_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	int **i = NULL;
	clapack_spftrf(transr, uplo, n, a, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

