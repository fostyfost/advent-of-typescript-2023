import { test, expectTypeOf } from 'vitest'
import { Connect4, R, Y, E, YellowChipWon, Draw, RedChipWon } from './solution'

test('day-23', () => {
  type NewGame = {
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
    ]
    state: Y
  }

  type Move1 = Connect4<NewGame, 0>
  expectTypeOf<Move1>().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
    ]
    state: R
  }>()

  type Move2 = Connect4<Move1, 0>
  expectTypeOf<Move2>().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [R, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
    ]
    state: Y
  }>()

  type Move3 = Connect4<Move2, 0>
  expectTypeOf<Move3>().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
      [R, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
    ]
    state: R
  }>()

  type Move4 = Connect4<Move3, 1>
  expectTypeOf<Move4>().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
      [R, E, E, E, E, E, E],
      [Y, R, E, E, E, E, E],
    ]
    state: Y
  }>()

  type Move5 = Connect4<Move4, 2>
  expectTypeOf<Move5>().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
      [R, E, E, E, E, E, E],
      [Y, R, Y, E, E, E, E],
    ]
    state: R
  }>()

  type Move6 = Connect4<Move5, 1>
  expectTypeOf<Move6>().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
      [R, R, E, E, E, E, E],
      [Y, R, Y, E, E, E, E],
    ]
    state: Y
  }>()

  expectTypeOf<
    Connect4<
      {
        board: [
          [E, E, E, E, E, E, E],
          [E, E, E, E, E, E, E],
          [Y, E, E, E, E, E, E],
          [Y, E, E, E, E, E, E],
          [R, R, R, E, E, E, E],
          [Y, R, Y, Y, E, E, E],
        ]
        state: R
      },
      3
    >
  >().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
      [R, R, R, R, E, E, E],
      [Y, R, Y, Y, E, E, E],
    ]
    state: RedChipWon
  }>()

  expectTypeOf<
    Connect4<
      {
        board: [
          [E, E, E, E, E, E, E],
          [E, E, E, E, E, E, E],
          [R, E, E, E, E, E, E],
          [Y, E, E, E, E, E, E],
          [R, E, R, R, E, E, E],
          [Y, E, Y, Y, E, E, E],
        ]
        state: Y
      },
      1
    >
  >().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [R, E, E, E, E, E, E],
      [Y, E, E, E, E, E, E],
      [R, E, R, R, E, E, E],
      [Y, Y, Y, Y, E, E, E],
    ]
    state: YellowChipWon
  }>()

  // 🟡 Won diagonal
  expectTypeOf<
    Connect4<
      {
        board: [
          [E, E, E, E, E, E, E],
          [E, E, E, E, E, E, E],
          [E, E, E, E, E, E, E],
          [E, E, Y, R, E, E, E],
          [R, Y, R, R, E, E, E],
          [Y, R, Y, Y, E, E, E],
        ]
        state: Y
      },
      3
    >
  >().toEqualTypeOf<{
    board: [
      [E, E, E, E, E, E, E],
      [E, E, E, E, E, E, E],
      [E, E, E, Y, E, E, E],
      [E, E, Y, R, E, E, E],
      [R, Y, R, R, E, E, E],
      [Y, R, Y, Y, E, E, E],
    ]
    state: YellowChipWon
  }>()

  // 🟡 Won diagonal
  expectTypeOf<
    Connect4<
      {
        board: [
          [Y, R, R, Y, Y, R, E],
          [R, Y, Y, R, R, Y, R],
          [Y, R, R, Y, Y, R, Y],
          [R, Y, Y, Y, R, Y, R],
          [Y, R, R, Y, Y, R, Y],
          [R, Y, Y, R, R, Y, R],
        ]
        state: Y
      },
      6
    >
  >().toEqualTypeOf<{
    board: [
      [Y, R, R, Y, Y, R, Y],
      [R, Y, Y, R, R, Y, R],
      [Y, R, R, Y, Y, R, Y],
      [R, Y, Y, Y, R, Y, R],
      [Y, R, R, Y, Y, R, Y],
      [R, Y, Y, R, R, Y, R],
    ]
    state: YellowChipWon
  }>()

  // 🔴 Won diagonal
  expectTypeOf<
    Connect4<
      {
        board: [
          [R, Y, E, E, E, E, E],
          [Y, R, Y, E, E, E, E],
          [Y, R, Y, R, E, E, E],
          [R, Y, R, Y, R, E, E],
          [R, Y, R, Y, Y, R, E],
          [Y, R, Y, Y, Y, R, E],
        ]
        state: R
      },
      6
    >
  >().toEqualTypeOf<{
    board: [
      [R, Y, E, E, E, E, E],
      [Y, R, Y, E, E, E, E],
      [Y, R, Y, R, E, E, E],
      [R, Y, R, Y, R, E, E],
      [R, Y, R, Y, Y, R, E],
      [Y, R, Y, Y, Y, R, R],
    ]
    state: RedChipWon
  }>()

  expectTypeOf<
    Connect4<
      {
        board: [
          [Y, R, R, Y, Y, R, E],
          [R, Y, Y, R, R, Y, R],
          [Y, R, R, Y, Y, R, Y],
          [R, Y, Y, R, R, Y, R],
          [Y, R, R, Y, Y, R, Y],
          [R, Y, Y, R, R, Y, R],
        ]
        state: Y
      },
      6
    >
  >().toEqualTypeOf<{
    board: [
      [Y, R, R, Y, Y, R, Y],
      [R, Y, Y, R, R, Y, R],
      [Y, R, R, Y, Y, R, Y],
      [R, Y, Y, R, R, Y, R],
      [Y, R, R, Y, Y, R, Y],
      [R, Y, Y, R, R, Y, R],
    ]
    state: Draw
  }>()
})
