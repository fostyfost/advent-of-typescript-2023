import { test, expectTypeOf } from 'vitest'
import type { DecipherNaughtyList } from './solution'

test('day-14', () => {
  expectTypeOf<DecipherNaughtyList<'timmy/jimmy'>>().toEqualTypeOf<'jimmy' | 'timmy'>()

  expectTypeOf<DecipherNaughtyList<'elliot'>>().toEqualTypeOf<'elliot'>()

  expectTypeOf<DecipherNaughtyList<'melkey/prime/theo/trash'>>().toEqualTypeOf<'melkey' | 'prime' | 'theo' | 'trash'>()
})
