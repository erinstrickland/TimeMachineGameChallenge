const reducers = {}

reducers.addGame = (state, game) => ({...state, games: [...state.games, game]})

export default reducers