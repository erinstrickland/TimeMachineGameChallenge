import React from 'react'
import Games from './components/games'
import ReactDOM from 'react-dom'

const game = { Id: '1', Title: 'Zelda', Platform: 'NES' }

ReactDOM.render(
    <Games game={game} />,
    document.getElementById('root')
  )
