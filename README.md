# nBLAS

C++ bindings for single- and double-precision CBLAS (Basic Linear Algebra Subprograms) routines.

- [BLAS Level 1 Routines and Functions](https://software.intel.com/en-us/node/468390).
 - [x] [`?asum`](https://software.intel.com/node/e49cf403-8071-4252-a85f-28964ac3da9e#E49CF403-8071-4252-A85F-28964AC3DA9E)
 - [x] [`?axpy`](https://software.intel.com/node/e25d8e10-0440-4827-bc58-bc71128ea6ee#E25D8E10-0440-4827-BC58-BC71128EA6EE)
 - [x] [`?copy`](https://software.intel.com/node/20a9ac46-ce44-4a6a-8ce4-6a53d802a0b5#20A9AC46-CE44-4A6A-8CE4-6A53D802A0B5)
 - [x] [`?dot`](https://software.intel.com/node/d4e53c70-d8fa-4095-a800-4203cafe64fe#D4E53C70-D8FA-4095-A800-4203CAFE64FE)
 - [x] [`?sdot`](https://software.intel.com/node/a0a4aefe-c291-4847-8242-5ecb3c08d6a5#A0A4AEFE-C291-4847-8242-5ECB3C08D6A5)
 - [x] [`?nrm2`](https://software.intel.com/node/ea1df8e7-fc12-4a82-a804-b62956334c40#EA1DF8E7-FC12-4A82-A804-B62956334C40)
 - [x] [`?rot`](https://software.intel.com/node/742238c6-e459-4444-a694-7cc7500cf00f#742238C6-E459-4444-A694-7CC7500CF00F)
 - [x] [`?rotg`](https://software.intel.com/node/50049e08-b0f8-4270-80cc-7ab5d25eea3f#50049E08-B0F8-4270-80CC-7AB5D25EEA3F)
 - [x] [`?rotm`](https://software.intel.com/node/8ce9d22e-f4df-46a6-9a8a-faba22bdcc93#8CE9D22E-F4DF-46A6-9A8A-FABA22BDCC93)
 - [x] [`?rotmg`](https://software.intel.com/node/a28000eb-ea0b-488b-8058-4e1cb0e97074#A28000EB-EA0B-488B-8058-4E1CB0E97074)
 - [x] [`?scal`](https://software.intel.com/node/7269dcfe-7235-4690-a69e-d08712d8fc44#7269DCFE-7235-4690-A69E-D08712D8FC44)
 - [x] [`?swap`](https://software.intel.com/node/423ea638-1a23-46d8-a882-e022064edad7#423EA638-1A23-46D8-A882-E022064EDAD7)
 - [x] [`i?amax`](https://software.intel.com/node/c43c2490-109a-4a3b-8c5c-e8b67224bc03#C43C2490-109A-4A3B-8C5C-E8B67224BC03)
 - [x] [`i?amin`](https://software.intel.com/node/108f9e63-32ef-466b-bed2-58fe6628a058#108F9E63-32EF-466B-BED2-58FE6628A058)
- [BLAS Level 2 Routines](https://software.intel.com/en-us/node/468426).
- [BLAS Level 3 Routines](https://software.intel.com/en-us/node/468478).

Works out of the box with OSX since CBLAS is included in the standard Accelerate framework. You might have to download and build [LAPACK](http://www.netlib.org/lapack/#_lapack_version_3_6_0) from source on other operating systems (**LINUX:** `sudo apt-get libblas-dev`). Prebuilt copies of lblas will probably be included with this library in the future.

```bash
$ npm install mateogianolio/nblas
$ npm test
$ npm run benchmark
```

```javascript
var nblas = require('nblas');

var f64a = new Float64Array([1, 2, 3]),
    f64b = new Float64Array([4, 5, 6]);

nblas.ddot(3, f64a, 1, f64b, 1); // 32

var f32a = new Float32Array([1, 2, 3]),
    f32b = new Float32Array([4, 5, 6]);

nblas.sdot(3, f32a, 1, f32b, 1); // 32
```

Double precision functions expect `Float64Array` vectors, single precision functions expect `Float32Array` vectors.
