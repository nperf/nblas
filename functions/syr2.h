#ifndef SYR2_H
#define SYR2_H

#include <nan.h>

NAN_METHOD(dsyr2);
extern "C" void cblas_dsyr2 (
	const int,
	const int,
	const int,
	const double,
	const double*,
	const int,
	const double*,
	const int,
	const double*,
	const int
);

NAN_METHOD(ssyr2);
extern "C" void cblas_ssyr2 (
	const int,
	const int,
	const int,
	const float,
	const float*,
	const int,
	const float*,
	const int,
	const float*,
	const int
);

#endif
