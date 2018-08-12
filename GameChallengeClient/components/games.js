import React from 'react'
import Game from './game'
import GameInput from './gameinput'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { callReducer } from '../react-state'
import ShowDate from './date'

const Container = styled.div`
  text-align: center;
  padding-top: 25px;
  display: inline;
`
const Games = ({ games = [{}], date }) => {
    const addGame = (game) => callReducer('addGame', { id: games.length + 1, title: game.title, platform: game.platform })

    return <Container>
        <ShowDate date={date} />

        <h2>Games you've completed </h2>
        {games.map((x, index) => <Game id='game' key={index} game={x} />)}

        <GameInput date={date} addGame={addGame} />
    </Container>
}

export default connect(s => ({ games: s.games, date: s.date }))(Games, ShowDate)