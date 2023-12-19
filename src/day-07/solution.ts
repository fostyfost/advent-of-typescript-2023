export type AppendGood<T> = {
  [K in keyof T as `good_${string & K}`]: T[K]
}
