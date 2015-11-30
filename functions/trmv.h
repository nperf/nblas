#ifndef TRMV_H
#define TRMV_H

#include <nan.h>

NAN_METHOD(dtrmv);
extern "C" void cblas_dtrmv (
	const int,
	const int,
	const int,
	const int,
	const int,
	const double*,
	const int,
	const double*,
	const int
);

NAN_METHOD(strmv);
extern "C" void cblas_strmv (
	const int,
	const int,
	const int,
	const int,
	const int,
	const float*,
	const int,
	const float*,
	const int
);

#endif
