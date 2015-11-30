#ifndef ROTMG_H
#define ROTMG_H

#include <nan.h>

NAN_METHOD(drotmg);
extern "C" void cblas_drotmg (
	const double,
	const double,
	const double,
	const double,
	const double*
);

NAN_METHOD(srotmg);
extern "C" void cblas_srotmg (
	const float,
	const float,
	const float,
	const float,
	const float*
);

#endif
