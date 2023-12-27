export type R = '🔴' // RedChip
export type Y = '🟡' // YellowChip
export type E = '  ' // EmptyCell

type Connect4Chips = R | Y
type Connect4Cell = string | Connect4Chips | E

export type RedChipWon = `${R} Won`
export type YellowChipWon = `${Y} Won`
export type Draw = 'Draw'

type Connect4EndState = RedChipWon | YellowChipWon | Draw

type Connect4State = Connect4Chips | Connect4EndState

type Increment<N extends number, Acc extends N[] = []> = Acc['length'] extends N
  ? [...Acc, N]['length']
  : Increment<N, [...Acc, N]>

type Fill<T, Length extends number, Acc extends T[] = []> = Acc['length'] extends Length
  ? Acc
  : Fill<T, Length, [...Acc, T]>

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Decrement<N extends number> = Fill<N, N> extends [infer _, ...infer Rest] ? Rest['length'] : 0

type Connect4Game = {
  board: Connect4Cell[][]
  state: Connect4State
}

type ToLowest<
  B extends Connect4Cell[][],
  C extends Connect4Chips,
  ColumnIndex extends number,
  RowIndex extends number = Decrement<B['length']>,
> = B[RowIndex][ColumnIndex] extends E
  ? ChangeByIndex<B, RowIndex, ChangeByIndex<B[RowIndex], ColumnIndex, C>>
  : ToLowest<B, C, ColumnIndex, Decrement<RowIndex>>

type InARow<
  Row extends Connect4Cell[],
  Chips extends Connect4Chips[] = [],
  CurrentChip extends Connect4Chips | false = false,
  ExpectedLength extends number = 4,
> = Chips['length'] extends ExpectedLength
  ? CurrentChip extends false
    ? false
    : CurrentChip extends R
      ? RedChipWon
      : YellowChipWon
  : Row extends [infer Cell extends Connect4Cell, ...infer Rest extends Connect4Cell[]]
    ? Cell extends Connect4Chips
      ? Cell extends CurrentChip
        ? InARow<Rest, [...Chips, Cell], Cell>
        : InARow<Rest, [Cell], Cell>
      : InARow<Rest>
    : false

type Reverse<T extends unknown[], Acc extends unknown[] = []> = T extends [
  infer Head extends unknown,
  ...infer Rest extends unknown[],
]
  ? Reverse<Rest, [Head, ...Acc]>
  : Acc

type ReverseRows<B extends unknown[][], Acc extends unknown[][] = []> = B extends [
  infer Row extends unknown[],
  ...infer Rest extends unknown[][],
]
  ? ReverseRows<Rest, [...Acc, Reverse<Row>]>
  : Acc

type FromTopLeftToBottomRightDiagonal<
  B extends Connect4Cell[][],
  RowIndex extends number = 0,
  ColIndex extends number = 0,
  Acc extends Connect4Cell[] = [],
> = RowIndex extends B['length']
  ? Acc
  : ColIndex extends B[number]['length']
    ? Acc
    : FromTopLeftToBottomRightDiagonal<B, Increment<RowIndex>, Increment<ColIndex>, [...Acc, B[RowIndex][ColIndex]]>

type DiagonalsToRows<B extends Connect4Cell[][], Acc extends Connect4Cell[][] = []> = B extends [
  Connect4Cell[],
  ...infer Rest extends Connect4Cell[][],
]
  ? DiagonalsToRows<Rest, [...Acc, FromTopLeftToBottomRightDiagonal<B>]>
  : Acc

type GetWinner<B extends Connect4Cell[][], CurrentState extends Connect4Chips> = B extends [
  infer Row extends Connect4Cell[],
  ...infer Rest extends Connect4Cell[][],
]
  ? InARow<Row> extends infer InARowResult
    ? InARowResult extends false
      ? GetWinner<Rest, CurrentState>
      : InARowResult
    : false
  : false

type IsDraw<B extends Connect4Cell[][]> = B[number][number] extends Connect4Chips ? true : false

type SwapState<CurrentState extends Connect4Chips> = CurrentState extends R ? Y : R

type NextState<B extends Connect4Cell[][], CurrentState extends Connect4Chips> = GetWinner<
  B,
  CurrentState
> extends infer WhoWon1
  ? WhoWon1 extends false
    ? GetWinner<DiagonalsToRows<B>, CurrentState> extends infer WhoWon2
      ? WhoWon2 extends false
        ? GetWinner<DiagonalsToRows<Reverse<B>>, CurrentState> extends infer WhoWon3
          ? WhoWon3 extends false
            ? GetWinner<DiagonalsToRows<ReverseRows<B>>, CurrentState> extends infer WhoWon4
              ? WhoWon4 extends false
                ? GetWinner<DiagonalsToRows<Reverse<ReverseRows<B>>>, CurrentState> extends infer WhoWon5
                  ? WhoWon5 extends false
                    ? IsDraw<B> extends true
                      ? Draw
                      : SwapState<CurrentState>
                    : WhoWon5
                  : CurrentState
                : WhoWon4
              : CurrentState
            : WhoWon3
          : CurrentState
        : WhoWon2
      : CurrentState
    : WhoWon1
  : CurrentState

type ToGame<
  B extends Connect4Cell[][],
  ColumnIndex extends number,
  C extends Connect4Chips,
  NextB extends Connect4Cell[][] = ToLowest<B, C, ColumnIndex>,
> = {
  board: NextB
  state: NextState<NextB, C>
}

export type Connect4<G extends Connect4Game, ColumnIndex extends number> = G['state'] extends Connect4Chips
  ? ToGame<G['board'], ColumnIndex, G['state']>
  : G
