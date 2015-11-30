#ifndef SYR2K_H
#define SYR2K_H

#include <nan.h>

NAN_METHOD(dsyr2k);
extern "C" void cblas_dsyr2k (
	const int,
	const int,
	const int,
	const int,
	const double,
	const double*,
	const int,
	const double*,
	const int,
	const double,
	const double*,
	const int
);

NAN_METHOD(ssyr2k);
extern "C" void cblas_ssyr2k (
	const int,
	const int,
	const int,
	const int,
	const float,
	const float*,
	const int,
	const float*,
	const int,
	const float,
	const float*,
	const int
);

#endif
