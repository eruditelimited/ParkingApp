import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from '../Reducers';
const initialState= {};
const middleware = [thunk];
const store =createStore(rootreducer,initialState,applyMiddleware(...middleware));
export default store;