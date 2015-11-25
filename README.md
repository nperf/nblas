# nBLAS

C++ bindings for CBLAS (Basic Linear Algebra Subprograms).

Developed in parallel with [vectorious](https://github.com/mateogianolio/vectorious), where it will eventually be included.

Works out of the box with OSX since CBLAS is included in the standard Accelerate framework. You might have to download and build [LAPACK](http://www.netlib.org/lapack/#_lapack_version_3_6_0) from source on other operating systems. Prebuilt copies of lblas will probably be included with this library in the future.

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

### `dot`

  - [x] Produces a single precision dot product from two single precision vectors `x` and `y` of size `n`.

  ```cpp
  float sdot (
    const int n,
    const float *x, const int inc_x,
    const float *y, const int inc_y
  );
  ```

  - [x] Produces a double precision dot product from two double precision vectors `x` and `y`.

  ```cpp
  double ddot (
    const int n,
    const double *x, const int inc_x,
    const double *y, const int inc_y
  );
  ```

### `axpy`

  - [x] Adds a double precision vector `x` scaled with a double precision scalar `alpha` to another double precision vector `y`.

  ```cpp
  void daxpy (
    const int n,
    const double alpha,
    const double *x, const int inc_x,
    const double *y, const int inc_y
  );
  ```

  - [x] Adds a single precision vector `x` scaled with a single precision scalar `alpha` to another single precision vector `y`.

  ```cpp
  void saxpy (
    const int n,
    const float alpha,
    const float *x, const int inc_x,
    const float *y, const int inc_y
  );
  ```

### `scal`

  - [x] Scales a double precision vector `x` with a double precision scalar `alpha`.

  ```cpp
  void dscal (
    const int n,
    const double alpha,
    const double *x, const int inc_x
  );
  ```

  - [x] Scales a single precision vector `x` with a single precision scalar `alpha`.

  ```cpp
  void sscal(
    const int n,
    const float alpha,
    const float *x, const int inc_x
  );
  ```

### `copy`

  - [x] Copies a double precision vector `x` to a double precision vector `y`.

  ```cpp
  void dcopy (
    const int n,
    const double *x,
    const int inc_x,
    const double *y,
    const int inc_y
  );
  ```

  - [x] Scales a single precision vector `x` to a single precision vector `y`.

  ```cpp
  void scopy (
    const int n,
    const float *x,
    const int inc_x,
    const float *y,
    const int inc_y
  );
  ```

### `swap`

  - [x] Swaps the elements of a double precision vector `x` with a double precision vector `y`.

  ```cpp
  void dswap (
    const int n,
    const double *x,
    const int inc_x,
    const double *y,
    const int inc_y
  );
  ```

  - [x] Swaps the elements of a single precision vector `x` with a single precision vector `y`.

  ```cpp
  void sswap (
    const int n,
    const float *x,
    const int inc_x,
    const float *y,
    const int inc_y
  );
  ```
