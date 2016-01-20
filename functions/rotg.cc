#include "cblas.h"
#include "decl.h"

NAN_METHOD(drotg) {
	assert(info[0]->IsFloat64Array());
	void *a_data = info[0].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *a = reinterpret_cast<double*>(a_data);
	assert(info[1]->IsFloat64Array());
	void *b_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *b = reinterpret_cast<double*>(b_data);
	assert(info[2]->IsFloat64Array());
	void *c_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *c = reinterpret_cast<double*>(c_data);
	assert(info[3]->IsFloat64Array());
	void *s_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *s = reinterpret_cast<double*>(s_data);
	cblas_drotg(a, b, c, s);
}

NAN_METHOD(srotg) {
	assert(info[0]->IsFloat32Array());
	void *a_data = info[0].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *a = reinterpret_cast<float*>(a_data);
	assert(info[1]->IsFloat32Array());
	void *b_data = info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *b = reinterpret_cast<float*>(b_data);
	assert(info[2]->IsFloat32Array());
	void *c_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *c = reinterpret_cast<float*>(c_data);
	assert(info[3]->IsFloat32Array());
	void *s_data = info[3].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *s = reinterpret_cast<float*>(s_data);
	cblas_srotg(a, b, c, s);
}
