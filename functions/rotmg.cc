#include "rotmg.h"

NAN_METHOD(drotmg) {
	double d1 = info[0]->NumberValue();
	double d2 = info[1]->NumberValue();
	double x1 = info[2]->NumberValue();
	double y1 = info[3]->NumberValue();
	void *param_data = info[5].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *param = reinterpret_cast<double*>(param_data);
	cblas_drotmg(d1, d2, x1, y1, param);
}

NAN_METHOD(srotmg) {
	float d1 = info[0]->NumberValue();
	float d2 = info[1]->NumberValue();
	float x1 = info[2]->NumberValue();
	float y1 = info[3]->NumberValue();
	void *param_data = info[5].As<v8::Float32Array>()->Buffer()->GetContents().Data();
	float *param = reinterpret_cast<float*>(param_data);
	cblas_srotmg(d1, d2, x1, y1, param);
}
