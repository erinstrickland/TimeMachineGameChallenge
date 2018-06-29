import React from 'react'
import Game from './game'
import GameInput from './gameinput'

class Games extends React.PureComponent {
    render() {
        return <div>
            {this.props.games.map((x, index) => <Game key={index} game={x}/>)}
            <GameInput />
        </div>
    }
}

export default Games