#ifndef TBSV_H
#define TBSV_H

#include <nan.h>

NAN_METHOD(dtbsv);
extern "C" void cblas_dtbsv (
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

NAN_METHOD(stbsv);
extern "C" void cblas_stbsv (
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
