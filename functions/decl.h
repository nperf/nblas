#ifndef DECL_H
#define DECL_H

#include <nan.h>

// BLAS Level 1 routines
NAN_METHOD(dasum); NAN_METHOD(sasum);
NAN_METHOD(daxpy); NAN_METHOD(saxpy);
NAN_METHOD(dcopy); NAN_METHOD(scopy);
NAN_METHOD(ddot); NAN_METHOD(sdot);
NAN_METHOD(dsdot); NAN_METHOD(sdsdot);
NAN_METHOD(dnrm2); NAN_METHOD(snrm2);
NAN_METHOD(drot); NAN_METHOD(srot);
NAN_METHOD(drotg); NAN_METHOD(srotg);
NAN_METHOD(drotm); NAN_METHOD(srotm);
NAN_METHOD(drotmg); NAN_METHOD(srotmg);
NAN_METHOD(dscal); NAN_METHOD(sscal);
NAN_METHOD(dswap); NAN_METHOD(sswap);
NAN_METHOD(idamax); NAN_METHOD(isamax);

// BLAS Level 2 routines
NAN_METHOD(dgbmv); NAN_METHOD(sgbmv);
NAN_METHOD(dgemv); NAN_METHOD(sgemv);
NAN_METHOD(dger); NAN_METHOD(sger);
NAN_METHOD(dsbmv); NAN_METHOD(ssbmv);
NAN_METHOD(dspmv); NAN_METHOD(sspmv);
NAN_METHOD(dspr); NAN_METHOD(sspr);
NAN_METHOD(dspr2); NAN_METHOD(sspr2);
NAN_METHOD(dsymv); NAN_METHOD(ssymv);
NAN_METHOD(dsyr); NAN_METHOD(ssyr);
NAN_METHOD(dsyr2); NAN_METHOD(ssyr2);
NAN_METHOD(dtbmv); NAN_METHOD(stbmv);
NAN_METHOD(dtbsv); NAN_METHOD(stbsv);
NAN_METHOD(dtpmv); NAN_METHOD(stpmv);
NAN_METHOD(dtpsv); NAN_METHOD(stpsv);
NAN_METHOD(dtrmv); NAN_METHOD(strmv);
NAN_METHOD(dtrsv); NAN_METHOD(strsv);

// BLAS Level 3 routines
NAN_METHOD(dgemm); NAN_METHOD(sgemm);
NAN_METHOD(dsymm); NAN_METHOD(ssymm);
NAN_METHOD(dsyrk); NAN_METHOD(ssyrk);
NAN_METHOD(dsyr2k); NAN_METHOD(ssyr2k);
NAN_METHOD(dtrmm); NAN_METHOD(strmm);
NAN_METHOD(dtrsm); NAN_METHOD(strsm);

#endif
