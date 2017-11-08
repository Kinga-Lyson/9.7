// zmienne
var newGameButton = document.getElementById('js-newGameButton');
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
    
var playerName = document.getElementById('js-playerName'),
	playerPoint = document.getElementById('js-playerPoints'),
	computerPoint = document.getElementById('js-computerPoints');

var playerPickElement = document.getElementById('js-playerPickElement'),
	resultsTableElement = document.getElementById('js-resultsTableElement'),
	newGameElement = document.getElementById('js-newGameElement'),
	winner = document.getElementById('js-winner'),
	winnerName = document.getElementById('js-winner-name');

var playerPickRock = document.getElementById('js-playerPick_rock'),
	playerPickPaper = document.getElementById('js-playerPick_paper'),
	playerPickScissors = document.getElementById('js-playerPick_scissors');

var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick');

var playerResult = document.getElementById('js-playerResult'),
	computerResult = document.getElementById('js-computerResult');

// pierwsze ustawienie widoczności elementów
setGameElements();
getComputerPick();

// nasłuchiwacze
newGameButton.addEventListener('click', newGame);
playerPickRock.addEventListener('click', function(){playerPick('Rock');});
playerPickPaper.addEventListener('click', function(){playerPick('Paper');});
playerPickScissors.addEventListener('click', function(){playerPick('Scissors');});

//funkcje
function playerPick (playerPick) {
	playerPickElem.innerHTML = playerPick;
	var computerPick = getComputerPick();
	computerPickElem.innerHTML = computerPick;
	console.log(computerPick);
	checkRoundWinner(playerPick, computerPick);
	theWinnerIs();
	}
function getComputerPick () {
	var idMathFloor = Math.floor(Math.random() * 3);
	if (idMathFloor == 0) {
		return ('Paper');
	}
	else if (idMathFloor == 1) {
		return ('Rock');
	}
	else if (idMathFloor == 2) {
		return ('Scissors');
	}
}	
function newGame() {
	player.name = prompt('Please enter your name','Wpisz swoje imię');
	if (player.name){
		player.score = computer.score = 0;
		playerName.innerHTML = player.name;
		gameState = 'started';
		setGameElements();
	}
	else {
		
	}	
}
function setGameElements() {
	switch(gameState) {
		case 'started': 
			newGameElement.style.display = 'none';
			playerPickElement.style.display = resultsTableElement.style.display = 'block';
			winner.style.display = 'none';
			winnerName.innerHTML = '';		
			playerPoint.innerHTML = '0';
			computerPoint.innerHTML = '0';
			playerResult.innerHTML = 'Player Score';
			computerResult.innerHTML = 'Computer Score';
			playerPickElem.innerHTML = 'Player Selection';
			computerPickElem.innerHTML = 'Computer Selection';
		break;
		case 'ended': 
			newGameButton.innerHTML = 'Play again!';
			newGameElement.style.display = 'block';
			playerPickElement.style.display = 'none';
			resultsTableElement.style.display = 'block';
			winner.style.display = 'block';
		break;
		case 'notStarted': 
			playerPickElement.style.display = resultsTableElement.style.display = 'none';
		break;
	}
}
function checkRoundWinner (playerChoice, computerChoice) {
		playerResult.innerHTML = computerResult.innerHTML = '';		
	if (playerChoice == computerChoice) {
		playerResult.innerHTML = computerResult.innerHTML = 'Remis';
	}
	else if ((playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper')) {
		player.score++;
		playerPoint.innerHTML = player.score;
		playerResult.innerHTML = 'Win';
		computerResult.innerHTML = 'Lose';
	}
	else {
		computer.score++;
		computerPoint.innerHTML = computer.score;
		playerResult.innerHTML = 'Lose';
		computerResult.innerHTML = 'Win';
	}
}
function theWinnerIs () {
	if (player.score == 10) {
		gameState = "ended";
		winnerName.innerHTML = 'The winner is Player!';
		setGameElements()
	}
	else if (computer.score == 10) {
		gameState = "ended";
		winnerName.innerHTML = "The winner is computer!";
		setGameElements()
	}
}


