  console.log("js is working")
  
  /*----- constants -----*/
const PLAYERS = {
  '0': '',
  '1': 'White',
  '-1': 'Black',
}


  /*----- state variables -----*/
let board, turn, winner

  /*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const boardEls = [...document.querySelectorAll('#board > div')]

  /*----- event listeners -----*/
playAgainBtn.addEventListener('click', init);

  /*----- functions -----*/
  init();

  function init() {

    // board = [
    //     // [0, 0, 0, 0, 0, 0 ,0, 0],
    //     // [0, 0, 0, 0, 0, 0 ,0, 0],
    //     // [0, 0, 0, 0, 0, 0 ,0, 0],
    //     // [0, 0, 0, 0, 0, 0 ,0, 0],
    //     // [0, 0, 0, 0, 0, 0 ,0, 0],
    //     // [0, 0, 0, 0, 0, 0 ,0, 0],
    //     // [0, 0, 0, 0, 0, 0 ,0, 0],
    //     // [0, 0, 0, 0, 0, 0 ,0, 0]
    // ];
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
