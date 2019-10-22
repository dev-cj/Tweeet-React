import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import "../../setupTest"
import { testStore } from '../../Utils';
import LoginControl from './LoginControl';
import { Provider } from "react-redux";

describe('LoginControl', () => {
    it('check AddPost mounts when logged In', () => {
        const setUp = (initialState = {}) => {
            const store = testStore(initialState);
            const wrapper = shallow(<LoginControl store={store} />).dive().dive()
            return wrapper;
        };
        let wrapper;
        const initialState = {
            isLoggedIn: true
        }
        wrapper = setUp(initialState);

        //console.log(wrapper.debug())
        //console.log(wrapper.find((AddPost)))
        expect(wrapper.find('Connect(AddPost)')).toHaveLength(1);
    })
    it('check link nav shows when logged out and renders login when clicked', () => {
        let wrapper;
        const setUp = (initialState = {}) => {
            const store = testStore(initialState);
            const wrapper = mount(<MemoryRouter initialEntries={['/']}><Provider store={store}><LoginControl /></Provider></MemoryRouter>)
            return wrapper;
        };
        const initialState = {
            isLoggedIn: false
        }
        wrapper = setUp(initialState);
        wrapper.find('a').at(0).simulate('click', { button: 0 })
        expect(wrapper.find('button').at(0).text()).toBe('Login')     
    })
    it('check link nav shows when logged out and renders register when clicked', () => {
        let wrapper;
        const setUp = (initialState = {}) => {
            const store = testStore(initialState);
            const wrapper = mount(<MemoryRouter initialEntries={['/']}><Provider store={store}><LoginControl /></Provider></MemoryRouter>)
            return wrapper;
        };
        const initialState = {
            isLoggedIn: false
        }
        wrapper = setUp(initialState);
        wrapper.find('a').at(2).simulate('click', { button: 0 })
        expect(wrapper.find('button').at(0).text()).toBe('Register')
    })
})