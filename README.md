# BROWSER - CANDY GAME 🍬
> It's a basic in-browser game with basic math calculations.
> User need to choose the number of candies popped on the screen. 
> It can be a single number or sum of 2-3 number.
> To win the game player need to cover all the numbers (1 to 9) in a stipulated time.
 
* Learnings: 
    + How to hold state using hook.
    + Breakdown component into small testable part.
    
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

| [Live Application (👆)](https://krishdu.github.io/candy-game/) |
| ------ |  

<p align="center">
<img alt="GIF" src="https://github.com/krishdu/candy-game/blob/master/candy-game-play-v1.gif?raw=true" width="800" height="400"/>
</p>

## ✨ My Thought Process ✨
```
Phase 1
```
+ Create the basic UI to start with

```
Phase 2
```
+ create a CandyDisplay component (left)
+ create a NumberDisplay component (right)

```
Phase 3
```
+ create a state hook to keep the count of candy
+ pass the hook to number conponent to handle and change candy count in each click.

```
Phase 4
```
+ NumberDisplay component hold two state hook for available and candidate button status
+ the current status need pass to PlayNumber component to color the button according to the button status

```
Phase 5
```
+ PlayNumber component is reponsible to handle each user click ans it will change count of candies

```
Phase 6
```
+ Implement time interval using setTimeout

```
Phase 7
```
+ handle each won and lost case by unmounting and remounting concept.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deploy
+
```
heroku login
```
+ 
```
heroku create candy-game-play
```
+ 
```
git push heroku master
```
