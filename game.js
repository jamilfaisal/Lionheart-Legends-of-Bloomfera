var letters = /^[a-zA-Z]+$/;	//Makes a list including the alphabet and its capitalizations
var Character = {};	//Creates the character object
var Goblin = {};
var Dragon = {};
Goblin.health = 20;
Goblin.maxhealth = 20;
Dragon.health = 40;
Dragon.maxhealth = 40;
/* Global Variables */
var leavefruit;
var poison;
var usable;
var souls = 0;
var blood = 0;
var attack;
var totaldamage;
var firedamage;
var burn = false;
var strengthpotion = false;
var namecolor;
var villageburn = false;
var fleed = false;
function date() {	//Function that displays date
	var displaydate = new Date();	//Receives the full date
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];	//List including all days of the week
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];	//List including all months of the year
	document.getElementById("date").innerHTML = "Date: " + days[displaydate.getUTCDay()] + ", " + months[displaydate.getUTCMonth()] + " " + displaydate.getUTCDate() + ", " + displaydate.getUTCFullYear();	//Receives and displays the appropriate date format
}
function newGame() {	//First function use to start the game
	var charactername = characterName();	//starts the Chracter Name function
	if (charactername === undefined) {	//Incase an error occurs
		alert("Please retype your hero's name.");	//Alerts the user
		newGame();	//Restarts the function
	}
	else {
		var capitalization = charactername[0].toUpperCase(); //Capitalizes the first letter
		charactername = capitalization + charactername.slice(1);	//Adds the capital letter to the sliced name missing the first letter
		var retry = prompt("Character name: " + charactername + ". Confirm (y/n)?"); //Asks the user for confirmation
		if (retry === "y" || retry === "yes" || retry === "Y") {	//If confirmed
			Character.name = charactername; //Adds the name to the character object
			expositionpt1(); //Starts the first exposition function
		}
		else { //If not confirmed
			newGame(); //Restarts the function	
		}
	}
}
function expositionpt1() {	//Exposition part 1 function
	var charactertitle = characterTitle();	//Starts the Character Title function
	if (charactertitle === undefined) {	//If error occured
		alert("No numbers or weird characters! Please retype your hero's title.");	//Alerts the user that an error occured
		expositionpt1();	//Restarts the function
	}
	else {
		var capitalization = charactertitle[0].toUpperCase();	//Capitalizes the first letter
		charactertitle = capitalization + charactertitle.slice(1);	//Adds the capital letter to the sliced title missing the first letter
		Character.title = charactertitle;	//Adds title to the character object
		createParagraph("You awaken in a mysterious patch of land. You can't quite remember how you arrived to this place. You recall your name being..." + Character.name + ".", "narrative"); //Adds a paragraph
		createParagraph("You decide to go down the nearest road you can find. After a couple of hours, the road leads you to a small town. You meet an old, crooked man wearing magical blue and white striped robes at the front gate. His thick, white beard extends to his stomach, and his head is covered with a cone-shaped, blue, yellow-dotted hat.", "narrative");	//Adds a paragraph
	}
}
function expositionpt2() {
	createParagraph("\"Hello!\" The old man exclaims. \"You must be " + Character.name + " the " + Character.title + ". Ah yes! We've been expecting you. Welcome to BloomTown! Follow me, please.\"", "merlin"); 	//Adds a paragraph
	createParagraph("The old man walks through the gate. You decide to follow. As you walk down the cobblestone path of the city, the old man says, ", "narrative");	//Adds a paragraph
	createParagraph("\"Apologies, I forgot to introduce myself. I am Prophet Merlin. I am responsible for protecting this town from any danger. A few days ago, I foresaw a fiery-red dragon hatching from its egg in a lair west of here. The youngling grew in size until it broke out of its lair. It flew over to BloomTown and burned everything to ash. The sacred books fortold that a man such as yourself would be summoned incase we were in grave danger. You need to stop this dragon before it leaves its lair.\"", "merlin"); //Adds a paragraph
	if (Character.title === "Legend") {
		createParagraph("\"Your reputation is quite known throughout Bloomfera. Your journey climbing the Leagues of Legends is a tale told often in these taverns. However, you will need some special equipment to fight against that monster.\"", "merlin"); //Adds a paragraph
	}
	else if (Character.title === "Destroyer") {
		createParagraph("\"Your reputation is quite infamous throughout Bloomfera. Defeating Yortsed and perfecting his rage-fighting was quite the challenge...However, you will be provided with special equipment to fight against that monster.\"", "merlin"); //Adds a paragraph
	}
	else {
		createParagraph("\"Ofcourse, you will be provided with the proper powers and equipment to fight the monster.\"", "merlin"); //Adds a paragraph
	}
}
function firstWeapon() {	//Function decides which weapon the player receives
	var swordChance = Math.floor((Math.random() * 3) + 1);	//Returns 1, 2, or 3 randomly
	if (swordChance === 1) {	//If swordchance is equal to 1
		Character.weapon = "The SoulSlayer";	//Adds the SoulSlayer to the weapon property in the Character object
		return "1";	//Returns 1
	}
	else if (swordChance === 2) {	//If swordChance is equal to 2
		Character.weapon = "The BloodThirster";	//Adds the Bloodthirster to the weapon property in the Character object
		return "2";	//Returns 2
	}
	else if (swordChance === 3) {	//If swordChance is equal to 3
		Character.weapon = "The DevilDestroyer";	//Adds the DevilDestroyer to the weapon property in the Character object
		return "3";	//Returns 3
	}
}
function expositionpt3() {
	createParagraph("You both stop at a nearby, rundown house. The Prophet asks you to wait for a moment. With a brisk walk, he enters through the main door, and shuts it behind him. You hear noises of some rummaging inside.", "narrative");	//Adds a paragraph
	var weapon = firstWeapon();	//Starts the first weapon function
	switch (weapon) {	//Checks the value of weapon
		case "1":	//If weapon is equal to 1
			createParagraph("After a couple of minutes, he returns with a dark, steel longsword clutched in one hand. The longsword is covered with jagged edges extruding from the top of the blade.", "narrative");	//Adds a paragraph
			createParagraph("\"You'll face many dangers along your path. Take this.\"", "merlin");	//Adds a paragraph
			createParagraph("OBTAINED " + Character.weapon, "SoulSlayer");	//Adds a paragraph
			createParagraph("This sword cuts through skin like tissue paper. After dealing a killing blow, it steals the soul of the enemy. Can deal up to 8 damage. Special: SOULCAGE - For every enemy killed, 1 extra damage point is added to the original damage. Can stack up to 6 times.", "SoulSlayer");	//Adds a paragraph
			break;	//Prevents the function from running the other cases
		case "2":	//If weapon is equal to 2
			createParagraph("After a couple of minutes, he returns with a crimson rapier clutched in one hand. The sword is covered with a subtle, dark mist emanating from the hilt.", "narrative");	//Adds a paragraph
			createParagraph("\"You'll face many dangers along your path. Take this.\"", "merlin");	//Adds a paragraph
			createParagraph("OBTAINED " + Character.weapon, "BloodThirster");	//Adds a paragraph
			createParagraph("This blade sucks the blood of its enemies as it contacts their skin. Can deal up to 8 damage. Special: QUENCH - For every successful hit, 1 damage point is added to the original damage. Can stack up to 4 times. Extra damage returns to 0 after a long rest is taken.", "BloodThirster");	//Adds a paragraph
			break;	//Prevents the function from running the other cases
		case "3":	//If weapon is equal to 3
			createParagraph("After a couple of minutes, he returns with a long, sharp textured whip. Teeth-shaped pieces of metal extend along the end of the whip.", "narrative");	//Adds a paragraph
			createParagraph("\"You'll face many dangers along your path. Take this.\"", "merlin");	//Adds a paragraph
			createParagraph("OBTAINED " + Character.weapon, "DevilDestroyer");	//Adds a paragraph
			createParagraph("The DevilDestroyer has slain many a Devils. Its sharp end is covered with Devils' blood. Can deal up to 10 damage. Special: HELLFIRE - Up to 6 fire damage is added onto the original damage. If 6 fire damage is dealt, the enemy will take 1 extra damage per turn.", "DevilDestroyer"); //Adds a paragraph
			break;	//Prevents the function from running other cases
	}
}
function expositionpt4() {	//Second part of the exposition
	createParagraph("The Prophet removes his hat, and takes three cards sitting on top of his bald head. He extends the cards towards you. You notice that each card has its own distinct color - the left one blue, the middle one red, and the right one green.", "narrative");	//Adds a paragraph
	createParagraph("\"Each of these cards will summon an item for you to keep. This Sky Blue card will protect you from pain. The Lime Green card will delay your reaper. Lastly, the Lust card will empower you. You can only receive one, so choose wisely.\"", "merlin");	//Adds a paragraph
}
function bluecard() {	//If user picks the blue card
	createParagraph("You take the card out of the old man's hand, and the other two disappear. You clutch the card between your fingers and crush it. Cerulean sparkles emerge from your hand and begin floating in the air.", "narrative");	//Adds a paragraph
	var itemChance = Math.floor((Math.random() * 2) + 1);	//Assigns itemChance with either 1 or 2
	if (itemChance === 1) {	//If itemChance is equal to 1
		Character.item = "Enchanted Wooden Breastplate";	//Character receives Enchanted Wooden Armor
		usable = false;	//Item is not usable
		createParagraph("The sparkles begin rotating and join to form a grassy, brown wooden armor covered with damp moss.", "narrative");	//Adds a paragraph
		createParagraph("OBTAINED " + Character.item, "woodenarmor");	//Adds a paragraph
		createParagraph("Reduces 2 damage from enemy attacks. Special: FOREST GUARDIAN - 30% chance of blocking all enemy damage entirely when attacked.", "woodenarmor");	//Adds a paragraph
		createParagraph("\"Ah, it seems this armor is made from the trees in Sumatra Woods. Shame it all burned down when the fire-plane rift opened...\"", "merlin");	//Adds a paragraph
	}
	else if (itemChance === 2) {	//If itemChance is equal to 2
		Character.item = "Dragonplate Breastplate";	//Character receives Dragonplate Armor
		usable = false;	//Item is not usable
		createParagraph("The sparkles begin rotating and join to form a shiny, metallic chestplate that seems untouched. The front is filled with holes that extend spikes out quickly when touched.", "narrative");	//Adds a paragraph
		createParagraph("OBTAINED " + Character.item, "dragonarmor");	//Adds a paragraph
		createParagraph("Reduces 3 damage from enemy attacks. Special: PARRY - 20% chance of absorbing and reflecting enemy attacks.", "dragonarmor");	//Adds a paragraph
		createParagraph("\"Oooh, what intricate design. It seems this armor can hurt your enemies if you're in danger. Some of the spikes do seem worn-out. They might get stuck onto the inside of your armor, unfortunately.\"", "merlin");	//Adds a paragraph
	}
}
function greencard() {	//If user picks the yellow card
	createParagraph("You take the card out of the old man's hand, and the other two disappear. You clutch the card between your fingers and crush it. Olive sparkles emerge from your hand and begin floating in the air.", "narrative");	//Adds a paragraph
	var itemChance = Math.floor((Math.random() * 2) + 1);	//Assigns itemChance either 1 or 2
	if (itemChance === 1) {	//If itemChance is equal to 1
		Character.item = "Regular Health Potion";	//Character receives the regular health potion
		usable = true;	//Item is usable
		createParagraph("The sparkles begin rotating and join to form a flask that contains a murky, red liquid.", "narrative");	//Adds a paragraph
		createParagraph("OBTAINED " + Character.item, "regularpot");	//Adds a paragraph
		createParagraph("Drinking this liquid will replenish your health. ONE TIME USE ONLY: Heals for up to 15 health.", "regularpot");	//Adds a paragraph
		createParagraph("\"Ah, this health potion will be very useful when you're injured. Use it wisely.\"", "merlin");	//Adds a paragraph
	}
	else if (itemChance === 2) { //If itemChance is equal to 2
		Character.item = "Superior Health Potion";	//Character receives Superior Health Potion
		usable = true;	//Item is usable
		createParagraph("The sparkles begin rotating and join to form a flask that contains stunning, fiery-orange liquid.", "narrative");	//Adds a paragraph
		createParagraph("OBTAINED " + Character.item, "superiorpot");	//Adds a paragraph
		createParagraph("Drinking this liquid will replenish your health immensely. ONE TIME USE ONLY: Heals for up to 30 health.", "superiorpot");//Adds a paragraph
		createParagraph("\"Wow, this type of health potion is quite rare!. Make sure you use save it for only the most dire situations.\"", "merlin");	//Adds a paragraph
	}
}
function redcard() {	//If user picks the red card
	createParagraph("You take the card out of the old man's hand, and the other two disappear. You clutch the card between your fingers and crush it. Crimson sparkles emerge from your hand and begin floating in the air.", "narrative");	//Adds a paragraph
	var itemChance = Math.floor((Math.random() * 2) + 1);	//Assigns itemChance either 1 or 2
	if (itemChance === 1) {	//If itemChance is equal to 1
		Character.item = "Stone Giant Strength Potion";	//Character receives the Stone Giant Strength Potion
		usable = true;	//Item is usable
		createParagraph("The sparkles begin rotating and join to form a flask that contains ink-colored, viscous liquid. A long toenail sits at the bottom.", "narrative");	//Adds a paragraph
		createParagraph("OBTAINED " + Character.item, "strengthpot");	//Adds a paragraph
		createParagraph("Drinking this liquid will empower you with the strength of a stone giant. A note at the bottom of the flask reads \"DON'T INGEST THE NAIL\". ONE TIME USE ONLY: Gain up to 6 extra damage added to your original damage for the duration of one fight.", "strengthpot");	//Adds a paragraph
		createParagraph("\"Ah, this flask contains diluted blood from a Stone Giant. I wouldn't drink it too quickly if I were you.\"", "merlin");	//Adds a paragraph
	}
	else if (itemChance === 2) {	//If itemChance is equal to 2
		Character.item = "Firebomb";	//Character recieves the Firebomb
		usable = true;	//Item is usable
		createParagraph("The sparkles begin rotating and join to form a spherical, black ball that appears to be extremely rough.", "narrative");	//Adds a paragraph
		createParagraph("OBTAINED " + Character.item, "firebomb");	//Adds a paragraph
		createParagraph("When thrown, this bomb will explode on impact dealing massive damage. ONE TIME USE ONLY: Deals up to 20 fire damage. If more than 15 fire damage is dealt, the enemy will burn. While burned, the victim receives 1 extra damage per turn.", "firebomb");	//Adds a paragraph
		createParagraph("\"Ooh, a firebomb! Be careful when carrying that thing around with you. Any sudden shaking can cause it to go off!\"", "merlin");	//Adds a paragraph
	}
	
}
function displaycharacterStats() {	//Displays the statistics menu with all character statistics
	namecolor = prompt("Choose between blue, pink, or purple: ");	//Asks the user for their choice of color
	namecolor = namecolor.toUpperCase();	//Input is capitalized 
	createStatistics("charname", "Name: " + Character.name);	//Makes the design more user-friendly
	if (namecolor === "BLUE") {	//If user picks blue
		namecolor = "#0099ff";	//Namecolor is equal to a shade of blue
		document.getElementById("charname").style.color = namecolor;	//Color is equal to namecolor
	} 
	else if (namecolor === "PURPLE") {	//If user picks purple
		document.getElementById("charname").style.color = namecolor;	//Name is equal to purple
	}
	else if (namecolor === "PINK") {	//If user picks pink
		namecolor = "violet";	//namecolor is equal to violet since pink is too bright
		document.getElementById("charname").style.color = namecolor;	//Name is equal to violet
	}
	else {	//If user chooses anything else
		document.getElementById("charname").style.color = "white";	//Name is equal to white
	}  
	createStatistics("chartitle", "Title: " + Character.title);	//Makes the design more user-friendly 
	createStatistics("charhealth", "Health: " + Character.health + "/" + Character.maxhealth);	//Makes the design more user-friendly 
	createStatistics("charweapon", "Weapon: " + Character.weapon);	//Makes the design to more user-friendly
	if (Character.weapon === "The SoulSlayer") {	//If user equips The SoulSlayer
		createStatistics("charsouls", "Souls taken: " + souls);	//Displays the amount of souls taken
	}
	else if (Character.weapon === "The BloodThirster") {	//If user equips The BloodThirster
		createStatistics("charblood", "Blood taken: " + blood);	//Displays the amount of blood taken
	}
	if (usable) {	//If character receives a usable item
		createStatistics("charitem", "Item: " + Character.item);	//Makes the design more user-friendly
		if (Character.item === "Regular Health Potion") {	//If user equips a regular health potion
			document.getElementById("charitem").style.color = "#00cc00";	//Adds a color to the paragraph
		}
		else if (Character.item === "Superior Health Potion") {	//If user equips a superior health potion
			document.getElementById("charitem").style.color = "#009900";	//Adds a color to the paragraph
		}
		else if (Character.item === "Stone Giant Strength Potion") {	//If user equips a Stone Giant Strength Potion
			document.getElementById("charitem").style.color = "#ff8c1a";	//Adds a color to the paragraph
		}
		else if (Character.item === "Firebomb") {	//If user equips a firebomb
			document.getElementById("charitem").style.color = "#b35900";	//Adds a color to the paragraph
		}
	}
	else {	//If character receives armor
		createStatistics("chararmor", "Armor: " + Character.item);	//Makes the design more user-friendly
		if (Character.item === "Enchanted Wooden Breastplate") {	//If user equips Enchanted Wooden Armor
			document.getElementById("chararmor").style.color = "#4d4dff";	//Adds a color to the paragraph
		}
		else if (Character.item === "Dragonplate Breastplate") {	//If user equips Dragonplate armor
			document.getElementById("chararmor").style.color = "#3333ff";	//Adds a color to the paragraph
		}
	}
	if (Character.weapon === "The SoulSlayer") {	//If user equips SoulSlayer
		document.getElementById("charweapon").style.color = "#FE1717";	//Adds a color to the paragraph
	}
	else if (Character.weapon === "The BloodThirster") {	//If user equips The bloodthirster
		document.getElementById("charweapon").style.color = "#A80101";	//Adds a color to the paragraph
	}
	else {
		document.getElementById("charweapon").style.color = "#990000";	//If user equips The DevilDestroyer, a color is added to the paragraph
	}
}
function Journeypt1() {	//Next story chapter
	createParagraph("\"Anyways, you ought to get moving if you want slay the dragon before it gains more power.\"", "merlin");	//Adds a paragraph
	createParagraph("The Prophet guides you to the town's west exit. You exit through the gate and see a long, dirt road extending over the horizon.", "narrative");	//Adds a paragraph
	createParagraph("\"Go down this road and you'll soon see the cave entrance. You might have to take a rest if you encounter any creatures before you reach the cave. Once you complete your mission, head back here to attend the festival. Good luck. BloomTown is counting on you!\"", "merlin");	//Adds a paragraph
	createParagraph("The Prophet turns and enters back through the gate. You're unsure if you shall see him again. Taking your first steps onto the dirt road, you feel a sense of danger lurking around.", "narrative");	//Adds a paragraph
}
function Journeypt2() {	//Next story chapter
	createParagraph("After a few hours of walking, you begin to feel hungry.", "narrative");	//Adds a paragraph
	createParagraph("You pass by a single, tall tree on the side of the road. You stop for a second to admire it. You notice an orange hanging from the branches of the tree.", "narrative");	//Adds a paragraph
	poisonfruit();	//Starts the poison fruit function
}
function getFruit() {	//If user to get fruit
	leavefruit = false;	//User has not left fruit
	createParagraph("You smack the blunt end of your weapon on the base of the tree. The fruit falls into your open palms. You decide to sit down and enjoy your meal. You peel the fruit and take a bite.", "narrative");	//Adds a paragraph
	if (poison) {	//If fruit is poisonous
		createParagraph("The orange tastes very bitter, but you finish your meal. You continue down the road.", "narrative");	//Adds a paragraph
		createParagraph("You feel...weak all of a sudden. You get down on your knees and throw up. You cover the ground with spatters of red and orange colored mush.", "narrative");	//Adds a paragraph
		Character.health = Character.health - 6;	//Decreases character health by 6
		var losehealth = document.createElement("p");	//Adds a paragraph
		losehealth.className = "losehealth";	//Adds the lose health class to the paragraph
		document.getElementById("main").appendChild(losehealth);	//Adds the paragraph to the webpage
		losehealth.appendChild(document.createTextNode("*LOST 6 HEALTH*"));	//Adds a paragraph
		document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates the character's health on the menu
		createParagraph("You feel better, but still more exhausted than before. You keep moving down the dirt road.", "narrative");	//Adds a paragraph
	}
	else {	//If fruit is not poisonous
		createParagraph("The orange tastes delicious!", "narrative");	//Adds a paragraph
		Character.health = Character.health + 6;	//Increases Character's health by 7
		Character.maxhealth = Character.maxhealth + 6;	//Increases Character's maximum health by 7 
		var gainhealth = document.createElement("p");	//Adds a paragraph
		gainhealth.className = "gainhealth";	//Adds the gainhealth class to the paragraph
		document.getElementById("main").appendChild(gainhealth);	//Adds the paragraph to the webpage
		gainhealth.appendChild(document.createTextNode("*GAINED 6 MAXIMUM HEALTH*"));	//Adds a paragraph
		document.getElementById("charhealth").style.color = "#80ffd4";
		document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates the character's health on the menu
		createParagraph("You finish your meal and continue down the road.", "narrative");	//Adds a paragraph
	}
}
function leaveFruit() {	//If user leaves the fruit
	leavefruit = true;	//Leavefruit is assigned the Boolean True
	createParagraph("While still hungry, you leave the fruit to be eaten by a different creature. You keep moving down the dirt road.", "narrative");	//Adds a paragraph
}
function poisonfruit() {	//Checks whether fruit is poisoned or not
	var poisonFruit = Math.floor((Math.random() * 2) + 1);	//Assigns poisonFruit either 1 or 2
	if (poisonFruit === 1) {	//If poison fruit is equal to 1
		poison = true;	//Assigns poison the Boolean true
		return;	//Exits the function
	}
	else {	//If poison fruit is equal to 2
		poison = false;	//Assigns poison the Boolean false
		return;	//Exits the function
	}
}
function displayGoblinstats() {	//Displays the goblin's stats
	createGoblin("goblinname", "Name: Goblin");	//Adds the name
	createGoblin("goblintitle", "Title: Assassin");	//Adds the title
	createGoblin("goblinhealth", "Health: " + Goblin.health + "/" + Goblin.maxhealth);	//Adds the health statistic
	createGoblin("goblinweapon", "Weapon: High-frequency blades");	//Adds the weapon statistic
	if (leavefruit) {	//If user leaves fruit
		if (poison) {	//If fruit is poisoned
			Goblin.health = Goblin.health - 6;	//Health is decreased
			document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates the health statistic
		}
		else {	//If fruit is not poisoned
			Goblin.health = Goblin.health + 6;	//Health is increased
			Goblin.maxhealth = Goblin.maxhealth + 6;	//Maximum health is increased
			document.getElementById("goblinhealth").style.color = "#80ffd4";	//Adds a color to the health
			document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates the health statistic
		}
	}
}
function Journeypt3() {	//Next part of the story
	createParagraph("30 minutes pass before you hear footsteps trail behind you. You turn around and see a yellow-skinned humanoid. The creature wears white cloth that covers everything but his face. He wields two katanas sheathed behind his back. You hear him mutter,", "narrative");	//Adds a paragraph
	if (leavefruit) {	//If user leaves fruit
		if (poison) {	//If fruit is poisoned
			createParagraph("\"*Huff* Knew I shouldn't have eaten that fruit...\"", "goblin");	//Adds a paragraph
			createParagraph("His eyes meet yours before he exclaims,", "narrative");	//Adds a paragraph
		}
		else {	//If fruit isn't poisoned
			createParagraph("\"Man, that fruit tasted delicious. Oh, he's really going to get it now.\"", "goblin");	//Adds a paragraph
			createParagraph("His eyes meet yours before he exclaims,", "narrative");	//Adds a paragraph
		}
	}
	createParagraph("\"YOU THERE! HALT! YOUR JOURNEY ENDS HERE. ARAGON MUST RISE.\"", "goblin");	//Adds a paragraph
	displayGoblinstats();	//Displays the goblin statistics
}
function prepareCombat() {	//Prepares the necessary paragraphs for combat
	$('#main').append('<p id ="combatstart">**BATTLE START**</p>');
	$('#main').append('<p id = "userturn1"></p>');
	document.getElementById("userturn1").style.color = namecolor;	//Adds color to the paragraph
	$('#main').append('<p id = "fleetext"></p>');
	$('#main').append('<p id = "gainhealthtext"></p>');
	$('#main').append('<p id = "strengthpotiontext"></p>');
	$('#main').append('<p id = "firebombtext"></p>');
	$('#main').append('<p id = "userturn2"></p>');
	$('#main').append('<p id = "attackhit"></p>');
	$('#main').append('<p id = "goblinturn1"></p>');
	document.getElementById("goblinturn1").style.color = "#b3b300";	//Adds color to the paragraph
	$('#main').append('<p id = "goblinturn2"></p>');
	$('#main').append('<p id = "burntext"></p>');
	$('#main').append('<p id = "damageblockedtext"></p>');
	$('#main').append('<p id = "goblinattackhit"></p>');
	$('#main').append('<p id = "goblinscream"></p>');
	$('#main').append('<p id = "leveluptext"></p>');
}
function resettext() {	//Removes the text
	document.getElementById("gainhealthtext").innerHTML = "";
	document.getElementById("userturn2").innerHTML = "";
	document.getElementById("attackhit").innerHTML = "";
	document.getElementById("gainhealthtext").innerHTML = "";
	document.getElementById("strengthpotiontext").innerHTML = "";
	document.getElementById("firebombtext").innerHTML = "";
}
function goblinresettext() {
	document.getElementById("goblinturn1").innerHTML = "";
	document.getElementById("goblinturn2").innerHTML = "";
	document.getElementById("burntext").innerHTML = "";
	document.getElementById("damageblockedtext").innerHTML = "";
	document.getElementById("goblinattackhit").innerHTML = "";
}
function fullresettext() {
	document.getElementById("combatstart").innerHTML = "";
	document.getElementById("userturn1").innerHTML = "";
	document.getElementById("gainhealthtext").innerHTML = "";
	document.getElementById("strengthpotiontext").innerHTML = "";
	document.getElementById("firebombtext").innerHTML = "";
	document.getElementById("userturn2").innerHTML = "";
	document.getElementById("attackhit").innerHTML = "";
	document.getElementById("goblinturn1").innerHTML = "";
	document.getElementById("goblinturn2").innerHTML = "";
	document.getElementById("burntext").innerHTML = "";
	document.getElementById("damageblockedtext").innerHTML = "";
	document.getElementById("goblinattackhit").innerHTML = "";
	document.getElementById("leveluptext").innerHTML = "";
}
function fightGoblin(){	//If user fights goblin
	document.getElementById("userturn1").innerHTML = "Your turn!";	//Adds text
	resettext();	//Text is reset to nothing
	document.getElementById("userturn2").innerHTML = "You swing your weapon!";	//Adds text
	attack = Math.floor((Math.random() * 2) + 1);	//User has a 50% chance of hitting the enemy
	if (attack === 1) {	//If user misses
		document.getElementById("attackhit").innerHTML = "Miss!";	//Adds text
		goblinTurn();	//Starts the goblin's turn
	}
	else {	//If user hits
		if (Character.weapon === "The SoulSlayer") {	//If user equipped the SoulSlayer
			totaldamage = Math.floor(Math.random()*(8)+1);	//Damage is between 1 and 8
			if (strengthpotion) {	//If user drank strength potion
				var potiondamage = Math.floor(Math.random()*(6)+1);	//Damage is between 1 and 6
				totaldamage = totaldamage + potiondamage;	//Potion damage is added to the weapon damage
			}
			totaldamage = totaldamage + souls;	//Souls damage are added to the total damage
			document.getElementById("attackhit").innerHTML = "Hit! You deal " + totaldamage + " damage!";	//Adds text
			Goblin.health = Goblin.health - totaldamage;	//Decreases goblin health
			document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
			if (Goblin.health <= 0) {	//If goblin's health is less than 0
				Goblin.health = 0;	//Goblin's health is returned to 0
				document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
				goblinresettext();
				levelup();	//Starts the next part of the story
			}
			else {	//If goblin is still alive
				goblinTurn();	//Starts the goblin's turn
			}
		}
		else if (Character.weapon === "The BloodThirster") {	//If user equips the BloodThirster
			totaldamage = Math.floor((Math.random() * 8) + 1);	//Damage is between 1 and 8
			if (strengthpotion) {	//If strength potion is used
				var potiondamage = Math.floor((Math.random() * 6) + 1);	//Damage is between 1 and 6
				totaldamage = totaldamage + potiondamage;	//Adds potion damage to the weapon damage
			}
			totaldamage = totaldamage + blood;	//Weapon damage is increased by amount of blood taken
			document.getElementById("attackhit").innerHTML = "Hit! You deal " + totaldamage + " damage! Blood seeps into the blade.";	//Adds text
			if (blood < 5) {	//If blood is less than 5
				blood += 1;	//Adds one to the blood counter
			}
			document.getElementById("charblood").innerHTML = "Blood taken: " + blood;	//Updates the blood counter
			Goblin.health = Goblin.health - totaldamage;	//Decreases the goblin's health
			document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates the goblin's health
			if (Goblin.health <= 0) {	//If goblin's health is less than 0
				Goblin.health = 0;	//Returns goblin's health to 0
				document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates the goblin's health
				goblinresettext();
				levelup();	//Starts the next part of the story
			}
			else {
				goblinTurn();	//Starts the goblin's turn
			}
		}
		else if (Character.weapon === "The DevilDestroyer") {	//If user equips the DevilDestroyer
			totaldamage = Math.floor((Math.random() * 10) + 1);	//Damage is between 1 and 10
			if (strengthpotion) {	//If strength potion is used
				var potiondamage = Math.floor((Math.random() * 6) + 1);	//Damage is between 1 and 6
				totaldamage = totaldamage + potiondamage;	//Potion damage is added to the weapon damage
			}
			firedamage = Math.floor((Math.random() * 6) + 1);	//Damage is between 1 and 6
			if (firedamage === 6) {	//If firedamage is equal to 6
				burn = true;	//Goblin is burned
				totaldamage = totaldamage + firedamage;	//Fire damage is added to weapon damage
				document.getElementById("attackhit").innerHTML = "Critical Hit! You deal " + totaldamage + " damage!";	//Adds text
				Goblin.health = Goblin.health - totaldamage;	//Goblin's health is decreased
				document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
				if (Goblin.health <= 0) {	//If goblin's health is below zero
					Goblin.health = 0;	//Goblin's health is equal to 0
					document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
					goblinresettext();
					levelup();	//Starts the next part of the story
				}
				else {	//If goblin is still alive
					goblinTurn();	//Starts goblin's turn
				}
			}
			else {	//If fire damage is below 6
				totaldamage = totaldamage + firedamage;	//Fire damage is added to weapon damage
				document.getElementById("attackhit").innerHTML = "Hit! You deal " + totaldamage + " damage!";	//Adds text
				Goblin.health = Goblin.health - totaldamage;	//Goblin's health is decreased
				document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
				if (Goblin.health <= 0) {	//If goblin's health is below zero
					Goblin.health = 0;	//Goblin's health is equal to zero
					document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
					goblinresettext();
					levelup();	//Starts the next part of the journey
				}
				else {
					goblinTurn();	//Starts goblin's turn
				}
			}
		}
	}
}
function useItem() {	//If character uses an item
	resettext();	//Text is reset
	if (Character.item === "Regular Health Potion") {	//If character uses the regular health potion
		var healthreceived = Math.floor(Math.random()*(11)+5);	//Health is between 5 and 15
		Character.health = Character.health + healthreceived;	//Character's health is increased
		if (Character.health > Character.maxhealth) {	//If character's health is more than maximum health
			Character.health = Character.maxhealth;	//Character's health is equal to maximum health
		}
		document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character's health
		document.getElementById("gainhealthtext").innerHTML = "*GAINED " + healthreceived + " health!*";	//Adds text
		Character.item = "";
		document.getElementById("charitem").innerHTML = "Item: NONE";	//Updates item text
		document.getElementById("charitem").style.color = "white";	//Changes item statistic color to white
		goblinTurn();	//Starts goblin's turn
	}
	else if (Character.item === "Superior Health Potion") {	//If character uses a superior health potion
		var healthreceived = Math.floor(Math.random()*(16)+15);	//Health is between 15 and 30
		Character.health = Character.health + healthreceived;	//Character's health is increased
		if (Character.health > Character.maxhealth) {	//If character's health is more than maximum health
			Character.health = Character.maxhealth;	//Character's health is equal to maximum health
		}
		document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character's health
		document.getElementById("gainhealthtext").innerHTML = "GAINED " + healthreceived + " health!";	//Adds text
		Character.item = "";
		document.getElementById("charitem").innerHTML = "Item: NONE";	//Updates item statistic text
		document.getElementById("charitem").style.color = "white";	//Changes item statistic color to white
		goblinTurn();	//Starts goblin's turn
	}
	else if (Character.item === "Stone Giant Strength Potion") {	//If character uses stone giant strength potion
		strengthpotion = true;	//Strength potion is used
		document.getElementById("strengthpotiontext").innerHTML = "You chug the strength potion. It tastes very stale and moldy. Your muscles tense and you feel much more powerful.";	//Adds text
		Character.item = "";
		document.getElementById("charitem").innerHTML = "Item: NONE";	//Updates item statistic text
		document.getElementById("charitem").style.color = "white";	//Changes item statistic color to white
		goblinTurn();	//Starts goblin's turn
	}
	else if (Character.item === "Firebomb") {	//If character uses a firebomb
		var firebombdamage = Math.floor(Math.random()*(11)+10);	//Damage is between 15 and 20
		if (firebombdamage >= 15) {	//If firebomb damage is more than 14
			burn = true;	//Goblin is burned
		}
		Goblin.health = Goblin.health - firebombdamage;	//Goblin's health is decreased
		document.getElementById("firebombtext").innerHTML = "You chuck the firebomb. It deals " + firebombdamage + " damage!";	//Adds text
		document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
		Character.item = "";
		document.getElementById("charitem").innerHTML = "Item: NONE";	//Updates item statistic text
		document.getElementById("charitem").style.color = "white";	//Changes item statistic color to white
		if (Goblin.health <= 0) {	//If goblin's health is below zero
			Goblin.health = 0;	//Goblin's health is equal to zero
			document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
			goblinresettext();
			levelup();	//Starts the next part of the story
		}
		else {
			goblinTurn();	//Starts goblin's turn
		}
	}
	else {	//If character does not equip any items
		alert("You have no items!");	//Alerts the user
		return;
	}
}
function goblinflee() {
	resettext();
	var confirmflee = prompt("Are you sure you want to flee? (y/n)");
	confirmflee = confirmflee.toUpperCase();
	if (confirmflee === "Y" || confirmflee === "YES") {
		var fleechance = Math.floor((Math.random()*100) + 1);
		if (fleechance <=40) {
			villageburn = true;
			createParagraph("You manage to run away from the creature. It chases after you. After a couple minutes, the creature stops moving. It turns and heads back down the path. You aren't sure what it might do, but you are safe for now.", "narrative");
			fleed = true;
		}
		else {
			document.getElementById("fleetext").innerHTML = "In the midst of the battle, you try to run away from the creature. It chases after you and blocks you from running further away.";
			goblinTurn();
		}
	}
	else if (confirmflee === "N" || confirmflee === "NO") {
		return;
	}
	else {
		alert("That is not a valid answer!");
		goblinflee();
	}
}
function goblinTurn() {	//Goblin's turn
	document.getElementById("goblinturn1").innerHTML = "Goblin's Turn!";	//Adds text
	if (burn) {	//If goblin is burned
		Goblin.health = Goblin.health - 1;	//Goblin's health decreases by one
		document.getElementById("burntext").innerHTML = "Suffers 1 point of fire damage!";	//Adds text
		if (Goblin.health <= 0) {	//If goblin's health is below zero
			Goblin.health = 0;	//Goblin's health is equal to zero
			document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
			goblinresettext();
			levelup();	//Starts the next part of the story
		}
	}
	document.getElementById("goblinturn2").innerHTML = "The creature swings its blades!";	//Adds text
	attack = Math.floor((Math.random() * 2) + 1);	//Checks if weapon hits or not
	if (attack === 1) {	//If weapon misses
		document.getElementById("goblinattackhit").innerHTML = "Miss!";	//Adds text
		document.getElementById("damageblockedtext").innerHTML = "";	//Resets extra text
	}
	else {
		totaldamage = Math.floor((Math.random() * 7) + 1);	//Damage is between 1 and 7
		if (usable === false) {	//If character equips an armor
			if (Character.item === "Enchanted Wooden Armor") {	//If character equips enchanted wooden armor
				var armorspecial = Math.floor((Math.random()* 100) + 1);	//Checks if armor's special triggers
				if (armorspecial <= 30) {	//If it triggers
					totaldamage = 0;	//Damage is blocked completely
					document.getElementById("damageblockedtext").innerHTML = "Damage blocked entirely!";	//Adds text
				}
				else {	//If armor special is not triggered
					totaldamage = totaldamage - 2;	//Damage is decreased by 2
					if (totaldamage < 0) {	//If damage is below zero
						totaldamage = 0;	//Damage is equal to zero
					}
					document.getElementById("damageblockedtext").innerHTML = "1 damage blocked!";	//Adds text
				}
			}
			else {	//If character equips dragonplate armor
				var armorspecial = Math.floor((Math.random()* 100) + 1);	//Checks if armor's special triggers
				if (armorspecial <= 20) {	//If it does
					Goblin.health = Goblin.health - totaldamage;	//Goblin's health decreases
					document.getElementById("damageblockedtext").innerHTML = "PARRIED!" + totaldamage + " damage dealt!";	//Adds text
					if (Goblin.health <= 0) {	//If goblin's health is below zero
						Goblin.health = 0;	//Goblin's health is equal to zero
						document.getElementById("goblinhealth").innerHTML = "Health: " + Goblin.health + "/" + Goblin.maxhealth;	//Updates goblin's health
						levelup();	//Starts the next part of the story
					}
				}
				else {	//If armor special does not trigger
					totaldamage = totaldamage - 3;	//Damage is reduced by 3
					if (totaldamage < 0) {	//If damage is below zero
						totaldamage = 0;	//Damage is equal to zero
					}
					document.getElementById("damageblockedtext").innerHTML = "3 damage blocked!";	//Adds text
				}
			}
		}
		document.getElementById("goblinattackhit").innerHTML = "The creature deals " + totaldamage + " damage!";	//Adds text
		Character.health = Character.health - totaldamage;	//Decreases character health
		document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character health
		if (Character.health <= 0) {	//If character dies
			Character.health = 0;
			document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character health
			loseGoblin();	//Starts the lose function
		}
	}
}
function loseGoblin() {	//If character dies
	fullresettext();
	createParagraph("The creature drives its two blades down your shoulders and slices your body into halves. It sheathes its blades and continues walking down the path. The legend of " + Character.name + " the " + Character.title + " is over...", "narrative");
	createParagraph("** GAME OVER **", "losetext");
}
function levelup() {
	document.getElementById("goblinscream").innerHTML = "\"ARGH!\"";
	document.getElementById("leveluptext").innerHTML =  "*Level up! Maximum health increased!*";
	Character.health = Character.health + 5;
	Character.maxhealth = Character.maxhealth + 10;
	document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character health
}
function Journeypt4() {	//If goblin dies
	fullresettext();
	if (Character.weapon === "The SoulSlayer") {
		createParagraph("You drive the sword through the creature's heart. Your sword begins to glow in white color. The last breath escapes the goblin's mouth and the body becomes limp. You pull the sword out and the creature falls to the ground. You feel as if your sword is a bit larger than it was before.", "narrative");
		souls = souls + 1;
		document.getElementById("charsouls").innerHTML = "Souls taken: " + souls;

	}
	else if (Character.weapon === "The BloodThirster") {
		createParagraph("You swing your sword and slice through the creature's neck. Its eyes look at you with shock before the head falls backwards onto the ground. The body becomes limp and falls towards you. Spurts of blood cover your weapon. The blood slowly begins entering your sword and the red mist grows even stronger.", "narrative");
	}
	else {
		createParagraph("You strike your sword across the creature stomach. It tumbles backwards clutching its wounds. Suddenly, the creature's entire body bursts into flames. You watch as the creature falls into the ground and burns to a crisp. You feel your weapon pulse with heat.", "narrative");
	}
	createParagraph("You sheath your weapon and continue down the path. After a couple hours pass, you notice the sun beginning to set. You sprint down the path. You feel your feet hit the ground and the wind blowing past your face. The moon lights up your surrondings, and out in the horizon you see the roof of the cave. As you get closer, you notice a giant hole in the front of the brown, rocky cave. You stop at the entrance of the cave.", "narrative");
	createParagraph("The cuts and bruises on your body begin to hurt.", "narrative");
}
function longrest() {
	createParagraph("Feeling weak from the recent battle, you decide to rest for the night. You set up a camp and go to sleep, not knowing if you will survive the upcoming fight.", "narrative");
	Dragon.health = Dragon.health + 10;
	Dragon.maxhealth = Dragon.maxhealth + 10;
	Character.health = Character.maxhealth;
	document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;
	createParagraph("*HEALTH FULLY RESTORED*", "gainhealth");
	createParagraph("You wake up to the sounds of birds chirping in the distance. You get ready and gather your equipment.", "narrative");
	if (Character.weapon === "The BloodThirster") {
		blood = 0;
		document.getElementById("charblood").innerHTML = "Blood taken: " + blood;
		createParagraph("You notice that your sword is a much less heavier than before.", "narrative");
	}

}
function norest() {
	createParagraph("Despite suffering injuries from the previous battle, you head inside.", "narrative");
}
function Journeypt5() {
	createParagraph("You enter the dark cave. You light up a torch and notice hundreds of different runes carved onto the walls. At the end of the cave, an enormous, red-scaled dragon rests on the ground. As soon as you get close, its ears spring up. Its eyes open and dart around the room until they both focus on you. The beast rises and roars echoing all throughout the cave.", "narrative");
	createParagraph("You unsheathe your weapon and charge!", "narrative");
	displayDragonstats();
}
function displayDragonstats() {	//Displays the goblin's stats
	createDragon("dragonName", "Name: Aragon");	//Adds the name
	createDragon("dragonTitle", "Title: Doombringer");	//Adds the title
	createDragon("dragonHealth", "Health: " + Dragon.health + "/" + Dragon.maxhealth);	//Adds the health statistic
}
function prepareCombat2() {	//Prepares the necessary paragraphs for combat
	$('#main').append('<p id ="combatstart2">**BATTLE START**</p>');
	$('#main').append('<p id = "userturn3"></p>');
	document.getElementById("userturn3").style.color = namecolor;	//Adds color to the paragraph
	$('#main').append('<p id = "gainhealthtext2"></p>');
	$('#main').append('<p id = "strengthpotiontext2"></p>');
	$('#main').append('<p id = "firebombtext2"></p>');
	$('#main').append('<p id = "userturn4"></p>');
	$('#main').append('<p id = "attackhit2"></p>');
	$('#main').append('<p id = "dragonturn1"></p>');
	document.getElementById("dragonturn1").style.color = "#b3b300";	//Adds color to the paragraph
	$('#main').append('<p id = "dragonturn2"></p>');
	$('#main').append('<p id = "burntext2"></p>');
	$('#main').append('<p id = "damageblockedtext2"></p>');
	$('#main').append('<p id = "dragonattackhit"></p>');
	$('#main').append('<p id = "dragondeathcry"></p>');
	$('#main').append('<p id = "leveluptext2"></p>');
}
function resettext2() {	//Removes the text
	document.getElementById("gainhealthtext2").innerHTML = "";
	document.getElementById("userturn4").innerHTML = "";
	document.getElementById("attackhit2").innerHTML = "";
	document.getElementById("gainhealthtext2").innerHTML = "";
	document.getElementById("strengthpotiontext2").innerHTML = "";
	document.getElementById("firebombtext2").innerHTML = "";
}
function dragonresettext() {
	document.getElementById("dragonturn1").innerHTML = "";
	document.getElementById("dragonturn2").innerHTML = "";
	document.getElementById("burntext2").innerHTML = "";
	document.getElementById("damageblockedtext2").innerHTML = "";
	document.getElementById("dragonattackhit").innerHTML = "";
}
function fullresettext2() {
	document.getElementById("combatstart2").innerHTML = "";
	document.getElementById("userturn3").innerHTML = "";
	document.getElementById("gainhealthtext2").innerHTML = "";
	document.getElementById("strengthpotiontext2").innerHTML = "";
	document.getElementById("firebombtext2").innerHTML = "";
	document.getElementById("userturn4").innerHTML = "";
	document.getElementById("attackhit2").innerHTML = "";
	document.getElementById("dragonturn1").innerHTML = "";
	document.getElementById("dragonturn2").innerHTML = "";
	document.getElementById("burntext2").innerHTML = "";
	document.getElementById("damageblockedtext2").innerHTML = "";
	document.getElementById("dragonattackhit").innerHTML = "";
}
function fightDragon(){	//If user fights goblin
	document.getElementById("userturn3").innerHTML = "Your turn!";	//Adds text
	resettext2();	//Text is reset to nothing
	document.getElementById("userturn4").innerHTML = "You swing your weapon!";	//Adds text
	attack = Math.floor((Math.random() * 2) + 1);	//User has a 50% chance of hitting the enemy
	if (attack === 1) {	//If user misses
		document.getElementById("attackhit2").innerHTML = "Miss!";	//Adds text
		dragonTurn();	//Starts the goblin's turn
	}
	else {	//If user hits
		if (Character.weapon === "The SoulSlayer") {	//If user equipped the SoulSlayer
			totaldamage = Math.floor((Math.random() * 8) + 1);	//Damage is between 1 and 8
			if (strengthpotion) {	//If user drank strength potion
				var potiondamage = Math.floor((Math.random() * 6) + 1);	//Damage is between 1 and 6
				totaldamage = totaldamage + potiondamage;	//Potion damage is added to the weapon damage
			}
			totaldamage = totaldamage + souls;	//Souls damage are added to the total damage
			document.getElementById("attackhit2").innerHTML = "Hit! You deal " + totaldamage + " damage!";	//Adds text
			Dragon.health = Dragon.health - totaldamage;	//Decreases Dragon health
			document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
			if (Dragon.health <= 0) {	//If dragon's health is less than 0
				Dragon.health = 0;	//dragon's health is returned to 0
				document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
				dragonresettext();
				levelup2();	//Starts the next part of the story
			}
			else {	//If dragon is still alive
				dragonTurn();	//Starts the dragon's turn
			}
		}
		else if (Character.weapon === "The BloodThirster") {	//If user equips the BloodThirster
			totaldamage = Math.floor((Math.random() * 8) + 1);	//Damage is between 1 and 8
			if (strengthpotion) {	//If strength potion is used
				var potiondamage = Math.floor((Math.random() * 6) + 1);	//Damage is between 1 and 6
				totaldamage = totaldamage + potiondamage;	//Adds potion damage to the weapon damage
			}
			totaldamage = totaldamage + blood;	//Weapon damage is increased by amount of blood taken
			document.getElementById("attackhit2").innerHTML = "Hit! You deal " + totaldamage + " damage! Blood seeps into the blade.";	//Adds text
			if (blood < 5) {	//If blood is less than 5
				blood += 1;	//Adds one to the blood counter
			}
			document.getElementById("charblood").innerHTML = "Blood taken: " + blood;	//Updates the blood counter
			Dragon.health = Dragon.health - totaldamage;	//Decreases the dragon's health
			document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates the dragon's health
			if (Dragon.health <= 0) {	//If dragon's health is less than 0
				Dragon.health = 0;	//Returns dragon's health to 0
				document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates the dragon's health
				dragonresettext();
				levelup2();	//Starts the next part of the story
			}
			else {
				dragonTurn();	//Starts the dragon's turn
			}
		}
		else if (Character.weapon === "The DevilDestroyer") {	//If user equips the DevilDestroyer
			totaldamage = Math.floor((Math.random() * 10) + 1);	//Damage is between 1 and 10
			if (strengthpotion) {	//If strength potion is used
				var potiondamage = Math.floor((Math.random() * 6) + 1);	//Damage is between 1 and 6
				totaldamage = totaldamage + potiondamage;	//Potion damage is added to the weapon damage
			}
			firedamage = Math.floor((Math.random() * 6) + 1);	//Damage is between 1 and 6
			if (firedamage === 6) {	//If firedamage is equal to 6
				burn = true;	//dragon is burned
				totaldamage = totaldamage + firedamage;	//Fire damage is added to weapon damage
				document.getElementById("attackhit2").innerHTML = "Critical Hit! You deal " + totaldamage + " damage!";	//Adds text
				Dragon.health = Dragon.health - totaldamage;	//dragon's health is decreased
				document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
				if (Dragon.health <= 0) {	//If dragon's health is below zero
					Dragon.health = 0;	//dragon's health is equal to 0
					document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
					dragonresettext();
					levelup2();	//Starts the next part of the story
				}
				else {	//If dragon is still alive
					dragonTurn();	//Starts dragon's turn
				}
			}
			else {	//If fire damage is below 6
				totaldamage = totaldamage + firedamage;	//Fire damage is added to weapon damage
				document.getElementById("attackhit2").innerHTML = "Hit! You deal " + totaldamage + " damage!";	//Adds text
				Dragon.health = Dragon.health - totaldamage;	//dragon's health is decreased
				document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
				if (Dragon.health <= 0) {	//If dragon's health is below zero
					Dragon.health = 0;	//dragon's health is equal to zero
					document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
					dragonresettext();
					levelup2();	//Starts the next part of the journey
				}
				else {
					dragonTurn();	//Starts dragon's turn
				}
			}
		}
	}
}
function useItem2() {	//If character uses an item
	resettext2();	//Text is reset
	if (Character.item === "Regular Health Potion") {	//If character uses the regular health potion
		var healthreceived = Math.floor((Math.random() * 15) + 1);	//Health is between 1 and 15
		Character.health = Character.health + healthreceived;	//Character's health is increased
		if (Character.health > Character.maxhealth) {	//If character's health is more than maximum health
			Character.health = Character.maxhealth;	//Character's health is equal to maximum health
		}
		document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character's health
		document.getElementById("gainhealthtext2").innerHTML = "*GAINED " + healthreceived + " health!*";	//Adds text
		Character.item = "";
		document.getElementById("charitem").innerHTML = "Item: NONE";	//Updates item text
		document.getElementById("charitem").style.color = "white";	//Changes item statistic color to white
		dragonTurn();	//Starts dragon's turn
	}
	else if (Character.item === "Superior Health Potion") {	//If character uses a superior health potion
		var healthreceived = Math.floor((Math.random() * 30) + 1);	//Health is between 1 and 30
		Character.health = Character.health + healthreceived;	//Character's health is increased
		if (Character.health > Character.maxhealth) {	//If character's health is more than maximum health
			Character.health = Character.maxhealth;	//Character's health is equal to maximum health
		}
		document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character's health
		document.getElementById("gainhealthtext2").innerHTML = "GAINED " + healthreceived + " health!";	//Adds text
		Character.item = "";
		document.getElementById("charitem").innerHTML = "Item: NONE";	//Updates item statistic text
		document.getElementById("charitem").style.color = "white";	//Changes item statistic color to white
		dragonTurn();	//Starts dragon's turn
	}
	else if (Character.item === "Stone Giant Strength Potion") {	//If character uses stone giant strength potion
		strengthpotion = true;	//Strength potion is used
		document.getElementById("strengthpotiontext2").innerHTML = "You chug the strength potion. It tastes very stale and moldy. Your muscles tense and you feel much more powerful.";	//Adds text
		Character.item = "";
		document.getElementById("charitem").innerHTML = "Item: NONE";	//Updates item statistic text
		document.getElementById("charitem").style.color = "white";	//Changes item statistic color to white
		dragonTurn();	//Starts dragon's turn
	}
	else if (Character.item === "Firebomb") {	//If character uses a firebomb
		var firebombdamage = Math.floor((Math.random() * 20) + 1);	//Damage is between 1 and 20
		if (firebombdamage >= 15) {	//If firebomb damage is more than 14
			burn = true;	//dragon is burned
		}
		Dragon.health = Dragon.health - firebombdamage;	//dragon's health is decreased
		document.getElementById("firebombtext2").innerHTML = "You chuck the firebomb. It deals " + firebombdamage + " damage!";	//Adds text
		document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
		Character.item = "";
		document.getElementById("charitem").innerHTML = "Item: NONE";	//Updates item statistic text
		document.getElementById("charitem").style.color = "white";	//Changes item statistic color to white
		if (Dragon.health <= 0) {	//If dragon's health is below zero
			Dragon.health = 0;	//dragon's health is equal to zero
			document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
			dragonresettext();
			levelup2();	//Starts the next part of the story
		}
		else {
			dragonTurn();	//Starts dragon's turn
		}
	}
	else {	//If character does not equip any items
		alert("You have no items!");	//Alerts the user
		return;
	}
}

function dragonTurn() {	//dragon's turn
	document.getElementById("dragonturn1").innerHTML = "Dragon's Turn!";	//Adds text
	if (burn) {	//If dragon is burned
		Dragon.health = Dragon.health - 1;	//dragon's health decreases by one
		document.getElementById("burntext2").innerHTML = "Suffers 1 point of fire damage!";	//Adds text
		if (Dragon.health <= 0) {	//If dragon's health is below zero
			Dragon.health = 0;	//dragon's health is equal to zero
			document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
			levelup2();	//Starts the next part of the story
		}
	}
	document.getElementById("dragonturn2").innerHTML = "The beast swings its claws!";	//Adds text
	var attack2 = Math.floor((Math.random() * 2) + 1);	//Checks if weapon hits or not
	if (attack2 === 1) {	//If weapon misses
		document.getElementById("dragonattackhit").innerHTML = "Miss!";	//Adds text
		document.getElementById("damageblockedtext2").innerHTML = "";	//Resets extra text
	}
	else {
		totaldamage = Math.floor((Math.random() * 12) + 1);	//Damage is between 1 and 7
		if (usable === false) {	//If character equips an armor
			if (Character.item === "Enchanted Wooden Armor") {	//If character equips enchanted wooden armor
				var armorspecial = Math.floor((Math.random()* 100) + 1);	//Checks if armor's special triggers
				if (armorspecial <= 10) {	//If it triggers
					totaldamage = 0;	//Damage is blocked completely
					document.getElementById("damageblockedtext2").innerHTML = "Damage blocked entirely!";	//Adds text
				}
				else {	//If armor special is not triggered
					totaldamage = totaldamage - 1;	//Damage is decreased by one
					if (totaldamage < 0) {	//If damage is below zero
						totaldamage = 0;	//Damage is equal to zero
					}
					document.getElementById("damageblockedtext2").innerHTML = "1 damage blocked!";	//Adds text
				}
			}
			else {	//If character equips dragonplate armor
				var armorspecial = Math.floor((Math.random()* 100) + 1);	//Checks if armor's special triggers
				if (armorspecial <= 10) {	//If it does
					Dragon.health = Dragon.health - totaldamage;	//dragon's health decreases
					document.getElementById("damageblockedtext2").innerHTML = "PARRIED!" + totaldamage + " damage dealt!";	//Adds text
					if (Dragon.health <= 0) {	//If dragon's health is below zero
						Dragon.health = 0;	//dragon's health is equal to zero
						document.getElementById("dragonHealth").innerHTML = "Health: " + Dragon.health + "/" + Dragon.maxhealth;	//Updates dragon's health
						levelup2();	//Starts the next part of the story
					}
				}
				else {	//If armor special does not trigger
					totaldamage = totaldamage - 3;	//Damage is reduced by 3
					if (totaldamage < 0) {	//If damage is below zero
						totaldamage = 0;	//Damage is equal to zero
					}
					document.getElementById("damageblockedtext2").innerHTML = "3 damage blocked!";	//Adds text
				}
			}
		}
		document.getElementById("dragonattackhit").innerHTML = "The dragon deals " + totaldamage + " damage!";	//Adds text
		Character.health = Character.health - totaldamage;	//Decreases character health
		document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character health
		if (Character.health <= 0) {	//If character dies
			Character.health = 0;
			document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character health
			loseDragon();	//Starts the lose function
		}
	}
}
function levelup2() {
	document.getElementById("dragondeathcry").innerHTML = "The dragon releases a cry of pain that rings your ears!";
	document.getElementById("leveluptext2").innerHTML =  "*Level up! Maximum health increased!*";
	Character.health = Character.health + 5;
	Character.maxhealth = Character.maxhealth + 10;
	document.getElementById("charhealth").innerHTML = "Health: " + Character.health + "/" + Character.maxhealth;	//Updates character health
}
function loseDragon() {
	fullresettext2();
	createParagraph("The beast picks you up with its gigantic claws. It brings you up to its face. You try thrash and flail your weapon at it. The dragon opens its mouth and swallows you whole. Your body is crushed by its sharp teeth. The legend of " + Character.name + " the " + Character.title + " is over...", "narrative");
	createParagraph("** GAME OVER **", "losetext");
}
function Journeypt6() {
	fullresettext2();
	createParagraph("You leap onto the dragon's back and climb up to its head. You take " + Character.weapon + " and force it into the dragon's skull. Aragon releases a final cry of pain before falling onto the ground. The cave begins shaking and pieces fall from the rooftop. You quickly exit just in time before the cave is turned into a pile of rubble along with the dragon's corpse inside. Standing outside, you're unsure of what to do next.", "narrative");
}
function backtotown() {
	if (fleed) {
		createParagraph("With your quest finally completed, you decide to go back to BloomTown. After walking down the path for a few hours, you notice a large cloud of smoke emanating from the cnter of the town. You rush in and pass through the entrance. The entire town is burned to ashes...You wonder to yourself whom the perpetrator is. A flash of white cloth passes your mind...", "narrative");
		createParagraph("Congratulations, " + Character.name + " the " + Character.title + ". ENDING B - FIERY VENGENCE", "badend");
	}
	else {
		createParagraph("With your quest finally completed, you decide to go back to BloomTown. After walking down the path for a few hours, you are greeted with a massive, excited crowd at the entrance. As you get closer, you see Merlin in the front staring at you with a smile. You are greeted with a warm welcome and spend the rest of the day at the local tavern. The next day you gather your equipment and leave town for your next adventure...", "narrative");
		createParagraph("Congratulations, " + Character.name + " the " + Character.title + ". ENDING A - SAVIOR OF BLOOMTOWN", "win");
	}
	
}
function ownpath() {
	createParagraph("With your quest finally completed, you decide not to go back to BloomTown. You notice a path branching on the other side of the cave. It glows bright with a fiery-red color. Curious, you head down the path, unsure of what challenges you might face next...", "narrative");
	createParagraph("Congratulations, " + Character.name + " the " + Character.title + ". ENDING C - LONE WARRIOR", "win");
}
function characterName() {	//Function asks user for their hero's name
	var name = prompt("Enter your hero's name (Must include atleast 3 letters): ");	//Asks user to enter hero's name
	if (name === null || name === "") {	//If user enters nothing
		characterName();	//Restarts function
	}
	else if (!name.match(letters) || name.length < 3 || name.length >= 12) {	//If user enters special characters or numbers
		characterName();	//Restarts function
	}
	else {
		return name;	//Returns name
	}
}
function characterTitle() {	//Function asks the user to enter title
	var title = prompt("Enter your hero's title (Ex: \"Legend\",\"Destroyer\"): ");	//Asks the user to enter the title
	if (title === null || title === "") {	//If user enters nothing
		characterTitle();	//Restarts function
	}
	else if (!title.match(letters)) {	//If user enters special characters or numbers
		characterTitle();	//Restarts function
	}
	else {
		return title;	//Returns title
	}
}
function easycharacterHealth() {	//Generates character health
	var health = 50 + (Math.floor(Math.random() *11));	//Health is between 50 and 60
	Character.health = health;	//Adds the health to the character object
	Character.maxhealth = health;	//Adds the maximum health to the object
	return;
}
function characterHealth() {
	var health = 30 + (Math.floor(Math.random() *11));	//Health is between 30 and 40
	Character.health = health;	//Adds the health to the character object
	Character.maxhealth = health;	//Adds the maximum health to the object
	return;
}
function hardcharacterHealth() {
	var health = 25 + (Math.floor(Math.random() *11));	//Health is between 25 and 35
	Character.health = health;	//Adds the health to the character object
	Character.maxhealth = health;	//Adds the maximum health to the object
	return;
}
function createParagraph(text, classname) {
	$('#main').append('<p class = ' + classname + '>' + text + '</p>');
}
function createStatistics(id, text) {
	$('#characterstats').append('<p id = ' + id + '>' + text + '</p>');
}
function createGoblin(id, text) {	//Adds a goblin statistic
	$('#goblinstats').append('<p id = ' + id + '>' + text + '</p>');
}
function createDragon(id, text) {
	$('#dragonstats').append('<p id = ' + id + '>' + text + '</p>');
}
$(document).ready(function() {
	characterHealth();
	$('#easy').click(function() {
		Goblin.health = 15;
		Goblin.maxhealth = 15;
		Dragon.health = 35;
		Dragon.maxhealth = 35;
		easycharacterHealth();
	});
	$('#medium').click(function() {
		Goblin.health = 20;
		Goblin.maxhealth = 20;
		Dragon.health = 40;
		Dragon.maxhealth = 40;
		characterHealth();
	});
	$('#hard').click(function() {
		Goblin.health = 25;
		Goblin.maxhealth = 25;
		Dragon.health = 45;
		Dragon.maxhealth = 45;
		hardcharacterHealth();
	});
});