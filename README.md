# nblas

C++ bindings for CBLAS (Basic Linear Algebra Subprograms).

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

Implemented bindings:

```cpp
float sdot (
  const int n,
  const float *x, const int inc_x,
  const float *y, const int inc_y
);

double ddot (
  const int n,
  const double *x, const int inc_x,
  const double *y, const int inc_y
);

void daxpy (
  const int n,
  const double alpha,
  const double *x, const int inc_x,
  const double *y, const int inc_y
);

void saxpy (
  const int n,
  const float alpha,
  const float *x, const int inc_x,
  const float *y, const int inc_y
);
```
