//Game States
//'WIN' = Player robot has defeated all enemy-robots
// *Fight all enemy-robots
// * Defeat each enemy-robot
//'' = Player robot's health is zero or less 

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
// console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 


var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
       //ask the players if they'd like to fight
       var promptFight = window.prompt("Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' choose.");
          //if player chooses to skip, confirm player wants to skip and stop loop
           if (promptFight === "skip" || promptFight === "SKIP"){
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip the quit?")
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

           //remove enemy's health by subtracting the amoung set in the playerAttack variable
           enemyHealth = enemyHealth - playerAttack;
           console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

           //check enemy's health
           if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
               //award player money for winning 
                playerMoney = playerMoney + 20;
               // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            //remove player's health by subtracting the amount set in the enemy attack variable
            playerHealth = playerHealth - enemyAttack;
            console.log( enemyName + ' attacked ' + playerName + '.' + playerName + ' now has ' + playerHealth + ' health remaining.');
            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                //leave while () loop if player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health remaining.")
            }  
        } 
    };
//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    //fight each enemy robot by looping over them and fighting them one at a time
    for (var i =0; i < enemyNames.length; i++) {
     //if player is still alive keep fighting
        if (playerHealth > 0) {
            //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        // reset enemyHealth for next robot in the loop
        enemyHealth = 50;
        //use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;
        //pass the pickedEnemyName variable's value into the fight function, where it will asume the value of the enemyName parameter
        fight(pickedEnemyName);
        } 
        //if player isn't alive, stop the game
        else {
        window.alert("You have lost your robot in the battle! Game OVER!");
        break;
    }
}
//after the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();
};

var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");
        //if player is still alive, player wins!
        if(playerHealth > 0){
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        } else {
        window.alert("You've lost your robot in battle.");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//start the game when the page loads
startGame();