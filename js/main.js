  console.log("js is working")

  /*----- constants -----*/
const PLAYERS = {
  '0': '',
  '1': 'White',
  '-1': 'Black',
}

// const bKing = '<div class="piece" id="king">"https://cdn.discordapp.com/attachments/485962663080230912/1138247122525892638/Chess_qdt60.png"</div>' 
// const bQueen = '<div class="piece" id="queen">"https://cdn.discordapp.com/attachments/485962663080230912/1138247369964650617/Chess_kdt60.png"</div>'
// const bBishop = '<div class="piece" id="bishop">"https://cdn.discordapp.com/attachments/485962663080230912/1138247431084052581/Chess_bdt60.png"</div>'
// const bKnight = '<div class="piece" id="knight">"https://cdn.discordapp.com/attachments/485962663080230912/1138247473492676719/Chess_ndt60.png"</div>'
// const bRook = '<div class="piece" id="rook">"https://cdn.discordapp.com/attachments/485962663080230912/1138247516232630353/Chess_rdt60.png"</div>'
// const bPawn = '<div class="piece" id="pawn">"https://cdn.discordapp.com/attachments/485962663080230912/1138247558121144465/Chess_pdt60.png"</div>'

// const wKing = '<div class="piece" id="king">"https://cdn.discordapp.com/attachments/485962663080230912/1138247601351823460/Chess_qlt60.png"</div>'
// const wQueen = '<div class="piece" id="queen">"https://cdn.discordapp.com/attachments/485962663080230912/1138247651108868146/Chess_klt60.png"</div>'
// const wBishop = '<div class="piece" id="bishop">"https://cdn.discordapp.com/attachments/485962663080230912/1138247667827359754/Chess_blt60.png"</div>'
// const wKnight = '<div class="piece" id="knight">"https://cdn.discordapp.com/attachments/485962663080230912/1138247703042723900/Chess_nlt60.png"</div>'
// const wRook = '<div class="piece" id="rook">"https://cdn.discordapp.com/attachments/485962663080230912/1138247738887241738/Chess_rlt60.png"</div>'
// const wPawn = '<div class="piece" id="pawn">"https://cdn.discordapp.com/attachments/485962663080230912/1138247765743390830/Chess_plt60.png"</div>'

  /*----- state variables -----*/
let board, turn, winner, blackPieces, whitePieces

// classes

//create a 'Piece' class, every piece should have a location property that stores an object, that looks like this {x: 0, y: 0}, 
  /*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const boardEls = [...document.querySelectorAll('#board > div')]

  /*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);

  /*----- functions -----*/
init();

function init() {

  board = [
    [0, 0, 0, 0, 0, 0 ,0, 0],
    [0, 0, 0, 0, 0, 0 ,0, 0],
    [0, 0, 0, 0, 0, 0 ,0, 0],
    [0, 0, 0, 0, 0, 0 ,0, 0],
    [0, 0, 0, 0, 0, 0 ,0, 0],
    [0, 0, 0, 0, 0, 0 ,0, 0],
    [0, 0, 0, 0, 0, 0 ,0, 0],
    [0, 0, 0, 0, 0, 0 ,0, 0]
  ];
  buildPieces()
  turn = 1;
  winner = null;
  render();
}


function render() {
  renderBoard();
  renderMessage();
  renderControls();
}

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
  constructor(column, row, color) {
    this.column = column;
    this.row = row;
    this.color = color;
  }
}

class Pawn extends Piece () {
  move()
    
}

class King extends Piece() {
  move()
}

class Queen extends Piece() {
  move()
}

class Rook extends Piece() {
  move()
}

class Bishop extends Piece() {
  move()
}

class Knight extends Piece() {
  move()
}













