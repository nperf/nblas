#ifndef SYMM_H
#define SYMM_H

#include <nan.h>

NAN_METHOD(dsymm);
extern "C" void cblas_dsymm (
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

NAN_METHOD(ssymm);
extern "C" void cblas_ssymm (
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
