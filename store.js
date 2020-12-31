import { createStore, combineReducers } from 'redux'
import history from './reducers/history'

const reducer = combineReducers({
    history
})
    
const store = createStore(reducer);

export default store;