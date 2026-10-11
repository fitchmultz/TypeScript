// @strict: true
// @noTypesAndSymbols: true

// Both interfaces at each level extend the previous level, so I40 reaches I0 through
// 2^40 paths. The circularity check on each base type must not walk every path.

interface I0 { p0: string }
interface A1 extends I0 { a1: string }
interface B1 extends I0 { b1: string }
interface I1 extends A1, B1 {}
interface A2 extends I1 { a2: string }
interface B2 extends I1 { b2: string }
interface I2 extends A2, B2 {}
interface A3 extends I2 { a3: string }
interface B3 extends I2 { b3: string }
interface I3 extends A3, B3 {}
interface A4 extends I3 { a4: string }
interface B4 extends I3 { b4: string }
interface I4 extends A4, B4 {}
interface A5 extends I4 { a5: string }
interface B5 extends I4 { b5: string }
interface I5 extends A5, B5 {}
interface A6 extends I5 { a6: string }
interface B6 extends I5 { b6: string }
interface I6 extends A6, B6 {}
interface A7 extends I6 { a7: string }
interface B7 extends I6 { b7: string }
interface I7 extends A7, B7 {}
interface A8 extends I7 { a8: string }
interface B8 extends I7 { b8: string }
interface I8 extends A8, B8 {}
interface A9 extends I8 { a9: string }
interface B9 extends I8 { b9: string }
interface I9 extends A9, B9 {}
interface A10 extends I9 { a10: string }
interface B10 extends I9 { b10: string }
interface I10 extends A10, B10 {}
interface A11 extends I10 { a11: string }
interface B11 extends I10 { b11: string }
interface I11 extends A11, B11 {}
interface A12 extends I11 { a12: string }
interface B12 extends I11 { b12: string }
interface I12 extends A12, B12 {}
interface A13 extends I12 { a13: string }
interface B13 extends I12 { b13: string }
interface I13 extends A13, B13 {}
interface A14 extends I13 { a14: string }
interface B14 extends I13 { b14: string }
interface I14 extends A14, B14 {}
interface A15 extends I14 { a15: string }
interface B15 extends I14 { b15: string }
interface I15 extends A15, B15 {}
interface A16 extends I15 { a16: string }
interface B16 extends I15 { b16: string }
interface I16 extends A16, B16 {}
interface A17 extends I16 { a17: string }
interface B17 extends I16 { b17: string }
interface I17 extends A17, B17 {}
interface A18 extends I17 { a18: string }
interface B18 extends I17 { b18: string }
interface I18 extends A18, B18 {}
interface A19 extends I18 { a19: string }
interface B19 extends I18 { b19: string }
interface I19 extends A19, B19 {}
interface A20 extends I19 { a20: string }
interface B20 extends I19 { b20: string }
interface I20 extends A20, B20 {}
interface A21 extends I20 { a21: string }
interface B21 extends I20 { b21: string }
interface I21 extends A21, B21 {}
interface A22 extends I21 { a22: string }
interface B22 extends I21 { b22: string }
interface I22 extends A22, B22 {}
interface A23 extends I22 { a23: string }
interface B23 extends I22 { b23: string }
interface I23 extends A23, B23 {}
interface A24 extends I23 { a24: string }
interface B24 extends I23 { b24: string }
interface I24 extends A24, B24 {}
interface A25 extends I24 { a25: string }
interface B25 extends I24 { b25: string }
interface I25 extends A25, B25 {}
interface A26 extends I25 { a26: string }
interface B26 extends I25 { b26: string }
interface I26 extends A26, B26 {}
interface A27 extends I26 { a27: string }
interface B27 extends I26 { b27: string }
interface I27 extends A27, B27 {}
interface A28 extends I27 { a28: string }
interface B28 extends I27 { b28: string }
interface I28 extends A28, B28 {}
interface A29 extends I28 { a29: string }
interface B29 extends I28 { b29: string }
interface I29 extends A29, B29 {}
interface A30 extends I29 { a30: string }
interface B30 extends I29 { b30: string }
interface I30 extends A30, B30 {}
interface A31 extends I30 { a31: string }
interface B31 extends I30 { b31: string }
interface I31 extends A31, B31 {}
interface A32 extends I31 { a32: string }
interface B32 extends I31 { b32: string }
interface I32 extends A32, B32 {}
interface A33 extends I32 { a33: string }
interface B33 extends I32 { b33: string }
interface I33 extends A33, B33 {}
interface A34 extends I33 { a34: string }
interface B34 extends I33 { b34: string }
interface I34 extends A34, B34 {}
interface A35 extends I34 { a35: string }
interface B35 extends I34 { b35: string }
interface I35 extends A35, B35 {}
interface A36 extends I35 { a36: string }
interface B36 extends I35 { b36: string }
interface I36 extends A36, B36 {}
interface A37 extends I36 { a37: string }
interface B37 extends I36 { b37: string }
interface I37 extends A37, B37 {}
interface A38 extends I37 { a38: string }
interface B38 extends I37 { b38: string }
interface I38 extends A38, B38 {}
interface A39 extends I38 { a39: string }
interface B39 extends I38 { b39: string }
interface I39 extends A39, B39 {}
interface A40 extends I39 { a40: string }
interface B40 extends I39 { b40: string }
interface I40 extends A40, B40 {}

declare const deep: I40;
deep.p0;

// Cycles through shared bases are still reported.
interface Leaf { value: string }
interface Left extends Leaf {}
interface Right extends Leaf {}
interface Shared extends Left, Right {}
interface Cycle1 extends Shared, Cycle2 {}
interface Cycle2 extends Left, Cycle1 {}
interface Self extends Shared, Self {}

// A default type argument that refers back to the derived interface is not a cycle.
interface DefaultBase<T = DefaultDerived> extends Shared { next?: T }
interface DefaultDerived extends DefaultBase {}
