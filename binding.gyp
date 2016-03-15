{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "addon.cc",
        "routines/level1/asum.cc",
        "routines/level1/axpy.cc",
        "routines/level1/copy.cc",
        "routines/level1/dot.cc",
        "routines/level1/sdot.cc",
        "routines/level1/nrm2.cc",
        "routines/level1/rot.cc",
        "routines/level1/rotg.cc",
        "routines/level1/rotm.cc",
        "routines/level1/rotmg.cc",
        "routines/level1/scal.cc",
        "routines/level1/swap.cc",
        "routines/level1/iamax.cc",
        "routines/level2/gbmv.cc",
        "routines/level2/gemv.cc",
        "routines/level2/ger.cc",
        "routines/level2/sbmv.cc",
        "routines/level2/spmv.cc",
        "routines/level2/spr.cc",
        "routines/level2/spr2.cc",
        "routines/level2/symv.cc",
        "routines/level2/syr.cc",
        "routines/level2/syr2.cc",
        "routines/level2/tbmv.cc",
        "routines/level2/tbsv.cc",
        "routines/level2/tpmv.cc",
        "routines/level2/tpsv.cc",
        "routines/level2/trmv.cc",
        "routines/level2/trsv.cc",
        "routines/level3/gemm.cc",
        "routines/level3/symm.cc",
        "routines/level3/syrk.cc",
        "routines/level3/syr2k.cc",
        "routines/level3/trmm.cc",
        "routines/level3/trsm.cc"
      ],
      "include_dirs" : [
        "lib"
      ],
      "libraries": [
        "-lblas"
      ]
    }
  ]
}
