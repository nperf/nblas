{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "addon.cc",
        "functions/getrf.cc",
        "functions/gbtrf.cc",
        "functions/gttrf.cc",
        "functions/dttrfb.cc",
        "functions/potrf.cc",
        "functions/pstrf.cc",
        "functions/pftrf.cc",
        "functions/pptrf.cc",
        "functions/pbtrf.cc",
        "functions/pttrf.cc",
        "functions/sytrf.cc",
        "functions/sptrf.cc"
      ],
      "include_dirs" : [
        "<!(node -e \"require('nan')\")"
      ],
      "libraries": [
        "-llapack"
      ]
    }
  ]
}
