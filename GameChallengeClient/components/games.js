import React from 'react'

class Games extends React.PureComponent {
    render() {
        return <div>
            {JSON.stringify(this.props.game)}
        </div>
    }
}

export default Games