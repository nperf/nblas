#ifndef SBMV_H
#define SBMV_H

#include <nan.h>

NAN_METHOD(dsbmv);
extern "C" void cblas_dsbmv (
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

NAN_METHOD(ssbmv);
extern "C" void cblas_ssbmv (
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
