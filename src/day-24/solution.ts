type Alley = '  '
type Tree = '🎄'
type Santa = '🎅'
type Cookie = '🍪'

type MazeItem = Tree | Santa | Alley

type Up = 'up'
type Down = 'down'
type Left = 'left'
type Right = 'right'

type Directions = Up | Down | Left | Right

type Increment<N extends number, Acc extends N[] = []> = Acc['length'] extends N
  ? [...Acc, N]['length']
  : Increment<N, [...Acc, N]>

type Fill<T, Length extends number, Acc extends T[] = []> = Acc['length'] extends Length
  ? Acc
  : Fill<T, Length, [...Acc, T]>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Decrement<N extends number> = Fill<N, N> extends [infer _, ...infer Rest] ? Rest['length'] : 0

type FindSantaXY<Forest extends string[][], X extends number = 0, Y extends number = 0> = Y extends Forest['length']
  ? never
  : X extends Forest[Y]['length']
    ? FindSantaXY<Forest, 0, Increment<Y>>
    : Forest[Y][X] extends Santa
      ? [X, Y]
      : FindSantaXY<Forest, Increment<X>, Y>

type ChangeByIndex<
  T extends unknown[],
  Index extends number,
  Value,
  CurrentIndex extends number = 0,
  Acc extends unknown[] = [],
> = T extends [infer CurrentItem, ...infer Tail]
  ? CurrentIndex extends Index
    ? [...Acc, Value, ...Tail]
    : ChangeByIndex<Tail, Index, Value, Increment<CurrentIndex>, [...Acc, CurrentItem]>
  : Acc

type IsVictory<M extends MazeItem[][], D extends Directions, X extends number, Y extends number> = D extends Left
  ? X extends 0
    ? true
    : false
  : D extends Right
    ? X extends Decrement<M[Y]['length']>
      ? true
      : false
    : D extends Up
      ? Y extends 0
        ? true
        : false
      : Y extends Decrement<M['length']>
        ? true
        : false

type NextStep<M extends MazeItem[][], D extends Directions, X extends number, Y extends number> = D extends Left
  ? Decrement<X> extends infer NextX
    ? NextX extends number
      ? M[Y][NextX] extends Alley
        ? [NextX, Y]
        : false
      : false
    : false
  : D extends Right
    ? Increment<X> extends infer NextX
      ? NextX extends number
        ? M[Y][NextX] extends Alley
          ? [NextX, Y]
          : false
        : false
      : false
    : D extends Up
      ? Decrement<Y> extends infer NextY
        ? NextY extends number
          ? M[NextY][X] extends Alley
            ? [X, NextY]
            : false
          : false
        : false
      : Increment<Y> extends infer NextY
        ? NextY extends number
          ? M[NextY][X] extends Alley
            ? [X, NextY]
            : false
          : false
        : false

type FillCookies<M extends MazeItem[][], Acc extends Cookie[][] = []> = M extends [
  infer Row extends MazeItem[],
  ...infer Rest extends MazeItem[][],
]
  ? FillCookies<Rest, [...Acc, Fill<Cookie, Row['length']>]>
  : Acc

export type Move<
  M extends MazeItem[][],
  D extends Directions,
  SantaXY extends [number, number] = FindSantaXY<M>,
> = SantaXY extends [infer X extends number, infer Y extends number]
  ? IsVictory<M, D, X, Y> extends true
    ? FillCookies<M>
    : NextStep<M, D, X, Y> extends [infer NextX extends number, infer NextY extends number]
      ? ChangeByIndex<M, NextY, ChangeByIndex<M[NextY], NextX, Santa>> extends infer NextM
        ? NextM extends MazeItem[][]
          ? ChangeByIndex<NextM, Y, ChangeByIndex<NextM[Y], X, Alley>>
          : M
        : M
      : M
  : M
