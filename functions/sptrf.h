#ifndef SPTRF_H
#define SPTRF_H

#include <nan.h>

NAN_METHOD(dsptrf);
extern "C" int clapack_dsptrf (
	const int,
	const int,
	const double*,
	const int*,
	int**
);

NAN_METHOD(ssptrf);
extern "C" int clapack_ssptrf (
	const int,
	const int,
	const float*,
	const int*,
	int**
);

#endif