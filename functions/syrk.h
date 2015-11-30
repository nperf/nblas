#ifndef SYRK_H
#define SYRK_H

#include <nan.h>

NAN_METHOD(dsyrk);
extern "C" void cblas_dsyrk (
	const int,
	const int,
	const int,
	const int,
	const int,
	const double,
	const double*,
	const int,
	const double,
	const double*,
	const int
);

NAN_METHOD(ssyrk);
extern "C" void cblas_ssyrk (
	const int,
	const int,
	const int,
	const int,
	const int,
	const float,
	const float*,
	const int,
	const float,
	const float*,
	const int
);

#endif
