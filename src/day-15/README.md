# Day Fifteen

<img src="cover.png" width="187" height="172" alt="Santa snowball">

[Solution](solution.ts) | [Source](https://typehero.dev/challenge/day-15)

## Box The Toys!

[_Santa walks by as Bernard, the head elf, is yelling at the other elves…_]

[_Bernard (to his staff)_] LET'S GO ELVES! LET'S GO! KEEP BOXING TOYS!

[_Santa_] Bernard… Seems like it's not going well.

[_Bernard_] Was anyone asking you!?

[_Santa_] Did you deploy the new toy boxing API yesterday?

[_Bernard_] No, we didn't get to it. Julius called out sick.

[_Santa_] Taking too many sick days shows a lack of commitment. We should get rid of Julius.

[_Bernard (rolling eyes)_] And then not replace him? Yeah. No, Thanks.

[_Santa_] Well it was on the sprint and today's the last day of the sprint.

[_Bernard_] We don't deploy on Fridays.

[_Santa_] Aren't we doing continuous deployment now? You had this whole big thing at the last shareholder meeting about it?

[_Bernard_] No. For the 100th time. We're doing continuous delivery, which is completely different and gives us control over when we deploy.

[_Santa_] Well I need that BoxToys type. If you can't handle this project, Bernard, there are plenty of other elves who can. I need your full commitment.

[_Bernard_] Ok. Fine. I'll do it myself.

[_Santa_] That's what I like to see!

## The `BoxToys` API

The `BoxToys` type takes two arguments:

1. the name of a toy;
2. the number of boxes we need for this toy
   And the type will return a tuple containing that toy that number of times.

But there's one little thing… We need to support the number of boxes being a union. That means our resulting tuple can also be a union. Check out `test_nutcracker` in the tests to see how that works.

prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [MiTS](https://www.youtube.com/@MichiganTypeScript)
