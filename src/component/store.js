import cartReducer from './reducers/CartReducer'
import {createStore} from 'redux'

const persistedState = localStorage.getItem('State') ? JSON.parse(localStorage.getItem('State')) : {cart:[]}

const store = createStore(cartReducer,persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store