#ifndef NRM2_H
#define NRM2_H

#include <nan.h>

NAN_METHOD(dnrm2);
extern "C" double cblas_dnrm2 (
	const int,
	const double*,
	const int
);

NAN_METHOD(snrm2);
extern "C" float cblas_snrm2 (
	const int,
	const float*,
	const int
);

#endif
