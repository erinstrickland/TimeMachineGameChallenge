import React from 'react'
import Games from './components/games'
import ReactDOM from 'react-dom'
import store from './react-state'
import { Provider } from 'react-redux'

let url = 'http://localhost:5050/api/game'

const main = async () => {
  const gameList = async () => {
    const jsonArray = []

    const results = await fetch(url)
    const parsed = await results.json()
    parsed.map(x => jsonArray.push(x))
    return jsonArray
  }

  ReactDOM.render(
    <Provider store={store}>
      <Games/>
    </Provider>,
    document.getElementById('root')
  )
}

main()