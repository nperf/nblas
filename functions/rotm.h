#ifndef ROTM_H
#define ROTM_H

#include <nan.h>

NAN_METHOD(drotm);
extern "C" void cblas_drotm (
	const int,
	const double*,
	const int,
	const double*,
	const int,
	const double
);

NAN_METHOD(srotm);
extern "C" void cblas_srotm (
	const int,
	const float*,
	const int,
	const float*,
	const int,
	const float
);

#endif
