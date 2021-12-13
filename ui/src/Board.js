import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'

import Result from './Result'
import Space from './Space'
import { checkWinner, getNewBoard } from './helpers'

const player1 = 'close'
const player2 = 'circle outline'

const Board = () => {
  const [ spaces, setSpaces ] = useState(getNewBoard())
  const [ player, setPlayer ] = useState(1)
  const [ gameResult, setGameResult ] = useState(null)
  const [ winningSpaces, setWinningSpaces ] = useState(null)
  const [ filledInSpaces, setFilledInSpaces ] = useState(0)

  const saveGame = async(board, result) => {
    fetch('/savegame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        board: board,
        result: result,
      })
    })
  }

  const updateSpace = (row, column) => {
    // If the game is over, ignore the action
    if (gameResult != null) return

    // Update the board with the new move
    const newSpaces = spaces
    spaces[row][column] = player === 1 ? player1 : player2
    setSpaces(newSpaces)

    // Check for winner with this space
    let result = null
    const gameOver = checkWinner(newSpaces, row, column)

    if (gameOver != null) {
      result = `Player ${player}`
      setWinningSpaces(gameOver)
    }

    // If there's no winner, check if its a tie
    if (result == null && filledInSpaces + 1 === 9) {
      result = 'tie'
    }

    if (result != null) {
      setGameResult(result)
      saveGame(newSpaces, result)
      return
    }

    setFilledInSpaces(prev => prev + 1)

    // No winner, so switch player
    setPlayer(prev => prev === 1 ? 2 : 1)
  }

  const resetGame = () => {
    setSpaces(getNewBoard)
    setPlayer(1)
    setGameResult(null)
    setFilledInSpaces(0)
    setWinningSpaces(null)
  }

  return (
    <React.Fragment>
      <Grid relaxed celled='internally' columns={3} className={ gameResult != null ? 'game-over' : '' }>
        { spaces.map((row, rowIndex) => {
          // Iterating over each row now
          return (
            <Grid.Row key={rowIndex}>
              {
                row.map((column, columnIndex) => {
                  // Add 3 spaces to each row
                  return (
                    <Grid.Column key={columnIndex}>
                      <Space row={rowIndex} column={columnIndex} value={column} updateSpace={updateSpace} winningSpaces={winningSpaces}/>
                    </Grid.Column>
                  )
                })
              }
            </Grid.Row>
          )})
        }
      </Grid>
      <Result gameResult={gameResult} player={player} resetGame={resetGame}/>
    </React.Fragment>
  )
}

export default Board
