type Separator = '/'

export type DecipherNaughtyList<
  T extends string,
  Acc extends string[] = [],
  Name extends string = '',
> = T extends `${infer Char}${infer Rest}`
  ? Char extends Separator
    ? DecipherNaughtyList<Rest, [...Acc, Name], ''>
    : DecipherNaughtyList<Rest, Acc, `${Name}${Char}`>
  : [...Acc, Name][number]
