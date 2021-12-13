export const getNewBoard = () => {
  const x = new Array(3)

  for (let i = 0; i < x.length; i++) {
    x[i] = new Array(3).fill(null)
  }

  return x
}

export const checkWinner = (board, row, column) => {
  // The new value on the board
  const value = board[row][column]

  // Check row this was in first
  if (board[row].every(x => x === value)) {
    return [[row, 0], [row, 1], [row, 2]]
  }

  // Check column this was in next
  if (board[0][column] === value && board[1][column] === value && board[2][column] === value) {
    return [[0, column], [1, column], [2, column]]
  }

  // Check left to right diagonal
  if (board[0][0] != null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return [[0, 0], [1, 1], [2, 2]]
  }

  if (board[2][0] != null && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
    return [[2, 0], [1, 1], [0, 2]]
  }

  return null
}
