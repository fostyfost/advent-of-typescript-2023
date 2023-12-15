import { test, expectTypeOf } from 'vitest'
import type { SantasFavoriteCookies } from './solution'

test('day-1', () => {
  expectTypeOf<SantasFavoriteCookies>().toEqualTypeOf<'ginger-bread' | 'chocolate-chip'>()
})
