import React from 'react'
import { Divider, Header, Icon } from 'semantic-ui-react'

import Board from './Board'

import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div>
        <Header as='h2' icon inverted textAlign='center' className='game-title'>
          <Icon name='grid layout' />
          Tic-Tac-Toe
        </Header>
      </div>

      <Divider />
			
			<div className='game-content'>
        <Board />
			</div>
    </div>
  )
}

export default App
