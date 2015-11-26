#include "gemm.h"

using v8::Float64Array;
using v8::Float32Array;
using v8::Number;
using Nan::New;

NAN_METHOD(dgemm) {
  unsigned int order = info[0]->Uint32Value(),
               transpose_x = info[1]->Uint32Value(),
               transpose_y = info[2]->Uint32Value(),
               m = info[3]->Uint32Value(),
               n = info[4]->Uint32Value(),
               k = info[5]->Uint32Value(),
               ldx = info[8]->Uint32Value(),
               ldy = info[10]->Uint32Value(),
               ldz = info[13]->Uint32Value();
  double alpha = info[6]->NumberValue(),
         beta = info[11]->NumberValue();

  assert(info[7]->IsFloat64Array());
  assert(info[9]->IsFloat64Array());
  assert(info[12]->IsFloat64Array());

  void *x_data = info[7].As<Float64Array>()->Buffer()->GetContents().Data(),
       *y_data = info[9].As<Float64Array>()->Buffer()->GetContents().Data(),
       *z_data = info[12].As<Float64Array>()->Buffer()->GetContents().Data();

  double *x = reinterpret_cast<double*>(x_data),
         *y = reinterpret_cast<double*>(y_data),
         *z = reinterpret_cast<double*>(z_data);

  cblas_dgemm(
    order,
    transpose_x,
    transpose_y,
    m,
    n,
    k,
    alpha,
    x,
    ldx,
    y,
    ldy,
    beta,
    z,
    ldz
  );
}

NAN_METHOD(sgemm) {
  unsigned int order = info[0]->Uint32Value(),
               transpose_x = info[1]->Uint32Value(),
               transpose_y = info[2]->Uint32Value(),
               m = info[3]->Uint32Value(),
               n = info[4]->Uint32Value(),
               k = info[5]->Uint32Value(),
               ldx = info[8]->Uint32Value(),
               ldy = info[10]->Uint32Value(),
               ldz = info[13]->Uint32Value();
  float alpha = info[6]->NumberValue(),
         beta = info[11]->NumberValue();

  assert(info[7]->IsFloat32Array());
  assert(info[9]->IsFloat32Array());
  assert(info[12]->IsFloat32Array());

  void *x_data = info[7].As<Float32Array>()->Buffer()->GetContents().Data(),
       *y_data = info[9].As<Float32Array>()->Buffer()->GetContents().Data(),
       *z_data = info[12].As<Float32Array>()->Buffer()->GetContents().Data();

  float *x = reinterpret_cast<float*>(x_data),
        *y = reinterpret_cast<float*>(y_data),
        *z = reinterpret_cast<float*>(z_data);

  cblas_sgemm(
    order,
    transpose_x,
    transpose_y,
    m,
    n,
    k,
    alpha,
    x,
    ldx,
    y,
    ldy,
    beta,
    z,
    ldz
  );
}
