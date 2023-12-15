export type StreetSuffixTester<T extends string, Suffix extends string> = T extends `${string}${Suffix}` ? true : false
