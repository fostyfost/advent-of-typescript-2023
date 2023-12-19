import { test, expectTypeOf } from 'vitest'
import type { AppendGood } from './solution'

test('day-07', () => {
  expectTypeOf<
    AppendGood<{
      tom: { address: '1 candy cane lane' }
      timmy: { address: '43 chocolate dr' }
      trash: { address: '637 starlight way' }
      candace: { address: '12 aurora' }
    }>
  >().toEqualTypeOf<{
    good_tom: { address: '1 candy cane lane' }
    good_timmy: { address: '43 chocolate dr' }
    good_trash: { address: '637 starlight way' }
    good_candace: { address: '12 aurora' }
  }>()

  expectTypeOf<
    AppendGood<{
      dont: 'cheat'
      play: 'fair'
    }>
  >().toEqualTypeOf<{
    good_dont: 'cheat'
    good_play: 'fair'
  }>()
})
