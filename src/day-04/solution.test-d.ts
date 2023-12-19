import { test, expectTypeOf } from 'vitest'
import type { Address, PresentDeliveryList } from './solution'

test('day-04', () => {
  expectTypeOf<
    PresentDeliveryList<{
      john: { behavior: 'good' }
      jimmy: { behavior: 'bad' }
      sara: { behavior: 'good' }
      suzy: { behavior: 'good' }
      chris: { behavior: 'good' }
      penny: { behavior: 'bad' }
    }>
  >().toEqualTypeOf<{
    john: Address
    jimmy: Address
    sara: Address
    suzy: Address
    chris: Address
    penny: Address
  }>()

  expectTypeOf<
    PresentDeliveryList<{
      hello: { hello: 'hello' }
      world: { world: 'world' }
    }>
  >().toEqualTypeOf<{
    hello: Address
    world: Address
  }>()
})
