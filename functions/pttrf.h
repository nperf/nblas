#ifndef PTTRF_H
#define PTTRF_H

#include <nan.h>

NAN_METHOD(dpttrf);
extern "C" int clapack_dpttrf (
	const int,
	const double*,
	const double*,
	int**
);

NAN_METHOD(spttrf);
extern "C" int clapack_spttrf (
	const int,
	const float*,
	const float*,
	int**
);

#endif