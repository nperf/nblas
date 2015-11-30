#ifndef TPMV_H
#define TPMV_H

#include <nan.h>

NAN_METHOD(dtpmv);
extern "C" void cblas_dtpmv (
	const int,
	const int,
	const int,
	const int,
	const double*,
	const double*,
	const int
);

NAN_METHOD(stpmv);
extern "C" void cblas_stpmv (
	const int,
	const int,
	const int,
	const int,
	const float*,
	const float*,
	const int
);

#endif
