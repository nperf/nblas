#ifndef PFTRF_H
#define PFTRF_H

#include <nan.h>

NAN_METHOD(dpftrf);
extern "C" int clapack_dpftrf (
	const int,
	const int,
	const int,
	const double*,
	int**
);

NAN_METHOD(spftrf);
extern "C" int clapack_spftrf (
	const int,
	const int,
	const int,
	const double*,
	int**
);

#endif