#ifndef TRMM_H
#define TRMM_H

#include <nan.h>

NAN_METHOD(dtrmm);
extern "C" void cblas_dtrmm (
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
	const int
);

NAN_METHOD(strmm);
extern "C" void cblas_strmm (
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
	const int
);

#endif
