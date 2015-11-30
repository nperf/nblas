#ifndef ROT_H
#define ROT_H

#include <nan.h>

NAN_METHOD(drot);
extern "C" void cblas_drot (
	const int,
	const double*,
	const int,
	const double*,
	const int,
	const double
);

NAN_METHOD(srot);
extern "C" void cblas_srot (
	const int,
	const float*,
	const int,
	const float*,
	const int,
	const float
);

#endif
