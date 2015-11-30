#ifndef SYTRF_H
#define SYTRF_H

#include <nan.h>

NAN_METHOD(dsytrf);
extern "C" int clapack_dsytrf (
	const int,
	const int,
	const double*,
	const int,
	const int*,
	const double*,
	const int,
	int**
);

NAN_METHOD(ssytrf);
extern "C" int clapack_ssytrf (
	const int,
	const int,
	const double*,
	const int,
	const int*,
	const double*,
	const int,
	int**
);

#endif