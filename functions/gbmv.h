#ifndef GBMV_H
#define GBMV_H

#include <nan.h>

NAN_METHOD(dgbmv);
extern "C" void cblas_dgbmv (
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

NAN_METHOD(sgbmv);
extern "C" void cblas_sgbmv (
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
