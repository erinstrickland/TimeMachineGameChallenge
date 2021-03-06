import React from 'react'
import postData from '../helpers'
import styled from 'styled-components'
import moment from 'moment'
import { callReducer } from '../react-state';

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
    this.state = { title: '', platform: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({ title: event.target.value })
    }
    if (event.target.name === 'platform') {
      this.setState({ platform: event.target.value })
    }
  }

  handleSubmit(event) {
    postData('/api/game', {
      Title: this.state.title,
      Platform: this.state.platform
    })
      .then(() => this.props.addGame({ title: this.state.title, platform: this.state.platform }))
      .then(() => {
        this.setState({ title: '' })
        this.setState({ platform: '' })
      })
      .then(() => {
        callReducer('changeDate', moment(this.props.date).add(1, 'months'))
      })

      .catch(error => console.error(error))
    event.preventDefault()
  }

  render() {
    const { title, platform } = this.state
    const isEnabled =
      title.length > 0 &&
      platform.length > 0
      
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <h2>Please enter a game</h2>
          <Input>
            <NonFlexibleWidth>
              <label htmlFor="Title">
                Game:
              </label>
            </NonFlexibleWidth>
            <input id="Title" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </Input>
          <Input>
            <NonFlexibleWidth><label htmlFor="Platform">
              Platform:
          </label></NonFlexibleWidth>
            <input id="Platform" type="text" name="platform" value={this.state.platform} onChange={this.handleChange} />
          </Input>
          <button disabled={!isEnabled}>Submit</button>
        </form>
      </Container> 
    )
  }
}

export default GameInput
