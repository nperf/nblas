# nblas

C++ bindings for CBLAS (Basic Linear Algebra Subprograms).

Initial benchmarks (CBLAS vs [vectorious](https://github.com/mateogianolio/vectorious)):

```bash
$ node benchmark.js
Vector::dot x 130,957 ops/sec ±4.44% (75 runs sampled)
blas::ddot x 5,166,542 ops/sec ±2.12% (91 runs sampled)
```
