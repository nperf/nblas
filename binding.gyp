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
        "functions/swap.cc"
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
