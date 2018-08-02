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

class Game extends React.PureComponent {
    //Divs that the list feeds into to render the indv components
    render() {
        return <Container>
            <GameItem id="title">{this.props.game.title}</GameItem>
            on
            <GameItem id="platform">{this.props.game.platform}</GameItem>
        </Container>
    }
}

export default Game