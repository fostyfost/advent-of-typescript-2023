# Day Twenty Three

<img src="cover.png" width="174" height="220" alt="Two hands">

[Solution](solution.ts) | [Source](https://typehero.dev/challenge/day-23)

## Connect 4, but in TypeScript types

Your goal for this challenge is to implement Connect 4 in TypeScript types.

Each cell in the game can contain `🔴` or `🟡` or be empty (`  `). You're provided with a rough layout of how to organize the board in the `EmptyBoard` type. The game state is represented by an object with a `board` property and a `state` property (which keeps track of which player is next up to play).

## What is Connect 4

In case you haven't played it before: Connect 4 is a game in which the players choose a color and then take turns dropping colored tokens into a six-row, seven-column vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens.

> Fun fact:
>
> Connect 4 is also known as Connect Four, Four Up, Plot Four, Find Four, Captain's Mistress, Four in a Row, Drop Four, and Gravitrips in the Soviet Union

> Another fun fact:
>
> Connect 4 was "solved" by James Allen and Victor Allis (independently of one another… like two weeks apart!) in 1988. They couldn't do a full brute-force proof at the time, but 7 years later John Tromp in the Netherlands did it with a database on a Sun Microsystems and Silicon Graphics International workstations (for a combined total of 40,000 computation hours!).

prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [MiTS](https://www.youtube.com/@MichiganTypeScript)
