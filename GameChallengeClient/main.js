import React from 'react'
import Games from './components/games'
import ReactDOM from 'react-dom'

let url = 'http://localhost:5050/api/game'

const main = async () => {
  const gameList = async () => {
    const results = await fetch(url)
    const parsed = await results.json()
    return parsed
  }

  ReactDOM.render(
    <Games games={await gameList()} />,
    document.getElementById('root')
  )
}

main()