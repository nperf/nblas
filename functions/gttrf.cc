#include "gttrf.h"

NAN_METHOD(dgttrf) {
	unsigned int n = info[0]->Uint32Value();
	assert(info[1]->IsFloat64Array());
	void *dl_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *dl = reinterpret_cast<double*>(dl_data);
	assert(info[2]->IsFloat64Array());
	void *d_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *d = reinterpret_cast<double*>(d_data);
	assert(info[3]->IsFloat64Array());
	void *du_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *du = reinterpret_cast<double*>(du_data);
	assert(info[4]->IsFloat64Array());
	void *du2_data = info[4].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *du2 = reinterpret_cast<double*>(du2_data);
	assert(info[5]->IsInt32Array());
	void *ipiv_data = info[5].As<v8::Int32Array>()->Buffer()->GetContents().Data();
	int *ipiv = reinterpret_cast<int*>(ipiv_data);
	int **i = NULL;
	clapack_dgttrf(n, dl, d, du, du2, ipiv, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

NAN_METHOD(sgttrf) {
	unsigned int n = info[0]->Uint32Value();
	assert(info[1]->IsFloat32Array());
	void *dl_data = info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *dl = reinterpret_cast<float*>(dl_data);
	assert(info[2]->IsFloat32Array());
	void *d_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *d = reinterpret_cast<float*>(d_data);
	assert(info[3]->IsFloat32Array());
	void *du_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *du = reinterpret_cast<float*>(du_data);
	assert(info[4]->IsFloat32Array());
	void *du2_data = info[4].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *du2 = reinterpret_cast<float*>(du2_data);
	assert(info[5]->IsInt32Array());
	void *ipiv_data = info[5].As<v8::Int32Array>()->Buffer()->GetContents().Data();
	int *ipiv = reinterpret_cast<int*>(ipiv_data);
	int **i = NULL;
	clapack_sgttrf(n, dl, d, du, du2, ipiv, i);
	info.GetReturnValue().Set(
		Nan::New<v8::Number>(**i)
	);
}

