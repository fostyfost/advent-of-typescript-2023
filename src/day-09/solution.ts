export type Reverse<T extends string, Acc extends string = ''> = T extends `${infer Char}${infer Rest}`
  ? Reverse<Rest, `${Char}${Acc}`>
  : Acc
