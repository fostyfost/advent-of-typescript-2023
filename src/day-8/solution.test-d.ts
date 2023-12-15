import { test, expectTypeOf } from 'vitest'
import type { RemoveNaughtyChildren } from './solution'

test('day-8', () => {
  expectTypeOf<
    RemoveNaughtyChildren<{
      naughty_tom: { address: '1 candy cane lane' }
      good_timmy: { address: '43 chocolate dr' }
      naughty_trash: { address: '637 starlight way' }
      naughty_candace: { address: '12 aurora' }
    }>
  >().toEqualTypeOf<{
    good_timmy: { address: '43 chocolate dr' }
  }>()

  expectTypeOf<
    RemoveNaughtyChildren<{
      dont: 'cheat'
      naughty_play: 'fair'
    }>
  >().toEqualTypeOf<{
    dont: 'cheat'
  }>()
})
