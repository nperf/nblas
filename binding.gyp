{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "addon.cc",
        "functions/asum.cc",
        "functions/axpy.cc",
        "functions/copy.cc",
        "functions/dot.cc",
        "functions/sdot.cc",
        "functions/nrm2.cc",
        "functions/rot.cc",
        "functions/rotg.cc",
        "functions/rotm.cc",
        "functions/rotmg.cc",
        "functions/scal.cc",
        "functions/swap.cc",
        "functions/iamax.cc",
        "functions/gbmv.cc",
        "functions/gemv.cc",
        "functions/ger.cc",
        "functions/sbmv.cc",
        "functions/spmv.cc",
        "functions/spr.cc",
        "functions/spr2.cc",
        "functions/symv.cc",
        "functions/syr.cc",
        "functions/syr2.cc",
        "functions/tbmv.cc",
        "functions/tbsv.cc",
        "functions/tpmv.cc",
        "functions/tpsv.cc",
        "functions/trmv.cc",
        "functions/trsv.cc",
        "functions/gemm.cc",
        "functions/symm.cc",
        "functions/syrk.cc",
        "functions/syr2k.cc",
        "functions/trmm.cc",
        "functions/trsm.cc"
      ],
      "include_dirs" : [
        "<!(node -e \"require('nan')\")"
      ],
      "libraries": [
        "-lblas"
      ]
    }
  ]
}
