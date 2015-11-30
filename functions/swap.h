#ifndef SWAP_H
#define SWAP_H

#include <nan.h>

NAN_METHOD(dswap);
extern "C" void cblas_dswap (
	const int,
	const double*,
	const int,
	const double*,
	const int
);

NAN_METHOD(sswap);
extern "C" void cblas_sswap (
	const int,
	const float*,
	const int,
	const float*,
	const int
);

#endif
