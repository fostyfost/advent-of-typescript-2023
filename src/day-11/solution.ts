export type SantaListProtector<T> = T extends (...args: unknown[]) => unknown
  ? T
  : T extends []
    ? ReadonlyArray<SantaListProtector<[...T]>>
    : T extends object
      ? { readonly [Key in keyof T]: SantaListProtector<T[Key]> }
      : T
