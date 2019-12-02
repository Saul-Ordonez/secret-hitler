# Week 7 Project (Secret Hitler)

#### Application is the digital version of the board game Secret Hitler, where players take turns voting on authorities and enacting policies with the goal being to either kill the player that is Hitler or elect Hitler as chancellor, depending on which team you are on.

#### By **Saul Ordonez, Calvin Will, Veronica Stanley-Katz, Drew Peterson**

## Description / Rules

<!-- This webpage application will allow users input their age in years and return a result of their age in years according to the solar orbit of all planets in the solar system. -->

## Specs

|Specs|Input|Output|
|-|-|-|
|The program should accept the number of players|5 or 6, 5 selected.|5 player name fields generated.|
|The program should take a name input for each player|"Saul"|Saul|
|The program should assign a player party & identity cards.|Saul|Saul is a Fascist, Normal Fascist. |
|The program should play an audio clip once players have their identities.|Play audio button.|Audio instructions play.|
|The program should shuffle the policy deck and save it.|Ready button.|17 cards are shuffled and set.|
|The program should randomly assign a president.|Ready button.|Calvin you are president.|
|The program should allow a president to nominate a chancellor.|"Select a name", Click Drew's name.|Drew has been nominated as chancellor.|
|The program should allow each player to vote after a nomination.|"Vote" select "Ja" or "Nein".|"Ja".|
|The program should elect the president and chancellor if more than 50% of the vote is "Ja".|>50%|President and Chancellor Elected!|
|The program should fail the vote and pass the president title to the left if 50% or more is "Nein".|<=50%|Vote fails, _____ is now president.|
|The program should pull the top three policy cards from the deck.|"President, are you alone?" Click yes.|Fascist, Fascist, Liberal|
|The program should request the president discard one of the cards.|"President, please discard one" Select "Fascist" card.|Fascist, Liberal|
|The program should request the chancellor discard one of the cards, remaining card is enacted.|"Chancellor, please discard one" Select "Fascist" card.|Liberal policy enacted.|
|The program should recognize if an executive action is triggered.|3 fascist policies enacted.|"President must..."|
|The program should show the president the top three policy cards.|3 fascist policies enacted.|Fascist, fascist, liberal.|
|The program should force the president to kill another player of their choice.|4 fascist policies enacted.|Kill Veronica.|
|The program should force the president to kill another player of their choice.|5 fascist policies enacted.|Kill Calvin.|
|The program should move the president title to the left at the end of each round.|Policy enacted.|President moves one to the left.|
|The program should track how many times a vote fails in a row and enact the top policy card & reset term limits if there are 3 successive fails.|Fail, fail, fail|Top policy card enacted, term limit reset.|
|The program should alert players if Hitler is killed.|Hitler is killed.|Liberals Win! You killed Hitler!|
|The program should alert players if Hitler is successfully elected chancellor after three or more fascist policies enacted. |Three fascist policies enacted, Hitler elected chancellor.|Fascists Win! You elected Hitler!|
|The program should alert players if 5 liberal policies are enacted.|5 liberal policies enacted.|Liberals Win!|
|The program should alert players if 6 fascist policies are enacted.|6 fascist policies enacted.|Fascists Win!|

## Setup/Installation Requirements

* Clone GitHub project repository and open index file into internet browser.
* Run 'npm install' in your command line in project root directory to install appropriate dependencies.
* Run 'npm run build' in your command line to bundle appropriate files.
* Run 'npm run start' in your command line to start live development server in browser.
This project was tested and works with Google Chrome browser.

* internet service required when cloning project repository onto local computer.


## Known Bugs

<!-- There are no known bugs at this time but may be subject to change. -->

## Support and contact details

If there are any issues or bugs the developer may not be aware of please contact at:

#### * sauleordonez@gmail.com
#### * (503)-382-9034

## Technologies Used

* HTML
* Javascript
* NPM Webpack
* CSS
* jQuery
* Bootstrap
* Atom text editor
* Google Chrome

### License

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

Copyright (c) 2019 **Saul Ordonez, Veronica Stanley-Katz, Calvin Will, Drew Peterson**
