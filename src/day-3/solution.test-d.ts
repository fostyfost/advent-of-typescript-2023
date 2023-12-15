import { test, expectTypeOf } from 'vitest'
import type { GiftWrapper } from './solution'

test('day-3', () => {
  expectTypeOf<GiftWrapper<'Car', 'Santa', 'Trash'>>().toEqualTypeOf<{
    present: 'Car'
    from: 'Santa'
    to: 'Trash'
  }>()

  expectTypeOf<GiftWrapper<'vscode', 'Trash', 'Prime'>>().toEqualTypeOf<{
    present: 'vscode'
    from: 'Trash'
    to: 'Prime'
  }>()

  expectTypeOf<GiftWrapper<'javascript', 'Dan', 'Evan'>>().toEqualTypeOf<{
    present: 'javascript'
    from: 'Dan'
    to: 'Evan'
  }>()
})
