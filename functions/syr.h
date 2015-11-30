#ifndef SYR_H
#define SYR_H

#include <nan.h>

NAN_METHOD(dsyr);
extern "C" void cblas_dsyr (
	const int,
	const int,
	const int,
	const double,
	const double*,
	const int,
	const double,
	const int
);

NAN_METHOD(ssyr);
extern "C" void cblas_ssyr (
	const int,
	const int,
	const int,
	const float,
	const float*,
	const int,
	const float,
	const int
);

#endif
