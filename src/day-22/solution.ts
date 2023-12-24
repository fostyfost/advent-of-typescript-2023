/** because "dashing" implies speed */
type Dasher = '💨'

/** representing dancing or grace */
type Dancer = '💃'

/** a deer, prancing */
type Prancer = '🦌'

/** a star for the dazzling, slightly mischievous Vixen */
type Vixen = '🌟'

/** for the celestial body that shares its name */
type Comet = '☄️'

/** symbolizing love, as Cupid is the god of love */
type Cupid = '❤️'

/** representing thunder, as "Donner" means thunder in German */
type Donner = '🌩️'

/** meaning lightning in German, hence the lightning bolt */
type Blitzen = '⚡'

/** for his famous red nose */
type Rudolph = '🔴'

type Reindeer = Dasher | Dancer | Prancer | Vixen | Comet | Cupid | Donner | Blitzen | Rudolph

type BaseSizer = [3, 3, 3]

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

type FlatGrid<Grid extends Reindeer[][][], Acc extends Reindeer[][] = []> = Grid extends [
  infer Groups extends Reindeer[][],
  ...infer Rest extends Reindeer[][][],
]
  ? FlatGrid<Rest, [...Acc, FlatRow<Groups>]>
  : Acc

type FlatRow<Groups extends Reindeer[][], Acc extends Reindeer[] = []> = Groups extends [
  infer Group extends Reindeer[],
  ...infer Rest extends Reindeer[][],
]
  ? FlatRow<Rest, [...Acc, ...Group]>
  : Acc

type ValidateRow<Row extends Reindeer[], Acc extends Reindeer[] = []> = Row extends [
  infer Item extends Reindeer,
  ...infer Rest extends Reindeer[],
]
  ? Item extends Acc[number]
    ? false
    : ValidateRow<Rest, [...Acc, Item]>
  : true

type ValidateRows<Rows extends Reindeer[][]> = Rows extends [
  infer Row extends Reindeer[],
  ...infer Rest extends Reindeer[][],
]
  ? ValidateRow<Row> extends false
    ? false
    : ValidateRows<Rest>
  : true

type SwapRowsAndCols<
  Rows extends Reindeer[][],
  RowIndex extends number = 0,
  ColIndex extends number = 0,
  Result extends Reindeer[][] = Rows,
> = RowIndex extends Rows['length']
  ? Result
  : ColIndex extends Rows[number]['length']
    ? SwapRowsAndCols<Rows, Increment<RowIndex>, 0, Result>
    : SwapRowsAndCols<
        Rows,
        RowIndex,
        Increment<ColIndex>,
        ChangeByIndex<Result, RowIndex, ChangeByIndex<Result[RowIndex], ColIndex, Rows[ColIndex][RowIndex]>>
      >

type Swap3x3Rows<
  Grid extends Reindeer[][][],
  StartRowIndex extends number,
  MaxRowIndexIndex extends number,
  ColumnIndex extends number,
  RowIndex extends number = StartRowIndex,
  Acc extends Reindeer[][] = [],
> = RowIndex extends MaxRowIndexIndex
  ? Acc
  : Swap3x3Rows<
      Grid,
      StartRowIndex,
      MaxRowIndexIndex,
      ColumnIndex,
      Increment<RowIndex>,
      [...Acc, Grid[RowIndex][ColumnIndex]]
    >

type Swap3x3Columns<
  Grid extends Reindeer[][][],
  StartRowIndex extends number,
  MaxRowIndexIndex extends number,
  ColumnIndex extends number = 0,
  Acc extends Reindeer[][][] = [],
> = ColumnIndex extends BaseSizer['length']
  ? Acc
  : Swap3x3Columns<
      Grid,
      StartRowIndex,
      MaxRowIndexIndex,
      Increment<ColumnIndex>,
      [...Acc, Swap3x3Rows<Grid, StartRowIndex, MaxRowIndexIndex, ColumnIndex>]
    >

type Swap3x3<
  Grid extends Reindeer[][][],
  MinSizer extends 3[] = [],
  MaxSizer extends 3[] = BaseSizer,
  Acc extends Reindeer[][][] = [],
> = MinSizer['length'] extends Grid['length']
  ? Acc
  : Swap3x3<
      Grid,
      [...MinSizer, ...BaseSizer],
      [...MaxSizer, ...BaseSizer],
      [...Acc, ...Swap3x3Columns<Grid, MinSizer['length'], MaxSizer['length']>]
    >

export type Validate<
  Grid extends Reindeer[][][],
  Rows extends Reindeer[][] = FlatGrid<Grid>,
> = ValidateRows<Rows> extends false
  ? false
  : ValidateRows<SwapRowsAndCols<Rows>> extends false
    ? false
    : ValidateRows<FlatGrid<Swap3x3<Grid>>> extends false
      ? false
      : true
