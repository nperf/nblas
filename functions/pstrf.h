#ifndef PSTRF_H
#define PSTRF_H

#include <nan.h>

NAN_METHOD(dpstrf);
extern "C" int clapack_dpstrf (
	const int,
	const int,
	const double*,
	const int,
	const int*,
	const int,
	const double,
	const double*,
	int**
);

NAN_METHOD(spstrf);
extern "C" int clapack_spstrf (
	const int,
	const int,
	const float*,
	const int,
	const int*,
	const int,
	const float,
	const float*,
	int**
);

#endif
