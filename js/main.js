  console.log("js is working")
  
  /*----- constants -----*/


  /*----- state variables -----*/
let board, turn, winner

  /*----- cached elements  -----*/
const playAgainButton = document.querySelector('button')
const gameBoard = document.querySelector("#board")

  /*----- event listeners -----*/
playAgainButton.addEventListener('click', init);

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
        [0, 0, 0, 0, 0, 0 ,0, 0],
    ];
    
  }