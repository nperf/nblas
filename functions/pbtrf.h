#ifndef PBTRF_H
#define PBTRF_H

#include <nan.h>

NAN_METHOD(dpbtrf);
extern "C" int clapack_dpbtrf (
	const int,
	const int,
	const int,
	const double*,
	int**
);

NAN_METHOD(spbtrf);
extern "C" int clapack_spbtrf (
	const int,
	const int,
	const int,
	const float*,
	int**
);

#endif