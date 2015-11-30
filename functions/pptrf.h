#ifndef PPTRF_H
#define PPTRF_H

#include <nan.h>

NAN_METHOD(dpptrf);
extern "C" int clapack_dpptrf (
	const int,
	const int,
	const double*,
	int**
);

NAN_METHOD(spptrf);
extern "C" int clapack_spptrf (
	const int,
	const int,
	const float*,
	int**
);

#endif