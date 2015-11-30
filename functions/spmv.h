#ifndef SPMV_H
#define SPMV_H

#include <nan.h>

NAN_METHOD(dspmv);
extern "C" void cblas_dspmv (
	const int,
	const int,
	const double,
	const double*,
	const double*,
	const int,
	const double,
	const double*,
	const int
);

NAN_METHOD(sspmv);
extern "C" void cblas_sspmv (
	const int,
	const int,
	const float,
	const float*,
	const float*,
	const int,
	const float,
	const float*,
	const int
);

#endif
