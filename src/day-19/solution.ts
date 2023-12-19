export type Skateboard = '🛹'
export type BmxBike = '🚲'
export type Scooter = '🛴'
export type Surfboard = '🏄'

type AvailableThings = [Skateboard, BmxBike, Scooter, Surfboard]
type AvailableThingsLength = AvailableThings['length']

type Increment<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? [...Acc, 0]['length']
  : Increment<N, [...Acc, 0]>

type Fill<T, Length extends number, Acc extends T[] = []> = Acc['length'] extends Length
  ? Acc
  : Fill<T, Length, [...Acc, T]>

type ValidThingIndex<Index extends number> = Index extends AvailableThingsLength ? 0 : Index

export type Rebuild<
  T extends number[],
  AvailableThingsIndex extends number = 0,
  Acc extends unknown[] = [],
> = T extends [infer ThingsLength extends number, ...infer Rest extends number[]]
  ? Rebuild<
      Rest,
      ValidThingIndex<Increment<AvailableThingsIndex>>,
      [...Acc, ...Fill<AvailableThings[AvailableThingsIndex], ThingsLength>]
    >
  : Acc
