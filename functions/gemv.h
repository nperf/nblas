#ifndef GEMV_H
#define GEMV_H

#include <nan.h>

NAN_METHOD(dgemv);
extern "C" void cblas_dgemv (
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

NAN_METHOD(sgemv);
extern "C" void cblas_sgemv (
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
