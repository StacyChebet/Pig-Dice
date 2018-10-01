# Pig Dice
#### Pig Dice is a website with a game for two players. Both take turns rolling dice and can choose whether to keep rolling or to hold on to the score they already have, 29/9/2018
#### By Stacy Chebet
## Description
In the game Pig Dice, both players are allowed to make any number of rolls in each turn. After each roll the dice value is added to their score for that turn. After each roll player can decide whether to stop rolling (hold) and claim the total turn score or continue rolling. If they roll a 1 then they lose all points scored in a particular turn and the turn is then passed to the opponent. This has no impact on their overall score. If players decide to stop rolling (hold), they get the points scored so far which is added to their overall score.
## Setup/Installation Requirements
To set up the application, open a folder in a chosen location in your local machine and clone my 'Pig-Dice' repository to your local machine.
Link to the website: https://stacychebet.github.io/Pig-Dice/
## Known Bugs
This page has no known bugs.
## Technologies Used
In the making of this website, I used:
1. HTML for the structure of the webpage
2. CSS (and BOOTSTRAP) for styling
3. JavaScript to make the webpage responsive
## Behaviour Driven Development

| Specifications     | Input          | Output  |
| ------------- |:-------------:| -----:|
|Player 1 enters name |Stacy| Stacy |
|Player 2 enters name |Ant  | Ant   |
| Player rolls dice | roll, (if 1)|  You rolled a 1. Pass the mouse to the next player!|
|Player rolls dice |roll, (if 2-6)| round score increases by the Roll value|
|Player clicks hold|hold|Total score increases by the round score|


## Support and contact details
If you run into any problems and need to contact me, you can email me: staceychebet23@gmail.com
### License
MIT License

Copyright (c) 2018 Stacy Chebet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
