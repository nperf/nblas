#ifndef GTTRF_H
#define GTTRF_H

#include <nan.h>

NAN_METHOD(dgttrf);
extern "C" int clapack_dgttrf (
	const int,
	const double*,
	const double*,
	const double*,
	const double*,
	const int*,
	int**
);

NAN_METHOD(sgttrf);
extern "C" int clapack_sgttrf (
	const int,
	const float*,
	const float*,
	const float*,
	const float*,
	const int*,
	int**
);

#endif