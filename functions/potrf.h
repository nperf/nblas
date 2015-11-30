#ifndef POTRF_H
#define POTRF_H

#include <nan.h>

NAN_METHOD(dpotrf);
extern "C" int clapack_dpotrf (
	const int,
	const int,
	const double*,
	const int,
	int**
);

NAN_METHOD(spotrf);
extern "C" int clapack_spotrf (
	const int,
	const int,
	const float*,
	const int,
	int**
);

#endif