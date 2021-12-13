import { Icon } from 'semantic-ui-react'

const Space = (props) => {
	// This space still needs a value
  if (props.value == null) {
	  return (
			<div
			  className='empty-space'
				onClick={() => props.updateSpace(props.row, props.column)}
			/>
		)
	}

  // If the game is over, we want to color the winning icons green
	let winning = false
	if (props.winningSpaces != null) {
	  for (let i = 0; i < props.winningSpaces.length; i++) {
		  if (props.winningSpaces[i][0] === props.row && props.winningSpaces[i][1] === props.column) {
				winning = true
				break
			}
		}
	}

  // We have a value to show
  return (
		<Icon
			inverted
			name={props.value}
			size='massive'
			className='filled-space'
			color={ winning ? 'green' : 'white' }
		/>
	)
}

export default Space
