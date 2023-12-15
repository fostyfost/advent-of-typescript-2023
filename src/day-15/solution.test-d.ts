import { test, expectTypeOf } from 'vitest'
import type { BoxToys } from './solution'

test('day-15', () => {
  expectTypeOf<BoxToys<'doll', 1>>().toEqualTypeOf<['doll']>()

  expectTypeOf<BoxToys<'nutcracker', 3 | 4>>().toEqualTypeOf<
    ['nutcracker', 'nutcracker', 'nutcracker'] | ['nutcracker', 'nutcracker', 'nutcracker', 'nutcracker']
  >()
})
