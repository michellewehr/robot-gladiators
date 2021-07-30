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


var fight = function(enemyName){
    //ask the players if they'd like to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' choose.");
   if (promptFight === 'fight' || promptFight === "FIGHT"){
        //alert players that they are starting the round    
       window.alert("Welcome to Robot Gladiators!");
       //subtract the value of playerAttack from the value of enemyHealth
       enemyHealth = enemyHealth - playerAttack;
       //log a resulting message to the console so we know that it worked
       console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
       //subtract the value of enemyAttack from the value of playerHealth
       playerHealth = playerHealth - enemyAttack;
       //log a resulting message to the console so we know that it worked
       console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
       //check enemy's health
       if (enemyHealth <= 0){
           window.alert(enemyName + " has died!");
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.")
        }  
    }
    //if player chooses to skip
    else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip the quit?")
        //if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
        window.alert(playerName + " has chosen to skip the fight!");
    } else{
        window.alert('You need to choose a valid option. Try again!');
    }
};

 for (var i =0; i < enemyNames.length; i++){
     fight(enemyNames[i]);
 }

// fight();