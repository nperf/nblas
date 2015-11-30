#ifndef SDOT_H
#define SDOT_H

#include <nan.h>

NAN_METHOD(dsdot);
extern "C" double cblas_dsdot (
	const int,
	const float*,
	const int,
	const float*,
	const int
);

NAN_METHOD(sdsdot);
extern "C" double cblas_sdsdot (
	const int,
	const float,
	const float*,
	const int,
	const float*,
	const int
);

#endif
