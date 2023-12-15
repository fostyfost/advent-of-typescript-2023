import { test, expectTypeOf, assertType } from 'vitest'
import type { SantasList } from './solution'

const badList = ['tommy', 'trash'] as const
const goodList = ['bash', 'tru'] as const

test('day-5', () => {
  expectTypeOf<SantasList<typeof badList, typeof goodList>>().toEqualTypeOf<['tommy', 'trash', 'bash', 'tru']>()

  expectTypeOf<SantasList<[], []>>().toEqualTypeOf<[]>()

  expectTypeOf<SantasList<[], ['trash']>>().toEqualTypeOf<['trash']>()

  expectTypeOf<SantasList<['john'], ['ashley', 'elliot', 'ziltoid']>>().toEqualTypeOf<
    ['john', 'ashley', 'elliot', 'ziltoid']
  >()

  expectTypeOf<SantasList<['1', 2, '3'], [false, boolean, '4', ['nested']]>>().toEqualTypeOf<
    ['1', 2, '3', false, boolean, '4', ['nested']]
  >()

  // @ts-expect-error Invalid arguments
  assertType<SantasList<null, undefined>>([])
})
