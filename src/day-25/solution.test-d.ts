import { test, expectTypeOf } from 'vitest'
import type { ThankYouSoMuch } from './solution'

test('day-25', () => {
  expectTypeOf<ThankYouSoMuch>().toEqualTypeOf<true>()
})
