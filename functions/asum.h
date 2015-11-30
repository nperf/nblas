#ifndef ASUM_H
#define ASUM_H

#include <nan.h>

NAN_METHOD(dasum);
extern "C" double cblas_dasum (
	const int,
	const double*,
	const int
);

NAN_METHOD(sasum);
extern "C" float cblas_sasum (
	const int,
	const float*,
	const int
);

#endif
