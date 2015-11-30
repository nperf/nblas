#ifndef TBMV_H
#define TBMV_H

#include <nan.h>

NAN_METHOD(dtbmv);
extern "C" void cblas_dtbmv (
	const int,
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

NAN_METHOD(stbmv);
extern "C" void cblas_stbmv (
	const int,
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
