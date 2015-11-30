#ifndef COPY_H
#define COPY_H

#include <nan.h>

NAN_METHOD(dcopy);
extern "C" void cblas_dcopy (
	const int,
	const double*,
	const int,
	const double*,
	const int
);

NAN_METHOD(scopy);
extern "C" void cblas_scopy (
	const int,
	const float*,
	const int,
	const float*,
	const int
);

#endif
