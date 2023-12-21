type Letters = {
  A: [
    //
    '█▀█ ',
    '█▀█ ',
    '▀ ▀ ',
  ]
  B: [
    //
    '█▀▄ ',
    '█▀▄ ',
    '▀▀  ',
  ]
  C: [
    //
    '█▀▀ ',
    '█ ░░',
    '▀▀▀ ',
  ]
  E: [
    //
    '█▀▀ ',
    '█▀▀ ',
    '▀▀▀ ',
  ]
  H: [
    //
    '█ █ ',
    '█▀█ ',
    '▀ ▀ ',
  ]
  I: [
    //
    '█ ',
    '█ ',
    '▀ ',
  ]
  M: [
    //
    '█▄░▄█ ',
    '█ ▀ █ ',
    '▀ ░░▀ ',
  ]
  N: [
    //
    '█▄░█ ',
    '█ ▀█ ',
    '▀ ░▀ ',
  ]
  P: [
    //
    '█▀█ ',
    '█▀▀ ',
    '▀ ░░',
  ]
  R: [
    //
    '█▀█ ',
    '██▀ ',
    '▀ ▀ ',
  ]
  S: [
    //
    '█▀▀ ',
    '▀▀█ ',
    '▀▀▀ ',
  ]
  T: [
    //
    '▀█▀ ',
    '░█ ░',
    '░▀ ░',
  ]
  Y: [
    //
    '█ █ ',
    '▀█▀ ',
    '░▀ ░',
  ]
  W: [
    //
    '█ ░░█ ',
    '█▄▀▄█ ',
    '▀ ░ ▀ ',
  ]
  ' ': [
    //
    '░',
    '░',
    '░',
  ]
  ':': [
    //
    '#',
    '░',
    '#',
  ]
  '*': [
    //
    '░',
    '#',
    '░',
  ]
}

type NewLine = '\n'

type LettersKeys = keyof Letters

type ToRow<
  Char extends string,
  Row extends [string, string, string] = ['', '', ''],
  K = Uppercase<Char>,
> = K extends LettersKeys
  ? [`${Row[0]}${Letters[K][0]}`, `${Row[1]}${Letters[K][1]}`, `${Row[2]}${Letters[K][2]}`]
  : Row

export type ToAsciiArt<
  Template extends string,
  Table extends string[] = [],
  Row extends [string, string, string] = ['', '', ''],
> = Template extends `${infer Char extends string}${infer Rest}`
  ? Char extends NewLine
    ? ToAsciiArt<Rest, [...Table, ...Row]>
    : ToAsciiArt<Rest, Table, ToRow<Char, Row>>
  : [...Table, ...Row]
