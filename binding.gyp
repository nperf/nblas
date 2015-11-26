{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "addon.cc",
        "functions/dot.cc",
        "functions/axpy.cc",
        "functions/scal.cc",
        "functions/copy.cc",
        "functions/swap.cc",
        "functions/iamax.cc",
        "functions/asum.cc",
        "functions/nrm2.cc"
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
