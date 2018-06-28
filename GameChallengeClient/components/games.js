import React from 'react'
import Game from './game'

class Games extends React.PureComponent {
    render() {
        return <div>
            {this.props.games.map((x, index) => <Game key={index} game={x}/>)}
        </div>
    }
}

export default Games