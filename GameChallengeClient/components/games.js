import React from 'react'
import Game from './game'
import GameInput from './gameinput'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { callReducer } from '../react-state'

const Container = styled.div`
  text-align: center;
  padding-top: 25px;
  display: inline;
`
const Games = ({ games = [{}] }) => {
    const addGame = (game) => callReducer('addGame', { id: games.length + 1, title: game.title, platform: game.platform })

    return <Container>
        <h2>Games you've completed </h2>
        {games.map((x, index) => <Game id='game' key={index} game={x} />)}

        <GameInput addGame={addGame} />
    </Container>
}

export default connect(s => ({ games: s.games }))(Games)