import { test, expectTypeOf } from 'vitest'
import { Rebuild, Skateboard, BmxBike, Scooter, Surfboard } from './solution'

// prettier-ignore
type expected1 =  [
  Skateboard, Skateboard,
  BmxBike,
  Scooter, Scooter, Scooter,
  Surfboard, Surfboard, Surfboard,
  Skateboard,
  BmxBike,
  Scooter, Scooter,
]

// prettier-ignore
type expected2 = [
  Skateboard, Skateboard, Skateboard,
  BmxBike, BmxBike, BmxBike,
  Scooter, Scooter,
  Surfboard,
  Skateboard, Skateboard,
  BmxBike,
  Scooter, Scooter
]

// prettier-ignore
type expected3 = [
  Skateboard, Skateboard,
  BmxBike, BmxBike, BmxBike,
  Scooter, Scooter, Scooter,
  Surfboard, Surfboard, Surfboard, Surfboard, Surfboard,
  Skateboard,
  BmxBike,
  Scooter, Scooter,
]

test('day-19', () => {
  expectTypeOf<Rebuild<[2, 1, 3, 3, 1, 1, 2]>>().toEqualTypeOf<expected1>()

  expectTypeOf<Rebuild<[3, 3, 2, 1, 2, 1, 2]>>().toEqualTypeOf<expected2>()

  expectTypeOf<Rebuild<[2, 3, 3, 5, 1, 1, 2]>>().toEqualTypeOf<expected3>()
})
