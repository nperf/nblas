# nBLAS

C++ bindings for single- and double-precision CBLAS (Basic Linear Algebra Subprograms) routines.

 - [x] [BLAS Level 1 Routines and Functions](https://software.intel.com/en-us/node/468390)
 - [x] [BLAS Level 2 Routines](https://software.intel.com/en-us/node/468426)
 - [x] [BLAS Level 3 Routines](https://software.intel.com/en-us/node/468478)

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
