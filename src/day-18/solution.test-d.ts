import { test, expectTypeOf } from 'vitest'
import type { Count } from './solution'

// prettier-ignore
type ToySack = [
  '🎸', '🎧', '👟', '👟', '💻', '🪀', '🧩', '🎮',
  '🎨', '🕹️', '📱', '🧩', '🧸', '🎧', '👟', '🚲',
  '📚', '⌚', '🎨', '👟', '🎸', '🧸', '👟', '🎸',
  '📱', '🎧', '🎮', '🎒', '📱', '🧩', '🧩', '🚲',
  '🕹️', '🧵', '📱', '🕹️', '🕰️', '🧢', '🕹️', '👟',
  '🧸', '📚', '🧁', '🧩', '🎸', '🎮', '🧁', '📚',
  '💻', '⌚', '🛹', '🧁', '🧣', '🪁', '🎸', '🧸',
  '🧸', '🧸', '🧩', '🪁', '🏎️', '🏎️', '🧁', '📚',
  '🧸', '🕶️', '💻', '⌚', '⌚', '🕶️', '🎧', '🎧',
  '🎧', '💻', '👟', '🎸', '💻', '🪐', '📚', '🎨',
  '📱', '🎧', '📱', '🎸', '🏎️', '👟', '🚲', '📱',
  '🚲', '🎸'
]

test('day-18', () => {
  expectTypeOf<Count<ToySack, '👟'>>().toEqualTypeOf<8>()

  expectTypeOf<Count<ToySack, '🧦'>>().toEqualTypeOf<0>()

  expectTypeOf<Count<ToySack, '🧩'>>().toEqualTypeOf<6>()

  expectTypeOf<Count<ToySack, '🛹'>>().toEqualTypeOf<1>()

  expectTypeOf<Count<ToySack, '🏎️'>>().toEqualTypeOf<3>()

  expectTypeOf<Count<ToySack, '📚'>>().toEqualTypeOf<5>()

  expectTypeOf<Count<ToySack, unknown>>().toEqualTypeOf<90>()
})
