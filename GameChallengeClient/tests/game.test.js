import Game from '../components/game'
import React from 'react'
import {mount} from 'enzyme'

it('renders a game and a platform', () => {
    const gametest = {title: 'Zelda', platform: 'NES'}
    const wrapper = mount(<Game game={gametest} />)
    expect(wrapper.find(Game).find('div').length).toEqual(3)
    expect(wrapper.find(Game).find('#title').first().text()).toEqual('Zelda')
    expect(wrapper.find(Game).find('#platform').first().text()).toEqual('NES')
  })