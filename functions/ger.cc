#include "ger.h"

NAN_METHOD(dger) {
	unsigned int m = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	double alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat64Array());
	void *x_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[4]->Uint32Value();
	unsigned int inc_y = info[5]->Uint32Value();
	double a = info[6]->NumberValue();
	unsigned int lda = info[7]->Uint32Value();
	cblas_dger(101, m, n, alpha, x, inc_x, inc_y, a, lda);
}

NAN_METHOD(sger) {
	unsigned int m = info[0]->Uint32Value();
	unsigned int n = info[1]->Uint32Value();
	double alpha = info[2]->NumberValue();
	assert(info[3]->IsFloat64Array());
	void *x_data = info[3].As<v8::Float64Array>()->Buffer()->GetContents().Data();
	double *x = reinterpret_cast<double*>(x_data);
	unsigned int inc_x = info[4]->Uint32Value();
	unsigned int inc_y = info[5]->Uint32Value();
	double a = info[6]->NumberValue();
	unsigned int lda = info[7]->Uint32Value();
	cblas_sger(101, m, n, alpha, x, inc_x, inc_y, a, lda);
}
