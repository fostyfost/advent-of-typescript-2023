# Day Sixteen

<img src="cover.png" width="165" height="158" alt="Singing candles">

[Solution](solution.ts) | [Source](https://typehero.dev/challenge/day-16)

## Find Santa (part 2)

Since the episode with him getting lost on Tuesday (Day 12), the elves have started to get concerned about Santa getting lost again, but deeper in the forest. Since Santa's college buddy got Wi-Fi installed in the whole property, Santa just wanders around scrolling TikTok without looking where he's going. Santa claimed that the reason the whole campus needed Wi-Fi (even the forest) was to "future-proof the business" and "attract top talent" but it's beginning to seem like it was, so he could personally get better phone service (cell reception in the North Pole isn't great and without 116th H.R.7302, neither is the rural internet speed).

Sure enough. It happened again. Santa got lost, again, but this time much deeper in the forest.

This time we have to search columns as well as rows to find him.

The `FindSanta` takes only one argument, the forest (an array of arrays), and returns the `[Row, Column]` indices where Santa is located. Then an elf search team can be deployed to retrieve him.

prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [MiTS](https://www.youtube.com/@MichiganTypeScript)
