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

  // We have a value to show
  return <Icon inverted name={props.value} size='massive' className='filled-space' />
}

export default Space
