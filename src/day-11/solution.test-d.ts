import { test, expectTypeOf } from 'vitest'
import type { SantaListProtector } from './solution'

test('day-11', () => {
  expectTypeOf<
    SantaListProtector<{
      hacksore: () => 'naughty'
      trash: string
      elliot: {
        penny: boolean
        candace: {
          address: {
            street: {
              name: 'candy cane way'
              num: number
            }
            k: 'hello'
          }
          children: [
            'harry',
            {
              saying: ['hey']
            },
          ]
        }
      }
    }>
  >().toEqualTypeOf<{
    readonly hacksore: () => 'naughty'
    readonly trash: string
    readonly elliot: {
      readonly penny: boolean
      readonly candace: {
        readonly address: {
          readonly street: {
            readonly name: 'candy cane way'
            readonly num: number
          }
          readonly k: 'hello'
        }
        readonly children: readonly [
          'harry',
          {
            readonly saying: readonly ['hey']
          },
        ]
      }
    }
  }>()

  expectTypeOf<
    SantaListProtector<{
      theo: () => 'naughty'
      prime: string
      netflix: {
        isChill: boolean
      }
    }>
  >().toEqualTypeOf<{
    readonly theo: () => 'naughty'
    readonly prime: string
    readonly netflix: {
      readonly isChill: boolean
    }
  }>()
})
