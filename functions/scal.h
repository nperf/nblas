#ifndef SCAL_H
#define SCAL_H

#include <nan.h>

NAN_METHOD(dscal);
extern "C" void cblas_dscal (
	const int,
	const double,
	const double*,
	const int
);

NAN_METHOD(sscal);
extern "C" void cblas_sscal (
	const int,
	const float,
	const float*,
	const int
);

#endif
