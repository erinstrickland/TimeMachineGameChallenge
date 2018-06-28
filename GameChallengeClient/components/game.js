import React from 'react'

class Game extends React.PureComponent {
    render() {
        return <div>
            <div>{this.props.game.title}</div>
            <div>{this.props.game.platform}</div>
        </div>
    }
}

export default Game