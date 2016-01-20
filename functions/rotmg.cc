#include "cblas.h"
#include "decl.h"

NAN_METHOD(drotmg) {
	assert(info[0]->IsFloat64Array());
	void *d1_data = info[0].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *d1 = reinterpret_cast<double*>(d1_data);
	assert(info[1]->IsFloat64Array());
	void *d2_data = info[1].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *d2 = reinterpret_cast<double*>(d2_data);
	assert(info[2]->IsFloat64Array());
	void *b1_data = info[2].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *b1 = reinterpret_cast<double*>(b1_data);
	const double b2 = info[3]->NumberValue();
	void *param_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *param = reinterpret_cast<double*>(param_data);
	cblas_drotmg(d1, d2, b1, b2, param);
}

NAN_METHOD(srotmg) {
	assert(info[0]->IsFloat32Array());
	void *d1_data = info[0].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *d1 = reinterpret_cast<float*>(d1_data);
	assert(info[1]->IsFloat32Array());
	void *d2_data = info[1].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *d2 = reinterpret_cast<float*>(d2_data);
	assert(info[2]->IsFloat32Array());
	void *b1_data = info[2].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *b1 = reinterpret_cast<float*>(b1_data);
	const float b2 = info[3]->NumberValue();
	void *param_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *param = reinterpret_cast<float*>(param_data);
	cblas_srotmg(d1, d2, b1, b2, param);
}
