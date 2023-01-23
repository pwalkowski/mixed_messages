# Mixed Messages Project

## About

This project uses a JavaScript script to generate a message and output the message on the screen.
Each message is composed of 3 random parts.

## Implementation

The message is composed of 3 random parts:

1. Famous historical character
2. Fun fact about character
3. A "quote" attributed to the character.

3 arrays store character names, fun fact about the character and a famous quote.

Each array has 20 elements.

randomIndex() function returns an integer between 0 1nd 19;

Function createMessage() assembles and outputs the message in 3 lines by selecting a random element from each array using the randomIndex() helper function.
