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
    while(playerHealth > 0 && enemyHealth > 0){
       //ask the players if they'd like to fight
       var promptFight = window.prompt("Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' choose.");
          //if player chooses to skip, confirm player wants to skip and stop loop
           if (promptFight === "skip" || promptFight === "SKIP"){
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip the quit?")
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

           //remove enemy's health by subtracting the amoung set in the playerAttack variable
           playerHealth = playerHealth - enemyAttack;
           console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

           //check enemy's health
           if (enemyHealth <= 0){
               window.alert(enemyName + " has died!");
               //award player money for winning 
               playerMoney = playerMoney + 20;
               // leave while() loop since enemy is dead
               break;
            } else{
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            //remove player's health by subtracting the amount set in the enemy attack variable
            playerHealth = playerHealth - enemyAttack;
            console.log( enemyName + ' attacked ' + playerName + '.' + playerName + ' now has ' + playerHealth + ' health remaining.');
            //check player's health
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                //leave while () loop if player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health remaining.")
            }  
        } 
    }

 for (var i =0; i < enemyNames.length; i++){
     var pickedEnemyName = enemyNames[i];
     // reassign enemyHealth for next robot in the loop
     enemyHealth = 50;
     fight(pickedEnemyName);
 }

// fight();