import React from 'react'
import postData from '../helpers'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  padding-top: 25px;
`
const Input = styled.div`
  padding-bottom: 10px;
  width: 500px;
`

const NonFlexibleWidth = styled.div`
  width: 300px;
  float: left;
  display: inline;
`

class GameInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { game: '', platform: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    if (event.target.name === 'game') {
      this.setState({ game: event.target.value })
    }
    if (event.target.name === 'platform') {
      this.setState({ platform: event.target.value })
    }
  }

  handleSubmit(event) {
    alert(`A game was submitted: ${this.state.game} \n Platform:  ${this.state.platform}`)
    postData('/api/game', {
      Title: this.state.game,
      Platform: this.state.platform
    })
      .then(data => console.log(data))
      .then(() => this.props.addGame({game: this.state.game, platform: this.state.platform}))

      .catch(error => console.error(error))
    event.preventDefault()
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
        <h2>Please enter a game</h2>
          <Input>
            <NonFlexibleWidth>
              <label htmlFor="Game">
              Game:
              </label>
          </NonFlexibleWidth>
            <input id="Game" type="text" name="game" value={this.state.game} onChange={this.handleChange} />
          </Input>
          <Input>
            <NonFlexibleWidth><label htmlFor="Platform">
            Platform:
          </label></NonFlexibleWidth>
            <input id="Platform" type="text" name="platform" value={this.state.platform} onChange={this.handleChange} />
          </Input>
          <input type="submit" value="Submit" />
        </form>
      </Container>
    )
  }
}

export default GameInput
