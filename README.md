# nLAPACK

Node `>=4.0` C++ bindings for all single- and double-precision CLAPACK (Linear Algebra Package) routines.

```bash
$ npm install mateogianolio/nlapack
$ npm test
```

**[LAPACK Matrix Factorization Routines](https://software.intel.com/en-us/node/468680)**
- [x] [`?getrf`](https://software.intel.com/node/42740a2c-4898-4efa-88b9-94ca6eaac4db)
- [x] [`?gbtrf`](https://software.intel.com/node/045b7e16-b40d-4440-80fb-e0e406544c5d)
- [x] [`?gttrf`](https://software.intel.com/node/20841474-62ac-440c-a4a6-4a750ebe3468)
- [x] [`?dttrfb`](https://software.intel.com/node/b6d2c49a-748a-4806-ac69-6c125c5ddc89)
- [x] [`?potrf`](https://software.intel.com/node/526c0ad5-b853-4aac-b27a-e631ee80f066)
- [x] [`?pstrf`](https://software.intel.com/node/e061ee7e-9e3a-485f-bc08-6255ea926250)
- [x] [`?pftrf`](https://software.intel.com/node/baf8fa42-4089-4a7f-b458-90579ef970f8)
- [x] [`?pptrf`](https://software.intel.com/node/a2934477-60d2-40b4-b07d-2ad982989c47)
- [x] [`?pbtrf`](https://software.intel.com/node/bc3b6a9a-6ac2-4054-aab1-f2cd32f1b051)
- [x] [`?pttrf`](https://software.intel.com/node/9ec992f0-6e90-4ae6-8a4e-b02976e4c06a)
- [x] [`?sytrf`](https://software.intel.com/node/3aae6840-280f-44c9-9865-38ad3a13285c)
- [x] [`?sptrf`](https://software.intel.com/node/944f7cc2-ee39-40e8-82e1-0adeca0dd455)

Works out of the box with OSX since CLAPACK is included in the standard Accelerate framework. You might have to download and build [LAPACK](http://www.netlib.org/lapack/#_lapack_version_3_6_0) from source on other operating systems (**LINUX:** `sudo apt-get liblapack-dev`).

Double precision functions expect `Float64Array` vectors, single precision functions expect `Float32Array` vectors.
