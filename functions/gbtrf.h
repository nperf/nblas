#ifndef GBTRF_H
#define GBTRF_H

#include <nan.h>

NAN_METHOD(dgbtrf);
extern "C" void clapack_dgbtrf (
	const int,
	const int,
	const int,
	const int,
	const double*,
	const int,
	const int*,
	int**
);

NAN_METHOD(sgbtrf);
extern "C" void clapack_sgbtrf (
	const int,
	const int,
	const int,
	const int,
	const double*,
	const int,
	const int*,
	int**
);

#endif