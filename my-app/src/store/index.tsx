import { applyMiddleware, createStore } from 'redux'
import Reducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(Reducer, applyMiddleware(thunk))

export type RootStore = ReturnType<typeof Reducer>

export default store;