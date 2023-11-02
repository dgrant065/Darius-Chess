  console.log("js is working")

  /*----- constants -----*/
const PLAYERS = {
  '0': '',
  '1': 'White',
  '-1': 'Black',
}



  /*----- state variables -----*/
let board, turn, winner, blackPieces, whitePieces, boardArr

// classes

//create a 'Piece' class, every piece should have a location property that stores an object, that looks like this {x: 0, y: 0}, 
  /*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const boardEls = [...document.querySelectorAll('#board > div')]

  /*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);

  /*----- functions -----*/
  
  function init() {
    
    boardArr = [
      [],[],[],[],[],[],[],[],
      
    ]
    console.log(boardArr)
    boardTemplate = [
      ['r', 'kn', 'b', 'q', 'k', 'b', 'kn', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['r', 'kn', 'b', 'k', 'q', 'b', 'kn', 'r'],
    ];
    for (let i = 0; i < boardTemplate.length; i++) {
      for (let j = 0; j < boardTemplate[i].length; j++) {
        if (boardTemplate[i][j] === 'r') boardArr[i].push(new Piece(i < 2 ? 'black': 'white')) 
        if (boardTemplate[i][j] === 'kn') boardArr[i].push(new Piece(i < 2 ? 'black': 'white'))
        if (boardTemplate[i][j] === 'b')  boardArr[i].push(new Piece(i < 2 ? 'black': 'white'))
        if (boardTemplate[i][j] === 'k')  boardArr[i].push(new Piece(i < 2 ? 'black': 'white'))
        if (boardTemplate[i][j] === 'q')  boardArr[i].push(new Piece(i < 2 ? 'black': 'white'))
        if (boardTemplate[i][j] === 'p')  boardArr[i].push(new Piece(i < 2 ? 'black': 'white'))
        if (boardTemplate[i][j] === null) boardArr[i].push(null)
      }
    } console.log(boardArr)          
    // buildPieces()
    turn = 1;
  winner = null;
  // render();
}

function buildPieces() {
  console.log(buildPieces)
}

// renderBoard();
// renderMessage();
// renderControls();



function createBoard() {
  const chessboard = document.getElementById('chessboard'); 
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const chessSquare = document.createElement('div');
      chessSquare.className = 'chess-square';
      chessSquare.style.display = 'flex'
      if ((i + j) % 2 == 0) {
        chessSquare.style.backgroundColor = '#000'
        
      }
      chessboard.appendChild(chessSquare);
    }
  }
}

function renderBoard() {
  
}

function renderMessage() {
  // if (winner === 'T') {
    //   messageEl.innerText = "It's a Draw!!!";
    // } else if (winner) {
      //   messageEl.innerHTML = `${PLAYERS[winner]}Wins!`;
      // } else {
        //   messageEl.innerHTML = `${PLAYERS[turn]}'s Turn`;
        // }
      }
      
      function renderControls() {
        playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
      }
      
      function buildPieces() {
        
      }
      
class Piece {
  constructor(color) {
    this.color = color;
  }
}

class Pawn extends Piece {
  move() {}
  }
  
class King extends Piece {
  move() {}
}
    
class Queen extends Piece {
  move() {}
}

class Rook extends Piece {
  move() {}
}

class Bishop extends Piece {
  move() {}
}

class Knight extends Piece {
  move() {}
}
init();
      
      
      
      
      
      
      
      
      
      
      


