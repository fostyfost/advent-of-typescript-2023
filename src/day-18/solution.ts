export type Count<Tuple extends unknown[], SearchElement, Acc extends unknown[] = []> = Tuple extends [
  infer TupleElement,
  ...infer Rest,
]
  ? TupleElement extends SearchElement
    ? Count<Rest, SearchElement, [...Acc, TupleElement]>
    : Count<Rest, SearchElement, Acc>
  : Acc['length']
