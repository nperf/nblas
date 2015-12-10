#ifndef SPR2_H
#define SPR2_H

#include <nan.h>

NAN_METHOD(dspr2);
extern "C" void cblas_dspr2 (
	const int,
	const int,
	const int,
	const double,
	const double*,
	const int,
	const double*,
	const int,
	const double*
);

NAN_METHOD(sspr2);
extern "C" void cblas_sspr2 (
	const int,
	const int,
	const int,
	const float,
	const float*,
	const int,
	const float*,
	const int,
	const float*
);

#endif
