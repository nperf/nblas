#ifndef GER_H
#define GER_H

#include <nan.h>

NAN_METHOD(dger);
extern "C" void cblas_dger (
	const int,
	const int,
	const int,
	const double,
	const double*,
	const int,
	const int,
	const double,
	const int
);

NAN_METHOD(sger);
extern "C" void cblas_sger (
	const int,
	const int,
	const int,
	const double,
	const double*,
	const int,
	const int,
	const double,
	const int
);

#endif
