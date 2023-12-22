import { test, expectTypeOf } from 'vitest'
import type {
  TicTacToe,
  TicTacToeEmptyCell,
  TicTacToeXCell,
  TicTacToeOCell,
  TicTacToeXWon,
  TicTacToeOWon,
  TicTacToeDraw,
} from './solution'

test('day-21', () => {
  type NewGame = {
    board: [
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeXCell
  }

  type Move1Actual = TicTacToe<NewGame, 'top-center'>
  expectTypeOf<Move1Actual>().toEqualTypeOf<{
    board: [
      [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeOCell
  }>()

  type Move2Actual = TicTacToe<Move1Actual, 'top-left'>
  expectTypeOf<Move2Actual>().toEqualTypeOf<{
    board: [
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeXCell
  }>()

  type Move3Actual = TicTacToe<Move2Actual, 'middle-center'>
  expectTypeOf<Move3Actual>().toEqualTypeOf<{
    board: [
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeOCell
  }>()

  type Move4Actual = TicTacToe<Move3Actual, 'bottom-left'>
  expectTypeOf<Move4Actual>().toEqualTypeOf<{
    board: [
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeOCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeXCell
  }>()

  type Move5Actual = TicTacToe<Move4Actual, 'bottom-right'>
  expectTypeOf<Move5Actual>().toEqualTypeOf<{
    board: [
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeOCell, TicTacToeEmptyCell, TicTacToeXCell],
    ]
    state: TicTacToeOCell
  }>()

  // Invalid move don't change the board and state
  expectTypeOf<TicTacToe<Move1Actual, 'top-center'>>().toEqualTypeOf<{
    board: [
      [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeOCell
  }>()

  // ❌ won vertical
  expectTypeOf<TicTacToe<Move4Actual, 'bottom-center'>>().toEqualTypeOf<{
    board: [
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeXWon
  }>()

  // ⭕ won vertical
  expectTypeOf<TicTacToe<Move5Actual, 'middle-left'>>().toEqualTypeOf<{
    board: [
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeOCell, TicTacToeEmptyCell, TicTacToeXCell],
    ]
    state: TicTacToeOWon
  }>()

  // ❌ won horizontal
  expectTypeOf<
    TicTacToe<
      {
        board: [
          [TicTacToeXCell, TicTacToeXCell, TicTacToeEmptyCell],
          [TicTacToeOCell, TicTacToeOCell, TicTacToeEmptyCell],
          [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
        ]
        state: TicTacToeXCell
      },
      'top-right'
    >
  >().toEqualTypeOf<{
    board: [
      [TicTacToeXCell, TicTacToeXCell, TicTacToeXCell],
      [TicTacToeOCell, TicTacToeOCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeXWon
  }>()

  // ⭕ won vertical
  expectTypeOf<
    TicTacToe<
      {
        board: [
          [TicTacToeOCell, TicTacToeXCell, TicTacToeXCell],
          [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
          [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
        ]
        state: TicTacToeOCell
      },
      'bottom-left'
    >
  >().toEqualTypeOf<{
    board: [
      [TicTacToeOCell, TicTacToeXCell, TicTacToeXCell],
      [TicTacToeOCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeOCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
    ]
    state: TicTacToeOWon
  }>()

  // ❌ won diagonal
  expectTypeOf<
    TicTacToe<
      {
        board: [
          [TicTacToeXCell, TicTacToeOCell, TicTacToeOCell],
          [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
          [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
        ]
        state: TicTacToeXCell
      },
      'bottom-right'
    >
  >().toEqualTypeOf<{
    board: [
      [TicTacToeXCell, TicTacToeOCell, TicTacToeOCell],
      [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeXCell],
    ]
    state: TicTacToeXWon
  }>()

  // Draw
  expectTypeOf<
    TicTacToe<
      {
        board: [
          [TicTacToeOCell, TicTacToeXCell, TicTacToeOCell],
          [TicTacToeOCell, TicTacToeXCell, TicTacToeXCell],
          [TicTacToeXCell, TicTacToeOCell, TicTacToeEmptyCell],
        ]
        state: TicTacToeOCell
      },
      'bottom-right'
    >
  >().toEqualTypeOf<{
    board: [
      [TicTacToeOCell, TicTacToeXCell, TicTacToeOCell],
      [TicTacToeOCell, TicTacToeXCell, TicTacToeXCell],
      [TicTacToeXCell, TicTacToeOCell, TicTacToeOCell],
    ]
    state: TicTacToeDraw
  }>()

  // 4x4 ❌ won diagonal
  expectTypeOf<
    TicTacToe<
      {
        board: [
          [TicTacToeXCell, TicTacToeOCell, TicTacToeOCell, TicTacToeEmptyCell],
          [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
          [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
          [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeXCell],
        ]
        state: TicTacToeXCell
      },
      'bottom-right'
    >
  >().toEqualTypeOf<{
    board: [
      [TicTacToeXCell, TicTacToeOCell, TicTacToeOCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeXCell, TicTacToeEmptyCell],
      [TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeEmptyCell, TicTacToeXCell],
    ]
    state: TicTacToeXWon
  }>()
})
