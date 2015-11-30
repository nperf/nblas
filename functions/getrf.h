#ifndef GETRF_H
#define GETRF_H

#include <nan.h>

NAN_METHOD(dgetrf);
extern "C" int clapack_dgetrf (
	const int,
	const int,
	const double*,
	const int,
	const int*,
	int**
);

NAN_METHOD(sgetrf);
extern "C" int clapack_sgetrf (
	const int,
	const int,
	const float*,
	const int,
	const int*,
	int**
);

#endif
