import { applyMiddleware, createStore } from 'redux';
import reducer from '../Components/redux/reducer'
import { middleWare } from '../Components/redux/store'

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
    return createStoreWithMiddleware(reducer, initialState);
};