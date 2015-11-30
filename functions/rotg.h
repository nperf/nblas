#ifndef ROTG_H
#define ROTG_H

#include <nan.h>

NAN_METHOD(drotg);
extern "C" void cblas_drotg (
	const double,
	const double,
	const double,
	const double
);

NAN_METHOD(srotg);
extern "C" void cblas_srotg (
	const float,
	const float,
	const float,
	const float
);

#endif
