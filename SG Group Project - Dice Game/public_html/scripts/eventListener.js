/* ANIMATION HANDLING */
let button = document.getElementById("button");
let newGame = document.getElementById("restartGame");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
let rollToWin;
let win = document.getElementById("winningRoll");
let winCt=document.getElementById("wins");
let lossCt=document.getElementById("losses");

/** anim()
 * Rolling dice animation, houses main gameplay loop
 * @returns {void}
 */
function anim()
{
    //randomizer for dice rolls 1-6
    let num1 = Math.floor(Math.random() * 6 + 1);
    let num2 = Math.floor(Math.random() * 6 + 1);
    //catch user trials
    userRoll = num1 + num2;
    rollCount++;

    //main gameplay decision tree
    if (rollCount > userRollLimit)
    {
        //loss
        alert("You lose!!!");
        lossCount++;
    } else if (userRoll === rollToWin)
    {
        //win
        alert("You win!!!");
        winCount++;
    } else if (rollCount > 0 && rollCount < userRollLimit)
    {
        document.getElementById("keepRolling").style.display = "block";
    } else
    {
        //dummy block
    }

    //debug
//    console.log(userRoll);
//    console.log(rollToWin);

    //display and animate using animate.css
    //dice 1
    dice1.classList.add('animated', 'flipOutX', 'faster');
    document.querySelector(".dice1").src = `images/dice-${num1}.gif`;
    dice1.addEventListener('animationend', remAnim());
    //dice 2
    dice2.classList.add('animated', 'flipInX', 'faster');
    document.querySelector(".dice2").src = `images/dice-${num2}.gif`;
    dice2.addEventListener('animationend', remAnim());
}

/** remAnim()
 * Remove animation styles
 * @returns {void}
 */
function remAnim()
{
    dice1.classList.remove('animated', 'flipOutX', 'faster');
    dice2.classList.remove('animated', 'flipInX', 'faster');
}

/* GAMEPLAY FUNCTIONS AND VARS */
let userRoll;
const userRollLimit = 10;
let rollCount = 0;
let winCount = 0;
let lossCount = 0;

//Display the player's goal
/** winningRoll()
 * Randomize the player goal
 * @returns {Number} 2-12 for 2 dice
 */
function winningRoll()
{
    let rollTo = Math.floor(Math.random() * 12 + 1);

    //2 Dice cannot reach a total of 1, set to 2
    if (rollTo === 1)
    {
        rollTo++;
    }

    return rollTo;
}

/** displayGoal()
 * Randomize the winning goal and display on page
 * @returns {undefined}
 */
function displayGoal()
{
    rollToWin = winningRoll(); //how comp tracks the round goal for rolling
    win.innerText = rollToWin;
    document.getElementById("keepRolling").style.display = "none";
}

//bools for playing game or not
let gamePlay = false;

/** gameStart()
 * start the game
 * @returns {void}
 */
function gameStart()
{
    gamePlay === true;
}

/** restartGame()
 * Restart game and reset values
 * @returns {void}
 */
function restartGame()
{
    gamePlay = false;
    rollCount = 0;
    displayGoal();
    document.querySelector(".dice1").src = `images/dice-1.gif`;
    document.querySelector(".dice2").src = `images/dice-1.gif`;
    
    winCt.innerText=winCount;
    lossCt.innerText=lossCount;
}

//buttons
newGame.addEventListener("click", restartGame);
button.addEventListener("click", gameStart);

//main gameplay loop
do
{
    button.addEventListener("click", anim);
} while (gamePlay)

