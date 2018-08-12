const reducers = {}

reducers.addGame = (state, game) => ({...state, games: [...state.games, game]})

reducers.changeDate = (state, date) => {
    return ({...state, date: date.toISOString()})
}

export default reducers