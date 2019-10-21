import React from 'react'
import { shallow } from 'enzyme';
import HelloUser from './helloUser'
import "../../setupTest"
import { testStore } from '../../Utils';
import Cookies from 'js-cookie';

jest.mock("axios");
const logOut = jest.fn();
const dispatch = jest.fn();
const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    store.dispatch = dispatch
    const wrapper = shallow(<HelloUser store={store} dispatch={store.dispatch} />).dive().dive()
    return wrapper;
};

describe('Hello User', () => {
    it('checks user is Guest when logged out', () => {
        let wrapper;
        const initialState = {
            userName: "Guest"
        }
        wrapper = setUp(initialState);
        console.log(wrapper.find('h1').at(0).text())
        expect(wrapper.find('h1').at(0).text()).toBe('Hello Guest')
    })
    it('checks userName when logged In', () => {
        let wrapper;
        const initialState = {
            userName: "Dan Brown"
        }
        wrapper = setUp(initialState);
        expect(wrapper.find('h1').at(1).text()).toBe('Hello Dan Brown')
    })
    it('checks Log Out button, cookie delete, redux dispatch working', () => {
        let wrapper;
        const initialState = {
            userName: "Dan Brown"
        }
        wrapper = setUp(initialState);
        wrapper.find('button').props().onClick()
        const cookie = Cookies.get('name');
        expect(cookie).toBeUndefined();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({ "payload": "Guest", "type": "loggedOut" });
    })
})