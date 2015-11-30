#ifndef TRSV_H
#define TRSV_H

#include <nan.h>

NAN_METHOD(dtrsv);
extern "C" void cblas_dtrsv (
	const int,
	const int,
	const int,
	const int,
	const double*,
	const int,
	const double*,
	const int
);

NAN_METHOD(strsv);
extern "C" void cblas_strsv (
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
