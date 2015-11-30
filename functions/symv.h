#ifndef SYMV_H
#define SYMV_H

#include <nan.h>

NAN_METHOD(dsymv);
extern "C" void cblas_dsymv (
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

NAN_METHOD(ssymv);
extern "C" void cblas_ssymv (
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
