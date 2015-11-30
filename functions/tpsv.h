#ifndef TPSV_H
#define TPSV_H

#include <nan.h>

NAN_METHOD(dtpsv);
extern "C" void cblas_dtpsv (
	const int,
	const int,
	const int,
	const int,
	const int,
	const double*,
	const double*,
	const int
);

NAN_METHOD(stpsv);
extern "C" void cblas_stpsv (
	const int,
	const int,
	const int,
	const int,
	const int,
	const float*,
	const float*,
	const int
);

#endif
