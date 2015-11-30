#ifndef TRSM_H
#define TRSM_H

#include <nan.h>

NAN_METHOD(dtrsm);
extern "C" void cblas_dtrsm (
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

NAN_METHOD(strsm);
extern "C" void cblas_strsm (
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
