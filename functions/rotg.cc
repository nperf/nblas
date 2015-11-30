#include "rotg.h"

NAN_METHOD(drotg) {
	double a = info[0]->NumberValue();
	double b = info[1]->NumberValue();
	double c = info[2]->NumberValue();
	double s = info[3]->NumberValue();
	cblas_drotg(a, b, c, s);
}

NAN_METHOD(srotg) {
	float a = info[0]->NumberValue();
	float b = info[1]->NumberValue();
	float c = info[2]->NumberValue();
	float s = info[3]->NumberValue();
	cblas_srotg(a, b, c, s);
}
