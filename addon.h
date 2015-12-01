#ifndef ADDON_H
#define ADDON_H

#include <nan.h>

// BLAS Level 1 routines
#include "functions/asum.h"
#include "functions/axpy.h"
#include "functions/copy.h"
#include "functions/dot.h"
#include "functions/sdot.h"
#include "functions/nrm2.h"
#include "functions/rot.h"
#include "functions/rotg.h"
#include "functions/rotm.h"
#include "functions/rotmg.h"
#include "functions/scal.h"
#include "functions/swap.h"
#include "functions/iamax.h"

// BLAS Level 2 routines
#include "functions/gbmv.h"
#include "functions/gemv.h"
#include "functions/ger.h"
#include "functions/sbmv.h"
#include "functions/spmv.h"
#include "functions/spr.h"
#include "functions/spr2.h"
#include "functions/symv.h"
#include "functions/syr.h"
#include "functions/syr2.h"
#include "functions/tbmv.h"
#include "functions/tbsv.h"
#include "functions/tpmv.h"
#include "functions/tpsv.h"
#include "functions/trmv.h"
#include "functions/trsv.h"

// BLAS Level 3 routines
#include "functions/gemm.h"
#include "functions/symm.h"
#include "functions/syrk.h"
#include "functions/syr2k.h"
#include "functions/trmm.h"
#include "functions/trsm.h"

#endif
