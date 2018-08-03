import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  padding-top: 10px;
`

const GameItem = styled.div`
display: inline;
margin: 10px;
`
const Game = ({game: { title, platform }}) => {
    return <Container>
        <GameItem id="title">{title}</GameItem>
        on
            <GameItem id="platform">{platform}</GameItem>
    </Container>
}

export default Game