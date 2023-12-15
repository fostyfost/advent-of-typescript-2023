import { test, expectTypeOf } from 'vitest'
import type { FindSanta } from './solution'

test('day-12', () => {
  expectTypeOf<FindSanta<['🎅🏼', '🎄', '🎄', '🎄']>>().toEqualTypeOf<0>()

  expectTypeOf<FindSanta<['🎄', '🎅🏼', '🎄', '🎄', '🎄', '🎄']>>().toEqualTypeOf<1>()

  expectTypeOf<FindSanta<['🎄', '🎄', '🎅🏼', '🎄']>>().toEqualTypeOf<2>()

  expectTypeOf<FindSanta<['🎄', '🎄', '🎄', '🎅🏼', '🎄']>>().toEqualTypeOf<3>()

  expectTypeOf<FindSanta<['🎄', '🎄', '🎄', '🎄']>>().toEqualTypeOf<never>()
})
