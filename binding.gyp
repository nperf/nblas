{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "addon.cc",
        "functions/sdot.cc",
        "functions/ddot.cc",
        "functions/daxpy.cc",
        "functions/saxpy.cc"
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
