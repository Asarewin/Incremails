var gameData = {
// initialize basic game numbers
    mail: 0,
    totalMail: 0,
    mailPerClick : 1,
	mailPerClickCost : 10,
}

window.onload = loadsave()

function loadsave() {
  var savegame = JSON.parse(localStorage.getItem("IncremailsSave"))
    if (savegame !== null) {
      gameData = savegame
    }
}

//this function adds the number of mail per clicks each time button is pressed
function processMail() {
    gameData.mail += gameData.mailPerClick
    document.getElementById("mailProcessed").innerHTML = gameData.mail + " Mails processed"
    totalMailCount()
}

// this function counts the total number of mails processed.
function totalMailCount() {
  gameData.totalMail += gameData.mailPerClick
  document.getElementById("totalMailProcessed").innerHTML = gameData.totalMail + " Total mails processed"
}

//lets you buy upgrades that double your mailprocessing power (payed my mails)
function buyMailPerClick() {
	if (gameData.mail >= gameData.mailPerClickCost){
		gameData.mail -= gameData.mailPerClickCost
		gameData.mailPerClick += 1
		gameData.mailPerClickCost *= 2
		document.getElementById("mailProcessed").innerHTML = gameData.mail + " Mail Processed"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade manual mail processing (Currently Level " + gameData.mailPerClick + ") Cost: " + gameData.mailPerClickCost + " Mails"
	}
}

/*var mainGameLoop = window.setInterval(function() {
  }, 1000)*/

  var saveGameLoop = window.setInterval(function() {
	localStorage.setItem("IncremailsSave", JSON.stringify(gameData))
  }, 1000)

  