{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "addon.cc",
        "functions/sdot.cc",
        "functions/ddot.cc",
        "functions/daxpy.cc",
        "functions/saxpy.cc",
        "functions/dscal.cc",
        "functions/sscal.cc"
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
