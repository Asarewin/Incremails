var gameData = {

    mail: 0,
    totalMail: 0,
    mailPerClick : 1,
	mailPerClickCost : 10
}

function processMail() {
    gameData.mail += gameData.mailPerClick
    document.getElementById("mailProcessed").innerHTML = gameData.mail + " Mails processed"
}

function totalMailCount() {
  gameData.totalMail += gameData.mail
  document.getElementById("totalMailProcessed").innerHTML = gameData.totalMail + "Total mails processed"
}

function buyMailPerClick() {
	if (gameData.mail >= gameData.mailPerClickCost){
		gameData.mail -= gameData.mailPerClickCost
		gameData.mailPerClick += 1
		gameData.mailPerClickCost *= 2
		document.getElementById("mailProcessed").innerHTML = gameData.mail + " Mail Processed"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade manual mail processing (Currently Level" + gameData.mailPerClick + ") Cost: " + gameData.mailPerClickCost + " Mails"
	}
}

/*var mainGameLoop = window.setInterval(function() {
	processMail()
  }, 1000)*/

  var saveGameLoop = window.setInterval(function() {
	localStorage.setItem("IncremailsSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("IncremailsSave"))
if (savegame !== null) {
  gameData = savegame
}