This project is a simple version of the classic game "Rock, Paper, Scissors" and is played entirely through the console.

The code is simplified as follows:
1. getComputerChoice function randomly returns 1 of the 3 choices
2. getHumanChoice function returns the 1 of the 3 choices as input by the user.
3. the scores for each player are declared as 0
4. playRound compares the two defined choices and declares the winner per the usual game rules and increments the relevant score variable
5. playGame calls playRound 5 times, keeps track of the scores at the end of each round, and announces a winner after 5 rounds have been completed.