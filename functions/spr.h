#ifndef SPR_H
#define SPR_H

#include <nan.h>

NAN_METHOD(dspr);
extern "C" void cblas_dspr (
	const int,
	const int,
	const int,
	const double,
	const double*,
	const int,
	const double*
);

NAN_METHOD(sspr);
extern "C" void cblas_sspr (
	const int,
	const int,
	const int,
	const float,
	const float*,
	const int,
	const float*
);

#endif
