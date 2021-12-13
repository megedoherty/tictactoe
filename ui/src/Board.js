import { useState } from 'react'
import { Grid } from 'semantic-ui-react'

import Space from './Space'

/*
 * Player 1 is X, player 2 is O
 */

const player1 = 'close'
const player2 = 'circle outline'

const Board = () => {
  const [ spaces, setSpaces ] = useState(() => {
	  const x = new Array(3)

		for (let i = 0; i < x.length; i++) {
			x[i] = new Array(3).fill(null)
		}

		return x
	})
  const [ player, setPlayer ] = useState(1)

  const updateSpace = (row, column) => {
		// Update the board with the new move
		const newSpaces = spaces
		spaces[row][column] = player === 1 ? player1 : player2
		setSpaces(newSpaces)

		// Switch players
		setPlayer(prev => prev === 1 ? 2 : 1)
	}

  return (
    <Grid relaxed celled='internally' columns={3}>
			{ spaces.map((row, rowIndex) => {
				// Iterating over each row now
				return (
				  <Grid.Row>
  				  {
							row.map((column, columnIndex) => {
								// Add 3 spaces to each row
								return (
  							  <Grid.Column>
	   	    				  <Space row={rowIndex} column={columnIndex} value={column} updateSpace={updateSpace} />
		  						</Grid.Column>
								)
	     			  })
						}
					</Grid.Row>
				)})
			}
		</Grid>
  )
}

export default Board
