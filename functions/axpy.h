#ifndef AXPY_H
#define AXPY_H

#include <nan.h>

NAN_METHOD(daxpy);
extern "C" void cblas_daxpy (
	const int,
	const double,
	const double*,
	const int,
	const double*,
	const int
);

NAN_METHOD(saxpy);
extern "C" void cblas_saxpy (
	const int,
	const float,
	const float*,
	const int,
	const float*,
	const int
);

#endif
