const reducers = {}

reducers.addGame = (state, game) => ({...state, games: [...state.games, game]})

reducers.changeDate = (state, date) => ({...state, date})

export default reducers