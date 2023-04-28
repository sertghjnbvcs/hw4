import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer
});

const store = createStore(rootReducer);

export default store;