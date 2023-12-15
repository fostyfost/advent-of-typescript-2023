type Santa = '🎅🏼'

type Fn<T extends unknown[]> = (...args: T) => unknown

type GetHeadAndRest<T extends unknown[]> = Fn<T> extends (head: infer Head, ...rest: infer Rest) => unknown
  ? [Head, ...Rest]
  : never

export type FindSanta<T extends unknown[], Acc extends unknown[] = []> = T['length'] extends 0
  ? never
  : GetHeadAndRest<T> extends [infer Head, ...infer Rest]
    ? Head extends Santa
      ? Acc['length']
      : FindSanta<Rest, [...Acc, Head]>
    : never
