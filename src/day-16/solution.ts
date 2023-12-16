type Santa = '🎅🏼'
type Tree = '🎄'

type ForestRow = (Santa | Tree)[]

type Increment<N, Acc extends number[] = []> = Acc['length'] extends N
  ? [...Acc, 0]['length']
  : Increment<N, [...Acc, 0]>

// First solution
export type FindSanta1<
  Forest extends string[][],
  RowIndex extends number = 0,
  ColumnIndex extends number = 0,
> = RowIndex extends Forest['length']
  ? never
  : ColumnIndex extends Forest[RowIndex]['length']
    ? FindSanta1<Forest, Increment<RowIndex>>
    : Forest[RowIndex][ColumnIndex] extends Santa
      ? [RowIndex, ColumnIndex]
      : FindSanta1<Forest, RowIndex, Increment<ColumnIndex>>

type FindColumnIndex<Row extends ForestRow, ColumnIndex extends 0[] = []> = Row extends [
  infer Value,
  ...infer Rest extends ForestRow,
]
  ? Value extends Santa
    ? ColumnIndex['length']
    : FindColumnIndex<Rest, [...ColumnIndex, 0]>
  : false

// Second solution
export type FindSanta2<T extends ForestRow[], RowIndex extends number[] = []> = T extends [
  infer Row,
  ...infer Rest extends ForestRow[],
]
  ? Row extends ForestRow
    ? FindColumnIndex<Row> extends infer ColumnIndex extends number
      ? [RowIndex['length'], ColumnIndex]
      : FindSanta2<Rest, [...RowIndex, RowIndex['length']]>
    : never
  : never
