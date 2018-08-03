import Games, { Container } from '../components/games'
import React from 'react'
import { mount } from 'enzyme'

it('displays a list of completed games', () => {
    const gamestest = [{ id: '1', title: 'Zelda', platform: 'NES' }, { id: '2', title: 'Joji', platform: 'Ukelele' }]
    const wrapper = mount(<Games games={gamestest} />)
    expect(wrapper.find('#game').length).toEqual(2)
    expect(wrapper.find('#game').find('#title').first().text()).toEqual('Zelda')
    expect(wrapper.find('#game').find('#platform').first().text()).toEqual('NES')
    expect(wrapper.find('#game').find('#title').last().text()).toEqual('Joji')
    expect(wrapper.find('#game').find('#platform').last().text()).toEqual('Ukelele')
})