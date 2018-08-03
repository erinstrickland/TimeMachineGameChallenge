import reducers from './reducers'
import { createStore } from 'redux'

const initialState = { games: [] }

const mainReducer = (state = initialState, action) => {
    const reducer = reducers[action.type]
    if (typeof reducer !== 'function') return state
    return reducer(state, action.data)
}

const store = createStore(
    mainReducer
)

export default store
export const callReducer = (type, data) => store.dispatch({ type, data })