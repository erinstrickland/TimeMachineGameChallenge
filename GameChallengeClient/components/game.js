import React from 'react'

class Game extends React.PureComponent {
    render() {
        return <div>
            <div id="title">{this.props.game.title}</div>
            <div id="platform">{this.props.game.platform}</div>
        </div>
    }
}

export default Game