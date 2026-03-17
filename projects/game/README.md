The current ending goes as follows:
wait -> go to lunch -> smuggle -> spoon -> courtyard -> main hall -> visitor center -> colin -> work -> cell -> wait (x3 / until 12am) -> dig -> courtyard.

# Chris Needs Coffee

## Setting & About

This is my game PRISONBREAK
The game is about you, the player, attempting to escape prison without being to solitary.
There will be multiple endings... eventually.
## Map

```mermaid
graph TD;
    bus(((Bus)))<-->Commons;
    Library<-->Commons;
    Box<-->Cafeteria;
    Cafeteria<-->Commons;
    Commons<-->Outside;
    Outside<-->Portable;
    Portable<-->rm511;
    Portable<-->Bathroom;
```

The player starts on the bus, and then is directed into the Commons. T
They can explore, but must eventually make their way to rm511.

## Story

When the user gets to rm511, they learn that the teacher is asleep.
They must take the teacher's coffee mug to the library, get it 
filled, and then bring it back to the teacher.

The game starts 15 minutes before the morning class bell, and each
move costs 1 minute. So this journey must be completed in 15 moves.
Some moves (like reading a book in the library) cost extra time.

## Global Variables

The most important variables that I have currently are
`hasSpoon` and `talkedToColin`, both
booleans that track progress in the
story. These variables determine if you are able to escape in my current ending. In order to win, you must have both variable set to true, as it is false by default.

I also have some other unimportant variable for my basketball function. Such as my `ScoreA`, `ScoreB`, `characters`, and `string_length` variables. These are more for fun and just help create a random double digit score for Team A and Team B, and then determine who won based on which number is bigger.                                           

I will be using many other variables later when I create my alternate endings.
# Spoilers (ENDINGS)
<br>
<br>
<br>

### ENDING 1: Shawshank Redemption?
--------------------------------
wait -> go to lunch -> smuggle -> spoon -> courtyard -> main hall -> visitor center -> colin -> work -> cell -> wait (x3 / until 12am) -> dig -> courtyard.

### ENDING 2: Blank.
--------------------------------
N/A

### ENDING 3: Blank.
--------------------------------
N/A

### ENDING 4: Blank.
--------------------------------
N/A
