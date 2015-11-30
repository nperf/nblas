#ifndef IAMIN_H
#define IAMIN_H

#include <nan.h>

NAN_METHOD(idamin);
extern "C" int cblas_idamin (
	const int,
	const double*,
	const int
);

NAN_METHOD(isamin);
extern "C" int cblas_isamin (
	const int,
	const float*,
	const int
);

#endif
