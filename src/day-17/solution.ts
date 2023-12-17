export type Rock = '👊🏻'
export type Paper = '🖐🏾'
export type Scissors = '✌🏽'

type RockPaperScissors = Rock | Paper | Scissors

export type YouWon = 'win'
export type YouLost = 'lose'
export type Draw = 'draw'

// First solution
export type WhoWins1<Opponent extends RockPaperScissors, You extends RockPaperScissors> = Opponent extends You
  ? Draw
  : Opponent extends Rock
    ? You extends Paper
      ? YouWon
      : YouLost
    : Opponent extends Paper
      ? You extends Scissors
        ? YouWon
        : YouLost
      : Opponent extends Scissors
        ? You extends Rock
          ? YouWon
          : YouLost
        : never

type WinningCondition = {
  '👊🏻': Paper
  '🖐🏾': Scissors
  '✌🏽': Rock
}

// Second solution
export type WhoWins2<Opponent extends RockPaperScissors, You extends RockPaperScissors> = Opponent extends You
  ? Draw
  : You extends WinningCondition[Opponent]
    ? YouWon
    : YouLost
