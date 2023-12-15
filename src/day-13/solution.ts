type Enumerate1<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate1<N, [...Acc, Acc['length']]>

type Increment<N, Acc extends number[] = []> = Acc['length'] extends N
  ? [...Acc, 0]['length']
  : Increment<N, [...Acc, 0]>

export type DayCounter1<Start extends number, End extends number> = Exclude<
  Enumerate1<Increment<End>>,
  Enumerate1<Start>
>

type Enumerate2<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc
  : Enumerate2<N, [...Acc, Acc['length']]>

export type DayCounter2<Start extends number, End extends number> = Enumerate2<End> extends [
  ...Enumerate2<Start>,
  ...infer Tail,
]
  ? [...Tail, End] extends [...infer Rest]
    ? Rest[number]
    : never
  : never
