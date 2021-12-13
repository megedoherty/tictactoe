import { Button, Header } from 'semantic-ui-react'

const Result = (props) => {
  if (props.gameResult == null) return null

	const message = props.gameResult === 'tie' ? 'The game is tied!' : `Player ${ props.player } has won!`

	return (
	  <div>
      <Header as='h1' inverted>{ message }</Header>
      <Button
			  inverted
				onClick={props.resetGame}
			>
			  Play Again?
			</Button>
		</div>
	)
}

export default Result
