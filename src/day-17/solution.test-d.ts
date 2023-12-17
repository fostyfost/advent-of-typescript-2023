import { test, expectTypeOf } from 'vitest'
import type { WhoWins1, WhoWins2, Rock, Paper, Scissors, YouWon, YouLost, Draw } from './solution'

test('day-17', () => {
  // '👊🏻', '🖐🏾'
  expectTypeOf<WhoWins1<Rock, Paper>>().toEqualTypeOf<YouWon>()
  expectTypeOf<WhoWins2<Rock, Paper>>().toEqualTypeOf<YouWon>()

  // '👊🏻', '✌🏽'
  expectTypeOf<WhoWins1<Rock, Scissors>>().toEqualTypeOf<YouLost>()
  expectTypeOf<WhoWins2<Rock, Scissors>>().toEqualTypeOf<YouLost>()

  // '👊🏻', '👊🏻'
  expectTypeOf<WhoWins1<Rock, Rock>>().toEqualTypeOf<Draw>()
  expectTypeOf<WhoWins2<Rock, Rock>>().toEqualTypeOf<Draw>()

  // '🖐🏾', '👊🏻'
  expectTypeOf<WhoWins1<Paper, Rock>>().toEqualTypeOf<YouLost>()
  expectTypeOf<WhoWins2<Paper, Rock>>().toEqualTypeOf<YouLost>()

  // '🖐🏾', '✌🏽'
  expectTypeOf<WhoWins1<Paper, Scissors>>().toEqualTypeOf<YouWon>()
  expectTypeOf<WhoWins2<Paper, Scissors>>().toEqualTypeOf<YouWon>()

  // '🖐🏾', '🖐🏾'
  expectTypeOf<WhoWins1<Paper, Paper>>().toEqualTypeOf<Draw>()
  expectTypeOf<WhoWins2<Paper, Paper>>().toEqualTypeOf<Draw>()

  // '✌🏽', '👊🏻'
  expectTypeOf<WhoWins1<Scissors, Rock>>().toEqualTypeOf<YouWon>()
  expectTypeOf<WhoWins2<Scissors, Rock>>().toEqualTypeOf<YouWon>()

  // '✌🏽', '✌🏽'
  expectTypeOf<WhoWins1<Scissors, Scissors>>().toEqualTypeOf<Draw>()
  expectTypeOf<WhoWins2<Scissors, Scissors>>().toEqualTypeOf<Draw>()

  // '✌🏽', '🖐🏾'
  expectTypeOf<WhoWins1<Scissors, Paper>>().toEqualTypeOf<YouLost>()
  expectTypeOf<WhoWins2<Scissors, Paper>>().toEqualTypeOf<YouLost>()
})
