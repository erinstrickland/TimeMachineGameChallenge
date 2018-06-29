import React from 'react'
import postData from '../helpers'

class GameInput extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {game: '', platform: ''}
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
        if(event.target.name === 'game') {
            this.setState({game: event.target.value})
        }
        if(event.target.name === 'platform') {
            this.setState({platform: event.target.value})
        }
    }
  
    handleSubmit(event) {
        alert('A game was submitted: ' + this.state.game + '  ' + this.state.platform)
        postData('/api/game', {
            Id: "6",
            Title: this.state.game,
            Platform: this.state.platform
        })
            .then(data => console.log(data))
            .catch(error => console.error(error))
        event.preventDefault()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Game:
            <input type="text" name="game" value={this.state.game} onChange={this.handleChange} />
          </label>
          <label>
            Platform:
            <input type="text" name="platform" value={this.state.platform} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }

  export default GameInput
