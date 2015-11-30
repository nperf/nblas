#ifndef DTTRFB_H
#define DTTRFB_H

#include <nan.h>

NAN_METHOD(ddttrfb);
extern "C" int clapack_ddttrfb (
	const int,
	const double*,
	const double*,
	const double*,
	int**
);

NAN_METHOD(sdttrfb);
extern "C" int clapack_sdttrfb (
	const int,
	const float*,
	const float*,
	const float*,
	int**
);

#endif