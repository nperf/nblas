#ifndef DOT_H
#define DOT_H

#include <nan.h>

NAN_METHOD(ddot);
extern "C" double cblas_ddot (
	const int,
	const double*,
	const int,
	const double*,
	const int
);

NAN_METHOD(sdot);
extern "C" float cblas_sdot (
	const int,
	const float*,
	const int,
	const float*,
	const int
);

#endif
