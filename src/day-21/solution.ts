export type TicTacToeXCell = '❌'
export type TicTacToeOCell = '⭕'
export type TicTacToeEmptyCell = '  '

type TicTacToeChip = TicTacToeXCell | TicTacToeOCell
type TicTacToeCell = TicTacToeChip | TicTacToeEmptyCell

export type TicTacToeXWon = `${TicTacToeXCell} Won`
export type TicTacToeOWon = `${TicTacToeOCell} Won`
export type TicTacToeDraw = 'Draw'

type TicTacToeEndState = TicTacToeXWon | TicTacToeOWon | TicTacToeDraw
type TicTacToeState = TicTacToeChip | TicTacToeEndState

type Top = 'top'
type Middle = 'middle'
type Bottom = 'bottom'
type Left = 'left'
type Center = 'center'
type Right = 'right'

type TicTacToeYPositions = Top | Middle | Bottom
type TicTacToeXPositions = Left | Center | Right

type TicTacToePositions = `${TicTacToeYPositions}-${TicTacToeXPositions}`

type TicTacToeBoard = TicTacToeCell[][]

type TicTacToeGame = {
  board: TicTacToeBoard
  state: TicTacToeState
}

type Increment<N extends number, Acc extends N[] = []> = Acc['length'] extends N
  ? [...Acc, N]['length']
  : Increment<N, [...Acc, N]>

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

type IsEmptyCell<CurrentValue extends TicTacToeCell> = CurrentValue extends TicTacToeEmptyCell ? true : false

type SwapState<CurrentState extends TicTacToeChip> = CurrentState extends TicTacToeXCell
  ? TicTacToeOCell
  : TicTacToeXCell

type SwapRowsAndCols<
  B extends unknown[][],
  RowIndex extends number = 0,
  ColIndex extends number = 0,
  Result extends unknown[][] = B,
> = RowIndex extends B['length']
  ? Result
  : ColIndex extends B[number]['length']
    ? SwapRowsAndCols<B, Increment<RowIndex>, 0, Result>
    : SwapRowsAndCols<
        B,
        RowIndex,
        Increment<ColIndex>,
        ChangeByIndex<Result, RowIndex, ChangeByIndex<Result[RowIndex], ColIndex, B[ColIndex][RowIndex]>>
      >

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
  B extends unknown[][],
  RowIndex extends number = 0,
  ColIndex extends number = 0,
  Acc extends unknown[] = [],
> = RowIndex extends B['length']
  ? Acc
  : ColIndex extends B[number]['length']
    ? Acc
    : FromTopLeftToBottomRightDiagonal<B, Increment<RowIndex>, Increment<ColIndex>, [...Acc, B[RowIndex][ColIndex]]>

type GetWinner<B extends unknown[][], CurrentState extends TicTacToeChip> = B extends [
  infer Row extends unknown[],
  ...infer Rest extends unknown[][],
]
  ? Row[number] extends TicTacToeXCell
    ? TicTacToeXWon
    : Row[number] extends TicTacToeOCell
      ? TicTacToeOWon
      : GetWinner<Rest, CurrentState>
  : false

type IsDraw<B extends unknown[][]> = B[number][number] extends TicTacToeChip ? true : false

type NextState<B extends unknown[][], CurrentState extends TicTacToeChip> = IsDraw<B> extends true
  ? TicTacToeDraw
  : GetWinner<B, CurrentState> extends infer WhoWon1
    ? WhoWon1 extends false
      ? GetWinner<SwapRowsAndCols<B>, CurrentState> extends infer WhoWon2
        ? WhoWon2 extends false
          ? GetWinner<
              [FromTopLeftToBottomRightDiagonal<B>, FromTopLeftToBottomRightDiagonal<ReverseRows<B>>],
              CurrentState
            > extends infer WhoWon3
            ? WhoWon3 extends false
              ? SwapState<CurrentState>
              : WhoWon3
            : CurrentState
          : WhoWon2
        : CurrentState
      : WhoWon1
    : CurrentState

type ToGame<
  B extends TicTacToeBoard,
  XIndex extends number,
  YIndex extends number,
  C extends TicTacToeChip,
  NextB extends TicTacToeBoard = ChangeByIndex<B, YIndex, ChangeByIndex<B[YIndex], XIndex, C>>,
> = {
  board: NextB
  state: NextState<NextB, C>
}

type MutateRow<
  B extends TicTacToeBoard,
  XIndex extends number,
  Y extends TicTacToeYPositions,
  C extends TicTacToeChip,
  G extends TicTacToeGame,
> = Y extends Top
  ? IsEmptyCell<B[0][XIndex]> extends true
    ? ToGame<B, XIndex, 0, C>
    : G
  : Y extends Middle
    ? IsEmptyCell<B[1][XIndex]> extends true
      ? ToGame<B, XIndex, 1, C>
      : G
    : IsEmptyCell<B[2][XIndex]> extends true
      ? ToGame<B, XIndex, 2, C>
      : G

type MutateBoard<
  B extends TicTacToeBoard,
  X extends TicTacToeXPositions,
  Y extends TicTacToeYPositions,
  C extends TicTacToeChip,
  G extends TicTacToeGame,
> = X extends Left ? MutateRow<B, 0, Y, C, G> : X extends Center ? MutateRow<B, 1, Y, C, G> : MutateRow<B, 2, Y, C, G>

export type TicTacToe<
  G extends TicTacToeGame,
  Position extends TicTacToePositions,
> = Position extends `${infer Y extends TicTacToeYPositions}-${infer X extends TicTacToeXPositions}`
  ? G['state'] extends TicTacToeChip
    ? MutateBoard<G['board'], X, Y, G['state'], G>
    : G
  : G
