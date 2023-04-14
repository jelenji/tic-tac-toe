let squares = document.querySelectorAll(".square");
let wrapper = document.querySelector(".wrapper");
let newGame = document.querySelector(".new-game");
let conclusion = document.querySelector(".conclusion");

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let xTurn = true;
  let oTurn = false;
  let playing = true;

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    xTurn = true;
    oTurn = false;
    playing = true;
    resetBoard();
  };

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const changeTurn = () => {
    xTurn = xTurn == true ? false : true;
    oTurn = oTurn == true ? false : true;
  };

  const move = (a) => {
    if (board[a] === "" && playing === true) {
      board[a] = xTurn === true ? "X" : "O";
      displayBoard(board);
      checkWin();
      changeTurn();
    }
  };

  const checkWin = () => {
    let first,
      second,
      third,
      fullBoard,
      winnerFound = false;
    for (let i = 0; i < winConditions.length; i++) {
      first = board[winConditions[i][0]];
      second = board[winConditions[i][1]];
      third = board[winConditions[i][2]];

      if (first === "" || second === "" || third === "") {
        continue;
      }

      if (first === second && first === third) {
        winner(
          first,
          winConditions[i][0],
          winConditions[i][1],
          winConditions[i][2]
        );
        playing = false;
        winnerFound = true;
        break;
      }
    }

    if (winnerFound !== true) {
      fullBoard = board.find((element) => element === "");
      if (fullBoard === undefined) {
        winner("-");
        playing = false;
      }
    }
  };

  return { board, move, reset };
})();

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    index = e.target.id;
    gameBoard.move(index);
  });
});

newGame.addEventListener("click", () => {
  gameBoard.reset();
});

function resetBoard() {
  conclusion.textContent = "";
  squares.forEach((square) => {
    square.textContent = "";
    square.classList.remove("inverted")
  });
}

function displayBoard(board) {
  resetBoard();
  let counter = 0,
    element,
    symbol;

  squares.forEach((square) => {
    if (board[counter] === "") {
      counter++;
    } else {
      symbol = board[counter];
      element = document.createElement("div");
      element.classList.add("symbol");
      element.textContent = symbol;
      square.appendChild(element);
      counter++;
    }
  });
}

function winner(symbol, squareA = 0, squareB = 0, squareC = 0) {
  conclusion.textContent =
    symbol === "X"
      ? "X Won"
      : symbol === "O"
      ? "O Won"
      : "It's A Draw";

      if(symbol !== "-"){
        let cellA = document.querySelector(`#${CSS.escape(squareA)}`);
        let cellB = document.querySelector(`#${CSS.escape(squareB)}`);
        let cellC = document.querySelector(`#${CSS.escape(squareC)}`)

        cellA.classList.add('inverted');
        cellA.firstChild.style.color = "#222831";
        cellB.classList.add('inverted');
        cellB.firstChild.style.color = "#222831";
        cellC.classList.add('inverted');
        cellC.firstChild.style.color = "#222831";
      }
}
