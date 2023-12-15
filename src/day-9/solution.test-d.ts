import { test, expectTypeOf } from 'vitest'
import type { Reverse } from './solution'

test('day-9', () => {
  expectTypeOf<Reverse<'rehsaD'>>().toEqualTypeOf<'Dasher'>()

  expectTypeOf<Reverse<'recnaD'>>().toEqualTypeOf<'Dancer'>()

  expectTypeOf<Reverse<'recnarP'>>().toEqualTypeOf<'Prancer'>()

  expectTypeOf<Reverse<'nexiV'>>().toEqualTypeOf<'Vixen'>()

  expectTypeOf<Reverse<'temoC'>>().toEqualTypeOf<'Comet'>()

  expectTypeOf<Reverse<'dipuC'>>().toEqualTypeOf<'Cupid'>()

  expectTypeOf<Reverse<'rennoD'>>().toEqualTypeOf<'Donner'>()

  expectTypeOf<Reverse<'neztilB'>>().toEqualTypeOf<'Blitzen'>()

  expectTypeOf<Reverse<'hploduR'>>().toEqualTypeOf<'Rudolph'>()
})
