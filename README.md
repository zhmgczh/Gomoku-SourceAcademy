# Gomoku-SourceAcademy

This project must be run on the platform https://sourceacademy.nus.edu.sg/playground. The time limit should be set to a very large value and should use RUNES or ALL.

Cai Yufei and Fu Ziyan

Project Description:
  The project is about an ancient Asian game named Gomoku ( or “五子棋” in Chinese ). The game is based on the following simple rules: two players of whom one takes the black chessmen and the other takes the white chessmen take turns to put chessmen on the 15*15 chessboard, only adding one chessman at a turn. The one who first achieves such a situation where there are five chessmen with the same color in the same row, the same line or the same diagonal will win.
  Our project is addressing such a problem: in the past, people use real chessboard and chessmen to play Gomoku, but this action is a little bit cockamamie and players will need to judge who wins by themselves. We want to teach computer to help players finish all these tasks and make players only need to focus on how to move.
  The desired outcome of our users is that they just input the position on which they want to move and the program will determine the status of the game ( Playing, Win, Lose and Resigned ). And when there is only one player, we will provide a program to play with him or her. The program must be clever enough to fight the player sometimes.

Connections to our courses:
(a)Functional programming: Our program contains a chessboard, so we are in need to store all the information of the chessboard. We will use the data structure “List” in functional programming. Since we will make a intelligent program to play with humans, we are going to use some advanced searching algorithms, which contain the most basic skill “recursion” in functional programming.
(b)Source: We are going to create a graphical user interface using some runes and curves API inside the Source language.
(c)Source Academy: The program must use the command line shell of Source Academy to allow users to input positions of each of their move.

Components of our projects:
In terms of user usage, it consists of two parts, people vs people and people vs computer. The first part will be addressed by Fu Ziyan, and the second will be addressed by Cai Yufei. These will both be addressed at the end of the project.
In terms of game design and programming, it will mainly consist of three parts, which are the initialization of the chessboard ( is easy and will be done soon ), the process of making a move and the judgement of winning or losing ( is important and will cost much of the time ). These will be done by two together and the specific division of labor is not clear now. In the part of making a move, when we comes to people vs computer, we need to add a processing of computer search to let the computer know where to put the chess pieces. This will be addressed by Cai Yufei.

Missing pieces:
To achieve our project goals well and brings a good game experience to users, some algorithms need to be picked up and the knowledge of Gomoku needs to be acquired.
Some functions are important in my opinion, but still aren’t seen in the Source Academy. These are:
Different function libraries can not be used together, which makes many functions difficult 
