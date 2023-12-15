export type BoxToys<ToyName, BoxesNumber, Acc extends unknown[] = []> = BoxesNumber extends number
  ? Acc['length'] extends BoxesNumber
    ? Acc
    : BoxToys<ToyName, BoxesNumber, [...Acc, ToyName]>
  : never
