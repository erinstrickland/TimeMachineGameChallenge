import React from 'react'
import Game from './game'
import GameInput from './gameinput'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  padding-top: 25px;
  display: inline;
`

class Games extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { games: this.props.games }
    
        this.addGame = this.addGame.bind(this)
      }
    //Topmost container with list of games, grabs Zelda and feeds indv game data into component that creates divs
    addGame(game){
        const index = this.props.games.length
        const newGames = [...this.props.games, { id: index + 1, title: game.game, platform: game.platform }]
        this.setState({ games: newGames }, () => console.log(this.state))
    }
    render() {
        return <Container>
            <h2>Games you've completed </h2>
            {this.state.games.map((x, index) => <Game key={index} game={x}/>)}

            <GameInput addGame={this.addGame}/>
        </Container>
    }
}

export default Games