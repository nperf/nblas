#ifndef GEMM_H
#define GEMM_H

#include <nan.h>

NAN_METHOD(dgemm);
extern "C" void cblas_dgemm (
	const int,
	const int,
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

NAN_METHOD(sgemm);
extern "C" void cblas_sgemm (
	const int,
	const int,
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
