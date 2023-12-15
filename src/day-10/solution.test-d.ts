import { test, expectTypeOf } from 'vitest'
import type { StreetSuffixTester } from './solution'

test('day-10', () => {
  expectTypeOf<StreetSuffixTester<'Candy Cane Way', 'Way'>>().toEqualTypeOf<true>()

  expectTypeOf<StreetSuffixTester<'Chocalate Drive', 'Drive'>>().toEqualTypeOf<true>()

  expectTypeOf<StreetSuffixTester<'Sugar Lane', 'Drive'>>().toEqualTypeOf<false>()

  expectTypeOf<StreetSuffixTester<'Fifth Dimensional Nebulo 9', 'invalid'>>().toEqualTypeOf<false>()
})
