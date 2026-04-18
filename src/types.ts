import { IConvenienceBlas } from './generated-convenience-types';
import { INativeBlas } from './generated-native-types';

export { IConvenienceBlas };
export { INativeBlas };

export type FloatArray = Float64Array | Float32Array;
export type MatrixTrans = 111 | 112 | 113;
export type MatrixUpperLower = 121 | 122;
export type MatrixUnit = 131 | 132;
export type MatrixLeftRight = 141 | 142;

export interface INBlas extends INativeBlas, IConvenienceBlas {}
