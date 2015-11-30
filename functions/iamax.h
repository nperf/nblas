#ifndef IAMAX_H
#define IAMAX_H

#include <nan.h>

NAN_METHOD(idamax);
extern "C" int cblas_idamax (
	const int,
	const double*,
	const int
);

NAN_METHOD(isamax);
extern "C" int cblas_isamax (
	const int,
	const float*,
	const int
);

#endif
